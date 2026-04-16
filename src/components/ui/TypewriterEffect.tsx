"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorColor?: string;
  className?: string;
}

export default function TypewriterEffect({
  words = ["Strategy", "Research", "Design"],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1000,
  cursorColor = "var(--accent)",
  className,
}: TypewriterEffectProps) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentWord = words[wordIndex % words.length] ?? "";

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!isDeleting && charIndex < currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, pauseDuration);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, wordIndex, currentWord, typingSpeed, deletingSpeed, pauseDuration, words]);

  // Reset charIndex when wordIndex changes
  useEffect(() => {
    if (!isDeleting) setCharIndex(0);
  }, [wordIndex, isDeleting]);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center" }}
      aria-live="polite"
    >
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          background: cursorColor,
          width: 2,
          height: "1em",
          marginLeft: 2,
          verticalAlign: "bottom",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
          borderRadius: 1,
        }}
      />
    </span>
  );
}
