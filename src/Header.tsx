import { useEffect, useState } from "react";
import "./scss/Header.scss";
import { PiHandPeaceDuotone } from "react-icons/pi";
interface HeaderProps {
  offsets: { about: number; resume: number; project: number };
}
const Header: React.FC<HeaderProps> = ({ offsets }) => {
  const [positionView, setPositionView] = useState<string>("TOP");

  const handleScroll = () => {
    const position = window.scrollY;
    if (position === 0) {
      setPositionView("TOP");
    } else if (position > 0 && position < offsets.about-150) {
      setPositionView("HOME");
    } else if (position >= offsets.about-150 && position < offsets.resume-150) {
      setPositionView("ABOUT");
    } else if (position >= offsets.resume-150 && position < offsets.project-150) {
      setPositionView("RESUME");
    } else if (position >= offsets.project-150) {
      setPositionView("PROJECTS");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`header ${positionView === "TOP" ? "" : "header_scroll"}`}>
      <div
        className={`header_home ${
          positionView === "TOP" || positionView === "HOME" ? "visible" : ""
        }`}
        onClick={scrollToTop}
      >
        Hi, I'm Khang
        <span>
          <PiHandPeaceDuotone />
        </span>
      </div>
      <div className="header_info">
        <li className={`${positionView === "ABOUT" ? "visible" : ""}`}>
          <a href="#about">About</a>
        </li>
        <li className={`${positionView === "RESUME" ? "visible" : ""}`}>
          <a href="#resume">Resume</a>
        </li>
        <li className={`${positionView === "PROJECTS" ? "visible" : ""}`}>
          <a href="#projects">Project</a>
        </li>
      </div>
    </div>
  );
};

export default Header;
