import { useState, useRef, useEffect, useLayoutEffect } from "react";
import About from "./About";
import Header from "./Header";
import Introduce from "./Introduce";
import Projects from "./Projects";
import Resume from "./Resume";
import "./scss/App.scss";
import ResumeMbl from "./ResumeMbl";
import HeaderMbl from "./HeaderMbl";
import IntroduceMbl from "./IntroduceMbl";
import AboutMbl from "./AboutMbl";
import ProjectsMbl from "./ProjectsMbl";
interface WindowDimensions {
  width: number;
  height: number;
}
function App() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

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

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="main">
        {windowDimensions.width > 767
          ? offsets && <Header offsets={offsets} />
          : offsets && <HeaderMbl offsets={offsets} />}
        {windowDimensions.width > 767 ? <Introduce /> : <IntroduceMbl />}
        <section id="about" ref={aboutRef}>
        {windowDimensions.width > 767 ? <About /> : <AboutMbl />}
        </section>
        <section id="resume" ref={resumeRef}>
          {windowDimensions.width > 767 ? <Resume /> : <ResumeMbl />}
        </section>
        <section id="projects" ref={projectRef}>
          {windowDimensions.width > 767 ? <Projects /> : <ProjectsMbl />}
        </section>
      </div>
    </>
  );
}

export default App;
