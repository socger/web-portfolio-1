"use client"

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Headers";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import WorkHistory from "@/components/WorkHistory";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <main className="max-w-screen-xl w-full mx-auto px-4">
        <div className="mt-20">
          <Header theme={theme} />
          <Contacts theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <WorkHistory theme={theme} />
          <Projects theme={theme} />
          <Testimonials theme={theme} />
        </div>
      </main>

      <Footer theme={theme} />
    </>
  );
}
