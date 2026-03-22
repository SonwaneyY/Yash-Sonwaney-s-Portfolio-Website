"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import TextReveal from "@/components/ui/TextReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { staggerContainerWide, fadeInUp, viewportOnce } from "@/lib/animations";
import styles from "./FeaturedWork.module.css";

export default function FeaturedWork() {
  return (
    <section id="work" className={styles.section}>
      <Container>
        <TextReveal className={styles.header} as="h2">
          Selected work
        </TextReveal>

        <motion.div
          className={styles.grid}
          variants={staggerContainerWide}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeInUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <Link href="/work" className={styles.viewAll}>
          View all work &rarr;
        </Link>
      </Container>
    </section>
  );
}
