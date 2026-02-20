import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  strokeClassName?: string; // e.g. "stroke-black/10" or "stroke-blue-200/60"
};

/**
 * Geometrically consistent globe:
 * - Single center + radius
 * - Meridians are rotations of the same path
 * - Latitudes are scaled circles around the same center
 * This eliminates tiny mismatches at intersections when resized.
 */
export default function GlobeSVG({
  strokeClassName = "stroke-black/10",
  className,
  ...props
}: Props) {
  const C = 300; // center
  const R = 260; // radius

  // Base meridian path: vertical half-ellipse-ish curve, symmetric, derived from same center
  // We draw a "meridian" as an ellipse using a circle scaled in X with a transform.
  // Using <circle> + transform keeps it exact under rotations.
  const latScales = [0.82, 0.62, 0.42]; // latitudes (subtle)
  const meridianAngles = [0, 30, 60, 90, 120, 150]; // enough density without clutter

  return (
    <svg
      viewBox="0 0 600 600"
      width="600"
      height="600"
      aria-hidden="true"
      className={className}
      shapeRendering="geometricPrecision"
      {...props}
    >
      <g
        fill="none"
        className={strokeClassName}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer sphere */}
        <circle cx={C} cy={C} r={R} />

        {/* Latitudes (exact circles scaled in Y around the same center) */}
        {latScales.map((s, i) => (
          <circle
            key={`lat-${i}`}
            cx={C}
            cy={C}
            r={R}
            transform={`translate(${C} ${C}) scale(1 ${s}) translate(${-C} ${-C})`}
          />
        ))}

        {/* Meridians (exact circles scaled in X + rotated around same center) */}
        {meridianAngles.map((deg) => (
          <circle
            key={`mer-${deg}`}
            cx={C}
            cy={C}
            r={R}
            transform={`translate(${C} ${C}) rotate(${deg}) scale(0.62 1) translate(${-C} ${-C})`}
          />
        ))}

        {/* Subtle poles */}
        <circle cx={C} cy={C - R} r="4" />
        <circle cx={C} cy={C + R} r="4" />
      </g>
    </svg>
  );
}
