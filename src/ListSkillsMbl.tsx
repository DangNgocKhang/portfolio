import { useEffect, useState } from "react";
import { listTechSkills, listDesignTools, listUntiliti } from "./data/Skills";
import "./scss/ListSkillsMbl.scss";
interface ListSkillsMblProps {
  typeSkill: string;
  onFocus: boolean;
}
const ListSkillsMbl: React.FC<ListSkillsMblProps> = ({ typeSkill, onFocus }) => {
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
    <div className={`list_icon_mbl ${!isFocus ? "hidden" : ""}`}>
      {listRender.map((icon: string, index: number) => {
        return (
          <div key={index}>
            <img
              loading="lazy"
              src={`./svg/${icon}.svg`}
              alt={icon}
              title={icon}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListSkillsMbl;
