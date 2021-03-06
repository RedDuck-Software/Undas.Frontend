import React from "react";

import CompleteBar from "./CompleteBar";

import { DetailsWrap } from "../Accordion.styles";

const Levels: React.FC<{ complete?: number }> = ({ complete }) => {
  return (
    <DetailsWrap padd="30px 30px">
      <CompleteBar complete={complete} />
      <CompleteBar complete={complete} />
      <CompleteBar complete={complete} />
    </DetailsWrap>
  );
};

export default Levels;
