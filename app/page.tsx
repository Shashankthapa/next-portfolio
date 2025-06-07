import { AnimatedTestimonialsDemo } from "./section/AnimatedSection";
import Hero from "./section/Hero";
import Reveal from "./components/ui/Reveal";
import Experience from "./section/Experience";
import Project from "./section/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Project />
      {/* <Reveal>
        <AnimatedTestimonialsDemo />
      </Reveal>
      <Reveal>
        <AnimatedTestimonialsDemo />
      </Reveal>
      <Reveal>
        <AnimatedTestimonialsDemo />
      </Reveal> */}
    </>
  );
}
