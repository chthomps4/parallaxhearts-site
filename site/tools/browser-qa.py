"""Local-only review/public regression checks. Requires Python Playwright and Chromium.

Start the public production app at 127.0.0.1:3001 and `npm run preview:poetry
-- --production` at 127.0.0.1:3002 first. No external destinations are opened.
"""
import json
import os
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs/screenshots/after"
OUT.mkdir(parents=True, exist_ok=True)
PUBLIC = "http://127.0.0.1:3001"
REVIEW = "http://127.0.0.1:3002"
POEMS = json.loads((ROOT / "content/poems.json").read_text())
ROUTES = ["/", "/crown-of-phases", "/poetry", "/poetry/a-minor-correction", "/poetry/the-unscheduled-coronation", "/poetry/the-golden-section", "/music", "/project", "/about", "/contact", "/shop", "/support", "/sacred-geometry", "/energy-healing", "/book", "/visuals", "/graphic-novel", "/graphic-novel/chapter-one", "/graphic-novel/chapter-one/page-001"]
rows = []
interactions = []
violations = []


def load_images(page):
    page.evaluate("""async () => {
      for (const image of document.images) image.loading = 'eager';
      await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
      await document.fonts.ready;
    }""")


with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=os.environ.get("CHROME_PATH", "/usr/bin/chromium"), args=["--no-sandbox"])
    for width in ([] if "--interactions-only" in sys.argv else [375, 430, 768, 1024, 1440]):
        context = browser.new_context(viewport={"width": width, "height": 960}, device_scale_factor=1)
        page = context.new_page()
        for route in ROUTES:
            errors = []
            handler = lambda error: errors.append(str(error))
            page.on("pageerror", handler)
            response = page.goto(REVIEW + route, wait_until="networkidle")
            load_images(page)
            row = dict(route=route, width=width, status=response.status, h1=page.locator("h1").count(), overflow=page.evaluate("document.documentElement.scrollWidth > innerWidth"), brokenImages=page.locator("img").evaluate_all("imgs => imgs.filter(i => !i.naturalWidth).map(i => i.src)"), errors=errors, title=page.title())
            assert row["status"] == 200 and row["h1"] == 1 and not row["overflow"] and not row["brokenImages"] and not errors, row
            assert page.locator("body > header").count() == 1, route
            page.screenshot(path=str(OUT / ((route.strip("/").replace("/", "-") or "home") + f"-{width}.png")), full_page=True)
            rows.append(row)
            page.remove_listener("pageerror", handler)
        context.close()
        print(f"Responsive screenshots/checks: {width}px PASS", flush=True)

    context = browser.new_context(viewport={"width": 1440, "height": 960}, permissions=["clipboard-read", "clipboard-write"])
    page = context.new_page()
    # All owner-approved poems: exact semantic text, metadata, and public cards.
    for poem in POEMS:
        if not poem["poemLines"]:
            continue
        route = "/poetry/" + poem["slug"]
        response = page.goto(REVIEW + route, wait_until="networkidle")
        assert response.status == 200, route
        assert "noindex" in page.locator('meta[name="robots"]').get_attribute("content"), route
        actual = "\n\n".join(page.locator(".poem-stanza").all_text_contents())
        assert actual == "\n".join(poem["poemLines"]), poem["title"]
        assert page.locator('link[rel="canonical"]').get_attribute("href") == "https://www.parallaxhearts.org" + route
        assert page.locator('meta[property="og:image"]').first.get_attribute("content") == "https://www.parallaxhearts.org" + (poem["shareImage"] or route + "/opengraph-image")
        assert "sourceNotes" not in page.content() and poem["sourceNotes"] not in page.content()
        assert page.get_by_role("button", name="Share poem", exact=True).count() == 0
        image = context.request.get(REVIEW + route + "/opengraph-image")
        assert image.status == 200 and "image/png" in image.headers.get("content-type", ""), route
        public = context.request.get(PUBLIC + route)
        assert public.status == 200, route
        assert context.request.get(PUBLIC + route + "/opengraph-image").status == 200, route
        assert "sourceNotes" not in public.text(), route
    interactions.append("All 14 owner-approved poem texts, public pages, canonical URLs and social images PASS")

    for route in ["/", "/crown-of-phases", "/poetry", "/sitemap.xml"]:
        response = context.request.get(PUBLIC + route)
        assert response.status == 200, route
    sitemap = context.request.get(PUBLIC + "/sitemap.xml").text()
    for poem in POEMS:
        assert "/poetry/" + poem["slug"] in sitemap
    for route in ["/content/poems.json", "/content/sources/collection-ii.md", "/docs/site-audit-2026-11.md", "/poetry/not-an-approved-poem"]:
        assert context.request.get(PUBLIC + route).status == 404
    interactions.append("Approved sitemap entries present; internal files and unknown poem remain inaccessible")
    page.goto(PUBLIC, wait_until="networkidle")
    page.get_by_role("link", name="Read The Golden Section", exact=True).first.click()
    page.wait_for_url(PUBLIC + "/poetry/the-golden-section")
    assert page.url == PUBLIC + "/poetry/the-golden-section"
    assert page.locator("h1").inner_text() == "The Golden Section"
    page.get_by_role("button", name="Copy link", exact=True).click()
    assert page.evaluate("navigator.clipboard.readText()") == "https://www.parallaxhearts.org/poetry/the-golden-section"
    page.evaluate("Object.defineProperty(navigator, 'share', {configurable: true, value: async (data) => {window.__shared = data}})")
    page.get_by_role("button", name="Share poem", exact=True).click()
    assert page.evaluate("window.__shared.url") == "https://www.parallaxhearts.org/poetry/the-golden-section"
    page.goto(PUBLIC)
    page.keyboard.press("Tab")
    assert page.get_by_role("link", name="Skip to content").evaluate("e=>e===document.activeElement")
    page.keyboard.press("Enter")
    assert page.locator("#main-content").evaluate("e=>e===document.activeElement")
    interactions.append("Homepage anchor, canonical-link copy, stubbed native-share payload, and keyboard skip link PASS")

    page.goto(REVIEW + "/poetry", wait_until="networkidle")
    search = page.get_by_role("searchbox", name="Find a poem")
    search.fill("receipt")
    assert page.locator(".poem-card").count() == 1
    assert page.locator(".poem-card h3").inner_text() == "A Minor Correction"
    search.fill("does-not-exist-123")
    assert page.locator(".poem-card").count() == 0
    assert page.get_by_text("No poems match those filters.", exact=False).is_visible()
    page.get_by_role("button", name="Clear filters").click()
    assert page.locator(".poem-card").count() == len(POEMS)
    page.get_by_label("Theme", exact=True).select_option("Sacred Geometry")
    assert page.locator(".poem-card").count() == 5
    page.get_by_label("Collection", exact=True).select_option("Crown of Phases — Collection II")
    assert page.locator(".poem-card").count() == 4
    page.get_by_label("Form", exact=True).select_option("Free verse")
    assert page.locator(".poem-card").count() == 4
    interactions.append("Search, empty state, reset, theme/collection/form filters PASS")

    page.goto(REVIEW + "/poetry/the-rings", wait_until="networkidle")
    page.get_by_role("button", name="Copy local review link").click()
    expect(page.get_by_role("status")).to_have_text("Link copied.")
    assert page.evaluate("navigator.clipboard.readText()") == REVIEW + "/poetry/the-rings"
    page.evaluate("Object.defineProperty(navigator, 'clipboard', {configurable: true, value: undefined})")
    page.get_by_role("button", name="Copy local review link").click()
    expect(page.get_by_label("Poem link", exact=True)).to_have_value(REVIEW + "/poetry/the-rings")
    interactions.append("Review link clipboard and denied-clipboard manual fallback PASS")

    page.goto(REVIEW + "/sacred-geometry", wait_until="networkidle")
    page.get_by_role("button", name="2. Shared space", exact=True).click()
    assert "vesica piscis" in page.locator(".geometry-construction figcaption").inner_text()
    page.get_by_role("button", name="3. Six around one", exact=True).click()
    assert page.locator(".geometry-construction svg circle").count() == 9
    assert page.get_by_role("button", name="3. Six around one", exact=True).get_attribute("aria-pressed") == "true"
    page.get_by_role("button", name="1. One circle", exact=True).click()
    assert page.locator(".geometry-construction svg circle").count() == 2
    interactions.append("Geometry construction steps/diagram/announced explanation PASS")

    # WCAG automated scan on changed primary journeys and preserved reader.
    axe = ROOT / "node_modules/axe-core/axe.min.js"
    for route in ["/", "/crown-of-phases", "/poetry", "/poetry/the-rings", "/sacred-geometry", "/energy-healing", "/about", "/contact", "/shop", "/support", "/music", "/graphic-novel/chapter-one/page-001"]:
        page.goto(REVIEW + route, wait_until="networkidle")
        load_images(page)
        page.add_script_tag(path=str(axe))
        result = page.evaluate("async () => (await axe.run(document, {runOnly: {type: 'tag', values: ['wcag2a','wcag2aa','wcag21aa','wcag22aa']}})).violations")
        if result:
            violations.append({"route": route, "violations": [{"id": v["id"], "impact": v["impact"], "nodes": [{"target": n["target"], "summary": n.get("failureSummary")} for n in v["nodes"]]} for v in result]})

    # Exact concept viewport and individual section captures for visual comparison.
    page.set_viewport_size({"width": 1487, "height": 1058})
    page.goto(REVIEW, wait_until="networkidle")
    load_images(page)
    page.screenshot(path=str(OUT / "home-1487.png"), full_page=True)
    page.locator(".home-hero").screenshot(path=str(OUT / "hero-section.png"))
    page.locator(".parchment-band:not(.anchor-feature)").screenshot(path=str(OUT / "poetry-section.png"))
    page.locator(".anchor-feature").screenshot(path=str(OUT / "anchor-section.png"))
    page.locator(".explorations-section").screenshot(path=str(OUT / "explorations-section.png"))
    context.close()

    mobile = browser.new_context(**p.devices["Pixel 5"], reduced_motion="reduce")
    page = mobile.new_page()
    page.goto(REVIEW, wait_until="networkidle")
    button = page.get_by_role("button", name="Open navigation menu")
    button.click()
    assert page.get_by_role("navigation", name="Mobile navigation").is_visible()
    expect(page.get_by_role("navigation", name="Mobile navigation").get_by_role("link", name="Crown of Phases")).to_be_focused()
    page.keyboard.press("Escape")
    assert button.get_attribute("aria-expanded") == "false"
    assert button.evaluate("e => e === document.activeElement")
    button.click()
    page.get_by_role("navigation", name="Mobile navigation").get_by_role("link", name="Poetry", exact=True).click()
    page.wait_for_url(REVIEW + "/poetry")
    assert page.url == REVIEW + "/poetry"
    assert page.get_by_role("button", name="Open navigation menu").get_attribute("aria-expanded") == "false"
    interactions.append("Pixel 5 emulation/reduced motion: menu focus, Escape, focus return, navigation reset PASS")
    mobile.close()
    browser.close()

summary = {"responsiveSummary": json.loads((OUT / "responsive-summary.json").read_text()) if (OUT / "responsive-summary.json").exists() else None, "responsive": rows, "interactions": interactions, "axeViolations": violations, "browser": "Playwright/system Chromium; Browser plugin unavailable"}
(OUT / "qa-results.json").write_text(json.dumps(summary, indent=2))
assert not violations, json.dumps(violations, indent=2)
print(json.dumps({"responsiveChecks": len(rows), "poemPages": len(POEMS), "interactions": interactions, "axeViolations": violations}, indent=2))
