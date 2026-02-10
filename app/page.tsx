import Hero from "@/src/components/Hero";
import Experience from "@/src/components/Experience";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Contact from "@/src/components/Contact";

export default function Home() {
  return (
    <main>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="home">
        <Hero />
      </section>

      <section id="experience" className="scroll-mt-28">
        <Experience />
      </section>

      <section id="projects" className="scroll-mt-28">
        <Projects />
      </section>

      <section id="constact" className="scroll-mt-28">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
