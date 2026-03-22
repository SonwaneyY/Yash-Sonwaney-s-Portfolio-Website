"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  company: string;
  year: string;
  imagePlaceholder: string;
}

// Clip-path reveal: image wipes in from bottom
const imageReveal = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ProjectCard({
  slug,
  title,
  subtitle,
  category,
  company,
  year,
  imagePlaceholder,
}: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on the image placeholder
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <Link href={`/work/${slug}`} className={styles.card} ref={ref}>
      <motion.div
        className={styles.imageWrapper}
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
      >
        <motion.div
          className={styles.imageInner}
          style={{ y: imageY }}
        >
          <span className={styles.imagePlaceholder}>{imagePlaceholder}</span>
        </motion.div>
      </motion.div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <span className={styles.meta}>
          {company} &middot; {year}
        </span>
      </div>
    </Link>
  );
}
