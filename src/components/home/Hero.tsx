"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Ticker from "@/components/home/Ticker";
import Container from "@/components/ui/Container";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [phase, setPhase] = useState<"intro" | "reveal">("intro");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("intro-active");

    const timer = setTimeout(() => {
      setPhase("reveal");
      document.body.style.overflow = "";
      document.body.classList.remove("intro-active");
    }, 2800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.classList.remove("intro-active");
    };
  }, []);

  const isReveal = phase === "reveal";

  return (
    <>
      {/* ---- FULL-SCREEN OVERLAY ---- */}
      <AnimatePresence>
        {!isReveal && (
          <motion.div
            className={styles.introOverlay}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <div className={styles.introCenter}>
              <motion.div
                className={styles.progressWrapper}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.25 }}
              >
                <div className={styles.progressTrack}>
                  <motion.div
                    className={styles.progressBar}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- MAIN HERO ---- */}
      <section className={styles.hero}>
        {/* Top group — close to the header */}
        <Container>
          <div className={styles.topContent}>
            <motion.h1
              className={styles.headline}
              initial={{ opacity: 0, y: 20 }}
              animate={isReveal ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
            >
              Hi I&rsquo;m Yash <span className={styles.wave}>👋</span>
            </motion.h1>

            <motion.p
              className={styles.subheadline}
              initial={{ opacity: 0, y: 20 }}
              animate={isReveal ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
            >
              a Strategic Design Generalist bridging the gap between business strategy and user needs operating between systems-level innovation, competitive advantage, and emerging tech solutions.
            </motion.p>
          </div>
        </Container>

        {/* Bottom group — close to the page fold */}
        <div className={styles.tickerSection}>
          <Container>
            <motion.div
              className={styles.tickerBlock}
              initial={{ opacity: 0, y: 16 }}
              animate={isReveal ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.65 }}
            >
              <span className={styles.tickerLabel}>My Competencies</span>
              <Ticker />
            </motion.div>
          </Container>
        </div>
      </section>
    </>
  );
}
