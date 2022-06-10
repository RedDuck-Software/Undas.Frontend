import React from "react";
import { Level } from "../../types";

import CompleteBar from "../CompleteBar";
import { LevelsWrap } from "../Proprties.styles";

interface LevelListProps {
  levelList: Level[];
}

const LevelList: React.FC<LevelListProps> = ({ levelList }) => {
  return (
    <LevelsWrap>
      {levelList.map((item) => {
        return (
          <CompleteBar
            key={`${item.name}-${item.complete}`}
            name={item.name}
            complete={item.complete}
          />
        );
      })}
    </LevelsWrap>
  );
};

export default LevelList;
