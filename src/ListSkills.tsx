import { useEffect, useState } from "react";
import { listTechSkills, listDesignTools, listUntiliti } from "./data/Skills";
import "./scss/ListSkills.scss";
interface ListSkillsProps {
  typeSkill: string;
  onFocus: boolean;
}
const ListSkills: React.FC<ListSkillsProps> = ({ typeSkill, onFocus }) => {
  const [listRender, setListRender] = useState<string[]>([]);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  useEffect(() => {
    setIsFocus(onFocus);
  }, [onFocus]);
  useEffect(() => {
    switch (typeSkill) {
      case "TECH":
        setListRender(listTechSkills);
        break;
      case "DESIGN":
        setListRender(listDesignTools);
        break;
      case "UTILITI":
        setListRender(listUntiliti);
        break;
    }
  }, [typeSkill]);
  return (
    <div className={`list_icon ${!isFocus ? "hidden" : ""}`} id={typeSkill}>
      {listRender.map((icon: string, index: number) => {
        return (
          <div key={index}>
            <img
              loading="lazy"
              src={`./svg/${icon}.svg`}
              alt={icon}
              title={icon}
            />
            <h4>{icon.substring(4)}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ListSkills;
