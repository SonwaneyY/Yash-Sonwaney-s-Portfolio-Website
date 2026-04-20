"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Ticker from "./Ticker";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const GREETING = "Hi, I'm Yash Sonwaney.";
const GREETING_BODY = GREETING.slice(0, -1); // without trailing period
const CHAR_DELAY = 68; // ms per character

export default function Hero() {
  const [phase, setPhase] = useState<"intro" | "reveal">("intro");
  const [typedCount, setTypedCount] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  const isReveal = phase === "reveal";
  const typingDone = typedCount >= GREETING.length;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("intro-active");

    const timer = setTimeout(() => {
      setPhase("reveal");
      document.body.style.overflow = "";
      document.body.classList.remove("intro-active");
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.classList.remove("intro-active");
    };
  }, []);

  // Type one character at a time after reveal
  useEffect(() => {
    if (!isReveal || typingDone) return;
    const t = setTimeout(() => setTypedCount((c) => c + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [isReveal, typedCount, typingDone]);

  // Blink the cursor (while typing) or the period (when done)
  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ---- INTRO OVERLAY — thin rule draws itself ---- */}
      <AnimatePresence>
        {!isReveal && (
          <motion.div
            className={styles.introOverlay}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <motion.div
              className={styles.introRule}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- MAIN HERO ---- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
        <Container>
          {/* Typed greeting */}
          <div className={styles.greeting} aria-label={GREETING}>
            <span aria-hidden="true">
              {typingDone ? (
                <>
                  {GREETING_BODY}
                  <span className={styles.greetingPeriod} style={{ opacity: cursorOn ? 1 : 0 }}>.</span>
                </>
              ) : (
                <>
                  {GREETING.slice(0, typedCount)}
                  <span className={styles.greetingCursor} style={{ opacity: cursorOn ? 1 : 0 }}>|</span>
                </>
              )}
            </span>
          </div>

          {/* Display statement */}
          <motion.h1
            className={styles.statement}
            initial={{ opacity: 0, y: 24 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          >
            A strategic design generalist bridging business strategy, systems thinking, and emerging technology.
          </motion.h1>

          {/* Subline */}
          <motion.p
            className={styles.subline}
            initial={{ opacity: 0, y: 16 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            Senior product designer operating between enterprise tools, service ecosystems, and AI-native workflows.
          </motion.p>

        </Container>
        </div>

        {/* ---- TICKER — pinned to bottom ---- */}
        <motion.div
          className={styles.tickerContainer}
          initial={{ opacity: 0 }}
          animate={isReveal ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.8 }}
        >
          <Ticker />
        </motion.div>
      </section>
    </>
  );
}
