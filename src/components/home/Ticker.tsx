"use client";

import styles from "./Ticker.module.css";

const keywords = [
  "DESIGN RESEARCH",
  "BUSINESS STRATEGY",
  "STRATEGIC DESIGN",
  "PRODUCT DESIGN",
  "UX DESIGN",
  "USER TESTING",
];

// 6 copies ensures the strip is wider than any viewport (incl. 5K displays)
// so translateX(-100%/6) = exactly one set's width — a perfect seamless loop
const COPIES = 6;

function TickerSet({ hidden }: { hidden?: boolean }) {
  return (
    <>
      {keywords.map((keyword, i) => (
        <span
          key={i}
          className={styles.item}
          aria-hidden={hidden || undefined}
        >
          <span className={styles.keyword}>{keyword}</span>
          <span className={styles.dot} aria-hidden="true">·</span>
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-label="Capabilities">
      <div className={styles.inner}>
        <TickerSet />
        {Array.from({ length: COPIES - 1 }).map((_, i) => (
          <TickerSet key={i} hidden />
        ))}
      </div>
    </div>
  );
}
