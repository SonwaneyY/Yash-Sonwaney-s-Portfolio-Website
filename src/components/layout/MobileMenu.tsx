"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./MobileMenu.module.css";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.1 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>

          <nav className={styles.nav}>
            {links.map((link, i) =>
              link.external ? (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={styles.navLink}
                  variants={linkVariants}
                  custom={i}
                  onClick={onClose}
                >
                  {link.label}
                </motion.a>
              ) : (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  custom={i}
                >
                  <Link
                    href={link.href}
                    className={styles.navLink}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
