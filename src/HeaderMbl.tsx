import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./scss/HeaderMbl.scss";
import { PiHandPeaceDuotone } from "react-icons/pi";
import { IoMdList } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface HeaderMblProps {
  offsets: { about: number; resume: number; project: number };
}
const HeaderMbl: React.FC<HeaderMblProps> = ({ offsets }) => {
  const [positionView, setPositionView] = useState<string>("TOP");
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const divMenuHeaderRef = useRef<HTMLDivElement>(null);
  const [positionFly, setPositionFly] = useState<number>(0);
  const heightDivMenu = useRef<number>(window.innerHeight - 3.5 * 16);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position === 0) {
      setPositionView("TOP");
    } else if (position > 0 && position < offsets.about - 150) {
      setPositionView("HOME");
    } else if (
      position >= offsets.about - 150 &&
      position < offsets.resume - 150
    ) {
      setPositionView("ABOUT");
    } else if (
      position >= offsets.resume - 150 &&
      position < offsets.project - 150
    ) {
      setPositionView("RESUME");
    } else if (position >= offsets.project - 150) {
      setPositionView("PROJECTS");
    }
    // Hanle ufo fly
    setPositionFly(
      (position * heightDivMenu.current) / document.body.scrollHeight
    );
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      divMenuHeaderRef.current &&
      !divMenuHeaderRef.current.contains(event.target as Node)
    ) {
      setShowHeader(false);
    }
  };
  const positionAbout = useRef(0);
  const positionResume = useRef(0);
  const positionProject = useRef(0);
  useLayoutEffect(() => {
    positionAbout.current =
      (offsets.about * heightDivMenu.current) / document.body.scrollHeight;
    positionResume.current =
      (offsets.resume * heightDivMenu.current) / document.body.scrollHeight;
    positionProject.current =
      (offsets.project * heightDivMenu.current) / document.body.scrollHeight;
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="header_mbl">
      <div
        className={`home_mbl ${
          positionView === "TOP" || positionView === "HOME" ? "home_target" : ""
        }`}
        onClick={scrollToTop}
      >
        Hi, I'm Khang
        <span>
          <PiHandPeaceDuotone />
        </span>
      </div>
      <div onClick={() => setShowHeader(!showHeader)}>
        {!showHeader ? <IoMdList /> : <IoClose />}
      </div>

      {showHeader && (
        <div className="header_info_mbl" ref={divMenuHeaderRef}>
          <div className="space_univer">
            <img
              loading="lazy"
              src={`./svg/ufo.svg`}
              alt="ufo"
              title="ufo"
              style={{ top: `${positionFly}px` }}
            />
          </div>
          <div className="check_point">
            <a
              onClick={scrollToTop}
              href="#"
              className={`${positionView === "TOP" ? "visible" : ""}`}
            >
              <span>Home</span>
              <div></div>
            </a>
            <a
              style={{ top: `${positionAbout.current}px` }}
              href="#about"
              className={`${positionView === "ABOUT" ? "visible" : ""}`}
            >
              <span>About</span>
              <div></div>
            </a>

            <a
              style={{ top: `${positionResume.current}px` }}
              href="#resume"
              className={`${positionView === "RESUME" ? "visible" : ""}`}
            >
              <span>Resume</span>
              <div></div>
            </a>

            <a
              style={{ top: `${positionProject.current}px` }}
              href="#projects"
              className={`${positionView === "PROJECTS" ? "visible" : ""}`}
            >
              <span>Project</span>
              <div></div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMbl;
