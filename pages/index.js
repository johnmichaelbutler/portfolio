import Hero from '../components/hero';
import Skills from '../components/skills';
import Projects from '../components/projects';
import About from '../components/about';
import Contact from '../components/contact';
import AWSSection from '../components/aws';
import Experience from '../components/experience';
import Education from '../components/education';

export default function Home() {
  return (
      <div className="pl-0 w-screen">
        <main>
          <Hero />
          <About />
          <Skills />
          <AWSSection />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
    </div>
  )
};
