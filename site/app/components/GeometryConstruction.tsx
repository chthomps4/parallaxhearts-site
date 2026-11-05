"use client";
import { useId, useState } from "react";

const steps = [
  {
    title: "One circle",
    text: "Start with one circle. Every point on its edge is the same distance—the radius—from its center.",
  },
  {
    title: "Shared space",
    text: "Keep the same radius. Place a second center on the first circle. Their overlap makes the lens-shaped region often called a vesica piscis. Either intersection point and the two centers form an equilateral triangle.",
  },
  {
    title: "Six around one",
    text: "Step the same compass opening around the first circumference. Six equally spaced centers make six surrounding circles. The pattern follows from 60-degree geometry, not a hidden physical force.",
  },
];

export default function GeometryConstruction() {
  const [step, setStep] = useState(0);
  const id = useId();
  return (
    <figure className="geometry-construction">
      <svg
        viewBox="0 0 400 340"
        role="img"
        aria-labelledby={`${id}-title ${id}-description`}
      >
        <title
          id={`${id}-title`}
        >{`${steps[step].title}: an equal-radius circle construction`}</title>
        <desc id={`${id}-description`}>{steps[step].text}</desc>
        <circle
          cx="200"
          cy="170"
          r="80"
          fill="none"
          stroke="#744921"
          strokeWidth="1.5"
        />
        {step === 1 && (
          <circle
            cx="280"
            cy="170"
            r="80"
            fill="none"
            stroke="#171b28"
            strokeWidth="1.5"
          />
        )}
        {step === 2 &&
          Array.from({ length: 6 }, (_, index) => {
            const angle = (index * Math.PI) / 3;
            return (
              <circle
                key={index}
                cx={200 + 80 * Math.cos(angle)}
                cy={170 + 80 * Math.sin(angle)}
                r="80"
                fill="none"
                stroke="#744921"
                strokeWidth="1.2"
              />
            );
          })}
        <circle cx="200" cy="170" r="3" fill="#171b28" />
        {step > 0 && <circle cx="280" cy="170" r="3" fill="#171b28" />}
        {step === 1 && (
          <path
            d="M240 100.718V239.282M200 170H280"
            stroke="#744921"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
        )}
      </svg>
      <div
        className="construction-controls"
        role="group"
        aria-label="Circle construction steps"
      >
        {steps.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-pressed={index === step}
            onClick={() => setStep(index)}
          >
            {index + 1}. {item.title}
          </button>
        ))}
      </div>
      <figcaption aria-live="polite">{steps[step].text}</figcaption>
    </figure>
  );
}
