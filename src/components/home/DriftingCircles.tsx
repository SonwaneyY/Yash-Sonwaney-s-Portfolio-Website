"use client";

import { useEffect, useRef } from "react";

interface Circle {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  dx: number;
  dy: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

function createCircles(width: number, height: number): Circle[] {
  const circles: Circle[] = [];
  const count = 10;

  for (let i = 0; i < count; i++) {
    const size = 40 + Math.random() * 100;
    circles.push({
      cx: Math.random() * width,
      cy: Math.random() * height,
      rx: size + Math.random() * 30,
      ry: size,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: 0.25 + Math.random() * 0.2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.15,
    });
  }

  return circles;
}

export default function DriftingCircles() {
  const svgRef = useRef<SVGSVGElement>(null);
  const circlesRef = useRef<Circle[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const width = svg.clientWidth || 500;
    const height = svg.clientHeight || 600;
    circlesRef.current = createCircles(width, height);

    const ellipses = svg.querySelectorAll("ellipse");

    function animate() {
      const circles = circlesRef.current;

      for (let i = 0; i < circles.length; i++) {
        const c = circles[i];
        c.cx += c.dx;
        c.cy += c.dy;
        c.rotation += c.rotationSpeed;

        // Wrap around boundaries
        if (c.cx < -c.rx) c.cx = width + c.rx;
        if (c.cx > width + c.rx) c.cx = -c.rx;
        if (c.cy < -c.ry) c.cy = height + c.ry;
        if (c.cy > height + c.ry) c.cy = -c.ry;

        const el = ellipses[i];
        if (el) {
          el.setAttribute("cx", String(c.cx));
          el.setAttribute("cy", String(c.cy));
          el.setAttribute(
            "transform",
            `rotate(${c.rotation} ${c.cx} ${c.cy})`
          );
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    }

    // Set initial positions
    ellipses.forEach((el, i) => {
      const c = circlesRef.current[i];
      if (c) {
        el.setAttribute("cx", String(c.cx));
        el.setAttribute("cy", String(c.cy));
        el.setAttribute("rx", String(c.rx));
        el.setAttribute("ry", String(c.ry));
        el.setAttribute("opacity", String(c.opacity));
        el.setAttribute(
          "transform",
          `rotate(${c.rotation} ${c.cx} ${c.cy})`
        );
      }
    });

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <ellipse
          key={i}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
