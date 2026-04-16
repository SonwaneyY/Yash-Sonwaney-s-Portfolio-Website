"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import styles from "./FeaturedWork.module.css";

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
  const [scrollWidth, setScrollWidth] = useState(0);

  // Outer tall div — drives scroll progress
  const scrollDriverRef = useRef<HTMLDivElement>(null);
  // Inner filmstrip — measured to compute total horizontal distance
  const filmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categoryParam && slugToCategory[categoryParam]) {
      setActive(slugToCategory[categoryParam]);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (categoryParam && slugToCategory[categoryParam]) {
      const el = document.getElementById("work");
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 3200);
        return () => clearTimeout(timer);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Measure filmstrip width; re-measure on filter change and window resize
  useEffect(() => {
    const measure = () => {
      if (filmRef.current) {
        setScrollWidth(
          Math.max(0, filmRef.current.scrollWidth - window.innerWidth)
        );
      }
    };

    // Wait a tick for layout to settle after filter change
    const id = setTimeout(measure, 60);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  // When filter changes, snap window back to start of this section
  const handleSetActive = (cat: ProjectCategory) => {
    setActive(cat);
    if (scrollDriverRef.current) {
      const top =
        scrollDriverRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const { scrollYProgress } = useScroll({
    target: scrollDriverRef,
    offset: ["start start", "end end"],
  });

  // Translate filmstrip left as user scrolls down through the driver
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === active);

  const countFor = (cat: ProjectCategory) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.filterCategory === cat).length;

  // Driver height = viewport + horizontal scroll distance so scroll maps 1:1
  const driverHeight =
    scrollWidth > 0 ? `calc(100vh + ${scrollWidth}px)` : "200vh";

  return (
    <section id="work" className={styles.section}>
      {/* "What are you looking for?" — scrolls away normally */}
      <Container>
        <h2 className={styles.filterLabel}>What are you looking for?</h2>
      </Container>

      {/* Tall outer container — vertical scroll here drives horizontal progress */}
      <div ref={scrollDriverRef} style={{ height: driverHeight, position: "relative" }}>
        {/* Sticky inner viewport — stays in view while driver scrolls */}
        <div className={styles.stickyViewport}>
          {/* Only the pills are sticky */}
          <div className={styles.stickyFilter}>
            <Container>
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
                      onClick={() => handleSetActive(cat)}
                    >
                      {cat} ({countFor(cat)})
                    </button>
                  );
                })}
              </div>
            </Container>
          </div>

          {/* Horizontal filmstrip — translated by vertical scroll */}
          <div className={styles.filmstripViewport}>
            <motion.div
              key={active}
              ref={filmRef}
              className={styles.filmstrip}
              style={{ x }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((project) => (
                <div key={project.slug} className={styles.slide}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
