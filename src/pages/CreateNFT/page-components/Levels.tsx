import React from "react";

import CompleteBar from "./CompleteBar";
import { LevelsWrap } from "./Proprties.styles";

const Levels: React.FC<{ complete?: number }> = ({ complete }) => {
  return (
    <LevelsWrap>
      <CompleteBar complete={complete} />
      <CompleteBar complete={complete} />
      <CompleteBar complete={complete} />
    </LevelsWrap>
  );
};

export default Levels;
