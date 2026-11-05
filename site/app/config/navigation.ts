export const mainNavigation = [
  ["Crown of Phases", "/crown-of-phases"],
  ["Poetry", "/poetry"],
  ["Music", "/music"],
  ["Stories", "/project"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;
export const footerMainLinks = mainNavigation.slice(0, 4);
export const footerArchiveLinks = [
  ["Sacred geometry", "/sacred-geometry"],
  ["Energy & healing", "/energy-healing"],
  ["Visuals", "/visuals"],
  ["Book archive", "/book"],
  ["Visual novel", "/graphic-novel"],
] as const;
