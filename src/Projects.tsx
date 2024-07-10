import { useEffect, useRef, useState } from "react";
import "./scss/Projects.scss";
import { dataProjects, dataThumbnail } from "./data/Projects";
import { Project } from "./types/Project";
import { FaLink } from "react-icons/fa6";
import { FaAngleDoubleDown } from "react-icons/fa";

const Projects = () => {
  const [isOpenProjects, setIsOpenProjects] = useState<boolean>(true);
  const [isReady, setIsReady] = useState<boolean>(false);
  const leftDivRef = useRef<HTMLDivElement>(null);
  const rightDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftDiv = leftDivRef.current;
    const rightDiv = rightDivRef.current;
    const syncScroll = (source: HTMLElement, target: HTMLElement) => {
      target.scrollTop =
        source.scrollHeight - source.scrollTop - target.clientHeight;
    };

    const handleLeftScroll = () => {
      if (rightDiv) {
        syncScroll(leftDiv!, rightDiv);
        handleAutoScroll(leftDiv!);
      }
    };

    const handleRightScroll = () => {
      if (leftDiv) {
        syncScroll(rightDiv!, leftDiv);
        handleAutoScroll(rightDiv!);
      }
    };

    const handleAutoScroll = (div: HTMLElement) => {
      const items = div.querySelectorAll(".item");
      const threshold = 0.7;
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const viewHeight = div.clientHeight;

        if (
          rect.top < viewHeight * (1 - threshold) &&
          rect.bottom > viewHeight * threshold
        ) {
          item.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    };

    leftDiv?.addEventListener("scroll", handleLeftScroll);
    rightDiv?.addEventListener("scroll", handleRightScroll);

    return () => {
      leftDiv?.removeEventListener("scroll", handleLeftScroll);
      rightDiv?.removeEventListener("scroll", handleRightScroll);
    };
  }, []);
  useEffect(() => {
    const leftDiv = leftDivRef.current;
    const rightDiv = rightDivRef.current;
    const resetScroll = () => {
      rightDiv!.scrollTop =
        leftDiv!.scrollHeight - leftDiv!.scrollTop - rightDiv!.clientHeight;
    };
    resetScroll();
  }, [isOpenProjects]);

  return (
    <div className="projects">
      <div
        className="button-projects"
        onClick={() => setIsOpenProjects(!isOpenProjects)}
        onMouseEnter={() => setIsReady(true)}
        onMouseLeave={() => setIsReady(false)}
      >
        <span>Show Projects</span>
      </div>
      <div className={`container ${!isOpenProjects ? "unhidden" : ""}`}>
        <div className="list-projects">
          <div className="child" ref={leftDivRef}>
            {dataProjects.map((project: Project, index: number) => {
              return (
                <div
                  key={project.id}
                  className="item item-info"
                  style={{ backgroundColor: project.bg_color }}
                >
                  <div style={{ color: project.font_color }}>
                    <h1 style={{ color: project.font_color }}>
                      {project.title}
                    </h1>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                    >
                      <FaLink />
                      <span>
                        {project.id !== 5
                          ? "Deployment Link"
                          : "Scientific research report"}
                      </span>
                    </a>
                    <p>{project.overview}</p>
                    <h3>Technology:</h3>
                    <p>{project.technology}</p>

                    {index !== 4 && (
                      <h6>
                        Scroll down to see more <FaAngleDoubleDown />
                      </h6>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="child child-img" ref={rightDivRef}>
            {dataThumbnail.map((src: string, index: number) => {
              return (
                <img
                  loading="lazy"
                  src={`./thumbnail/${src}.jpg`}
                  alt={src}
                  key={index}
                  className="item item-img"
                />
              );
            })}
          </div>
        </div>

        <div
          className="button-exit"
          onClick={() => setIsOpenProjects(!isOpenProjects)}
          onMouseEnter={() => setIsReady(true)}
          onMouseLeave={() => setIsReady(false)}
        >
          <span>Exit</span>
        </div>
      </div>

      <div
        className={`space ${isReady ? "ready " : ""} ${
          !isOpenProjects ? " fly" : ""
        }`}
      >
        <img loading="lazy" src="./rocket.png" alt="rocket" id="rocket" />
        <img loading="lazy" src="./smoke.png" alt="smoke" id="smoke" />
      </div>
    </div>
  );
};

export default Projects;
