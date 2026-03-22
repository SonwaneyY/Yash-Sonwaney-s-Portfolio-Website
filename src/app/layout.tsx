import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const scotchText = localFont({
  src: [
    { path: "../../public/fonts/Scotch Text Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Scotch Text Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-scotch-display",
  display: "swap",
});

const generalSans = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeneralSans-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/GeneralSans-Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/GeneralSans-Light.otf", weight: "300", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Sonwaney — Product Designer",
  description:
    "Senior product designer shaping enterprise tools, service ecosystems, and AI-native workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${scotchText.variable} ${generalSans.variable}`}
    >
      <body>
        <SmoothScroll />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
