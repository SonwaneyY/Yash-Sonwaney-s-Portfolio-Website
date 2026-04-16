"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import styles from "./FeaturedWork.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

/** Maps URL slug → category name */
const slugToCategory: Record<string, ProjectCategory> = {
  "product-design": "Product Design",
  "strategy": "Strategy",
  "research": "Research",
};


export default function FeaturedWork() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const initialCategory: ProjectCategory =
    (categoryParam && slugToCategory[categoryParam]) || "All";

  const [active, setActive] = useState<ProjectCategory>(initialCategory);

  // Sync with URL param changes
  useEffect(() => {
    if (categoryParam && slugToCategory[categoryParam]) {
      setActive(slugToCategory[categoryParam]);
    }
  }, [categoryParam]);

  // Auto-scroll to work section when arriving via category link
  useEffect(() => {
    if (categoryParam && slugToCategory[categoryParam]) {
      const el = document.getElementById("work");
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 3200);
        return () => clearTimeout(timer);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === active);

  /** Count per category */
  const countFor = (cat: ProjectCategory) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.filterCategory === cat).length;

  return (
    <section id="work" className={styles.section}>
      <Container>
        {/* Header */}
        <p className={styles.filterLabel}>What are you looking for?</p>

        {/* Category pills */}
        <div className={styles.tabBar} role="tablist">
          {projectCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                className={styles.pill}
                data-active={isActive}
                data-category={cat}
                onClick={() => setActive(cat)}
              >
                {cat} ({countFor(cat)})
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.grid}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease, delay: i * 0.05 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
