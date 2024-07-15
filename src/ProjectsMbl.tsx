import { useState } from "react";
import { dataProjects, dataThumbnail } from "./data/Projects";
import "./scss/ProjectsMbl.scss";
import { IProject, IProjectThumbnail } from "./types/Project";
import { FaLink } from "react-icons/fa6";
const ProjectsMbl = () => {
  const [selectedProject, setSelectedProject] = useState<IProject>();
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const handlePopupProject = (id: number) => {
    if (!isPopup) {
      const popupProject = dataProjects.find(
        (project: IProject) => project.id === id
      );
      setSelectedProject(popupProject);
      setIsPopup(true);
    } else {
      setIsPopup(false);
    }
  };

  return (
    <div className="projects_mbl">
      <h1>Projects</h1>
      <h4>Tap on the project for more details</h4>
      <div className="contain_list_projects">
        {dataThumbnail.map((thumbnail: IProjectThumbnail, index: number) => {
          return (
            <img
              loading="lazy"
              src={`./thumbnail/${thumbnail.src}.jpg`}
              alt={thumbnail.src}
              key={index}
              className="thumnail_project"
              onClick={() => {
                handlePopupProject(thumbnail.id);
              }}
            />
          );
        })}
      </div>
      {isPopup && (
        <div
          className="popup_project"
          onClick={() => {
            setIsPopup(false);
          }}
        >
          <div
            key={selectedProject!.id}
            className="popup_project_container"
            style={{
              backgroundColor: selectedProject!.bg_color,
              color: selectedProject!.font_color,
            }}
          >
            <h1 style={{ color: selectedProject!.font_color }}>
              {selectedProject!.title}
            </h1>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={selectedProject!.link}
            >
              <FaLink />
              <span>
                {selectedProject!.id !== 5
                  ? "Deployment Link"
                  : "Scientific research report"}
              </span>
            </a>
            <p style={{ color: selectedProject!.font_color }} id="detail_project">
              {selectedProject!.overview}
            </p>
            <h3>Technology:</h3>
            <p style={{ color: selectedProject!.font_color }} id="detail_project">
              {selectedProject!.technology}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsMbl;
