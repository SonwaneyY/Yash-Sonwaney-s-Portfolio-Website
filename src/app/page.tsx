import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import FeaturedWork from "@/components/home/FeaturedWork";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense>
        <FeaturedWork />
      </Suspense>
      <Testimonials />
      <Experience />
      <Skills />
    </>
  );
}
