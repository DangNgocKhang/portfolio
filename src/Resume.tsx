import { useState } from "react";
import ListSkills from "./ListSkills";
import "./scss/Resume.scss";

const Resume = () => {
  const [typeSkillsOpen, setTypeSkillsOpen] = useState<string>("");

  const handleOpenListSkill = (type: string) => {
    if (typeSkillsOpen === type) {
      setTypeSkillsOpen("");
    } else {
      setTypeSkillsOpen(type);
    }
  };
  return (
    <div className="resume">
      <div className="education">
        <img loading="lazy" src="./education.png" alt="education" />
        <div className="info">
          <h1>Education</h1>
          <span>Sai Gon University</span>
          <p>Information Technology Engineer | 2019 - 2023</p>
        </div>
      </div>
      <div className="awards">
        <img loading="lazy" src="./award.png" alt="award" />
        <div className="info">
          <h1>Awards</h1>
          <span>Academic Encouragement Scholarship</span>
          <p>
            Determined by 10% of the total of student in each major • Second
            semester ‑ 2020-2021
          </p>
          <span>Academic Intern Scholarship</span>
          <p>
            AI Developer Internship Program of ISC Quang Trung Center • 2021
          </p>
          <span>Excellent Science Research of SGU</span>
          <p>
            opic chosen for exibition and participated for Student Conference of
            Science Research. • 2022-2023
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
            />
          </div>
        </div>
        <div className="contain-list-skills">
          <ListSkills typeSkill={"TECH"} onFocus={typeSkillsOpen === "TECH"} />
          <ListSkills
            typeSkill={"DESIGN"}
            onFocus={typeSkillsOpen === "DESIGN"}
          />
          <ListSkills
            typeSkill={"UTILITI"}
            onFocus={typeSkillsOpen === "UTILITI"}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
