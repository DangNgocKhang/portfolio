import { useState, useRef, useEffect, useLayoutEffect } from "react";
import About from "./About";
import Header from "./Header";
import Introduce from "./Introduce";
import Projects from "./Projects";
import Resume from "./Resume";
import "./scss/App.scss";

function App() {
  const [offsets, setOffsets] = useState<{
    about: number;
    resume: number;
    project: number;
  }>();
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const newOffsets = {
      about: 0,
      resume: 0,
      project: 0,
    };
    if (aboutRef.current) {
      const aboutRect = aboutRef.current.getBoundingClientRect();
      newOffsets.about = aboutRect.top + window.scrollY;
    }
    if (resumeRef.current) {
      const resumeRect = resumeRef.current.getBoundingClientRect();
      newOffsets.resume = resumeRect.top + window.scrollY;
    }
    if (projectRef.current) {
      const projectRect = projectRef.current.getBoundingClientRect();
      newOffsets.project = projectRect.top + window.scrollY;
    }
    setOffsets(newOffsets);
  }, []);
  return (
    <>

      <div className="main">
        {offsets && <Header offsets={offsets} />}

        <Introduce />
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="resume" ref={resumeRef}>
          <Resume />
        </section>
        <section id="projects" ref={projectRef}>
          <Projects />
        </section>
      </div>
    </>
  );
}

export default App;
