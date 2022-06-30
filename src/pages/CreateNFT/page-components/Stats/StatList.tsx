import React from "react";

import { Stat } from "../../types";
import CompleteBar from "../CompleteBar";
import { LevelsWrap } from "../Proprties.styles";

interface StatListProps {
  statList: Stat[];
}

const StatList: React.FC<StatListProps> = ({ statList }) => {
  return (
    <LevelsWrap>
      {statList.map((item) => {
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

export default StatList;
