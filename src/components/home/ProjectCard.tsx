"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year?: string;
  cardBg?: string;
  cardTextColor?: "light" | "dark";
  coverImage: string;
  index?: number;
  imageConfig?: {
    fit: "cover" | "contain";
    position: string;
    bg?: string;
  };
}

export default function ProjectCard({
  slug,
  title,
  category,
  year,
  cardBg,
  coverImage,
  index = 1,
  imageConfig = { fit: "cover", position: "center center" },
}: ProjectCardProps) {
  const thumbBg = imageConfig.bg || cardBg || "var(--bg-secondary)";
  const num = String(index).padStart(2, "0");

  return (
    <Link href={`/work/${slug}`} className={styles.entry}>
      <span className={styles.index}>{num} /</span>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.meta}>
          {category}{year ? ` · ${year}` : ""}
        </span>
      </div>

      <span className={styles.arrow}>→</span>

      {/* Thumbnail — fades in on hover */}
      <div className={styles.thumbnail} style={{ background: thumbBg }}>
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="240px"
          style={{
            objectFit: imageConfig.fit,
            objectPosition: imageConfig.position,
          }}
        />
      </div>
    </Link>
  );
}
