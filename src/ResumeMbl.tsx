import { useState } from "react";
import ListSkillsMbl from "./ListSkillsMbl";
import "./scss/ResumeMbl.scss";
import { FaGraduationCap } from "react-icons/fa6";

const ResumeMbl = () => {
  const [typeSkillsOpen, setTypeSkillsOpen] = useState<string>("");
  const [showListAwards, setShowListAwards] = useState<string[]>([]);
  const handleOpenListSkill = (type: string) => {
    if (typeSkillsOpen === type) {
      setTypeSkillsOpen("");
    } else {
      setTypeSkillsOpen(type);
    }
  };
  const handleOpenListAwards = (award: string) => {
    if (!showListAwards.includes(award)) {
      setShowListAwards((prev) => [...prev, award]);
    } else {
      setShowListAwards((prev) => prev.filter((aw: string) => aw !== award));
    }
  };
  return (
    <div className="resume_mbl">
      <div className="education">
        <h1>Education</h1>
        <div className="info">
          <div className="title">
            <FaGraduationCap />
            <span>Sai Gon University</span>
          </div>
          <p>Information Technology Engineer | 2019 - 2023</p>
        </div>
      </div>
      <div className="awards">
        <h1>Awards</h1>
        <div className="info">
          <span
            onClick={() => {
              handleOpenListAwards("AES");
            }}
          >
            Academic Encouragement Scholarship
          </span>
          <p
            style={{
              display: showListAwards.includes("AES") ? "block" : "none",
            }}
          >
            Determined by 10% of the total of student in each major • Second
            semester ‑ 2020-2021
          </p>
          <hr />
          <span
            onClick={() => {
              handleOpenListAwards("AIS");
            }}
          >
            Academic Intern Scholarship
          </span>
          <p
            style={{
              display: showListAwards.includes("AIS") ? "block" : "none",
            }}
          >
            AI Developer Internship Program of ISC Quang Trung Center • 2021
          </p>
          <hr />
          <span
            onClick={() => {
              handleOpenListAwards("ESR");
            }}
          >
            Excellent Science Research of SGU
          </span>
          <p
            style={{
              display: showListAwards.includes("ESR") ? "block" : "none",
            }}
          >
            Topic chosen for exibition and participated for Student Conference
            of Science Research. • 2022-2023
          </p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <p>
          Knowledge is as vast as the universe, so I am constantly learning.
        </p>

        <div className="univer">
          <div>
            <h1 id="technical">Technical Skills</h1>
            <img
              loading="lazy"
              src="./univer1.png"
              alt="univer1"
              onMouseEnter={() => handleOpenListSkill("TECH")}
              onMouseLeave={() => handleOpenListSkill("")}
              onClick={() => {
                setTypeSkillsOpen((prev) => (prev === "TECH" ? "" : "TECH"));
              }}
            />
          </div>
          <div>
            <h1 id="design">Design Tools</h1>
            <img
              loading="lazy"
              src="./univer2.png"
              alt="univer2"
              onMouseEnter={() => handleOpenListSkill("DESIGN")}
              onMouseLeave={() => handleOpenListSkill("")}
              onClick={() => {
                setTypeSkillsOpen((prev) =>
                  prev === "DESIGN" ? "" : "DESIGN"
                );
              }}
            />
          </div>
          <div>
            <h1 id="utiliti">Tools and Utilities</h1>
            <img
              loading="lazy"
              src="./univer3.png"
              alt="univer3"
              onMouseEnter={() => handleOpenListSkill("UTILITI")}
              onMouseLeave={() => handleOpenListSkill("")}
              onClick={() => {
                setTypeSkillsOpen((prev) =>
                  prev === "UTILITI" ? "" : "UTILITI"
                );
              }}
            />
          </div>
        </div>
        <div className="contain-list-skills">
          {typeSkillsOpen === "" && (
            <div className="tutorial">Tap on the planet for more details</div>
          )}
          <ListSkillsMbl
            typeSkill={"TECH"}
            onFocus={typeSkillsOpen === "TECH"}
          />
          <ListSkillsMbl
            typeSkill={"DESIGN"}
            onFocus={typeSkillsOpen === "DESIGN"}
          />
          <ListSkillsMbl
            typeSkill={"UTILITI"}
            onFocus={typeSkillsOpen === "UTILITI"}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeMbl;
