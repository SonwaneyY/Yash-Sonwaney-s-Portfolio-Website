import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <span className={styles.name}>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
          <div className={styles.links}>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a href={`mailto:${siteConfig.email}`} className={styles.link}>
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
