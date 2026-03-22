"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { siteConfig, experience } from "@/lib/data";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

// Staggered character reveal for hero name
function AnimatedName({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.035, delayChildren: delay } },
        }}
        style={{ display: "inline-flex" }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.6, ease } },
            }}
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <span style={{ display: "inline-block" }}>{char}</span>
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        {/* Geometric arc */}
        <motion.div
          className={styles.geometricArc}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease }}
        />

        {/* Center: headline + bio + CTAs */}
        <div className={styles.centerContent}>
          <motion.span
            className={styles.roleLabel}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.6 }}
          >
            Product Designer & Strategist
          </motion.span>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
          >
            I design enterprise tools and AI-native
            workflows that feel simple on the surface
            — and smart underneath.
          </motion.h1>

          <motion.div
            className={styles.belowHeadline}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.9 }}
          >
            <p className={styles.bio}>
              7+ years at HP, Accenture, and Parsons — bridging research,
              strategy, and craft. Currently exploring how AI reshapes the
              way we design and decide.
            </p>

            <div className={styles.ctaGroup}>
              <a href="#work" className={styles.ctaPrimary}>
                <span>See my work</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href={`mailto:${siteConfig.email}`} className={styles.ctaSecondary}>
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: massive name, centered */}
        <div className={styles.nameBlock}>
          <Container>
            <div className={styles.nameInner}>
              <AnimatedName text="Yash" className={styles.nameFirst} delay={0.3} />
              <AnimatedName text="Sonwaney" className={styles.nameLast} delay={0.5} />
            </div>
          </Container>
        </div>
      </section>

      {/* Experience strip with logos */}
      <section className={styles.experienceStrip}>
        <Container>
          <motion.div
            className={styles.experienceGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className={styles.experienceItem}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
              >
                <div className={styles.experienceLogo}>
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={styles.logoImg}
                  />
                </div>
                <div className={styles.experienceText}>
                  <span className={styles.experienceCompany}>{exp.company}</span>
                  <span className={styles.experienceRole}>{exp.role}</span>
                  <span className={styles.experienceYear}>{exp.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
