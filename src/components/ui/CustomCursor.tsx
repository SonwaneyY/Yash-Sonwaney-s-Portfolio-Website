"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const springScale = useSpring(scale, { damping: 20, stiffness: 400 });

  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        scale.set(3);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        scale.set(1);
      }
    };

    // Show custom cursor, hide default
    document.documentElement.style.cursor = "none";

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, scale]);

  return (
    <>
      {/* Main dot */}
      <motion.div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x,
          y,
          scale: springScale,
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
      {/* Outer ring — follows with more lag */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: useSpring(cursorX, { damping: 20, stiffness: 150, mass: 0.8 }),
          y: useSpring(cursorY, { damping: 20, stiffness: 150, mass: 0.8 }),
          width: 12,
          height: 12,
          borderRadius: "50%",
          border: "1px solid var(--accent)",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          scale: useSpring(scale, { damping: 15, stiffness: 200 }),
          opacity: 0.5,
        }}
      />
    </>
  );
}
