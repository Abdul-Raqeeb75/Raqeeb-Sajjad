import Hero from '@/components/Hero';
import TextLoop from '@/components/TextLoop';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
export default function Home() {
  return (
    <>
      <Hero />
      <TextLoop />
      <About />
      <Projects />
      <Contact />
    </>
  );
}