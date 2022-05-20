import React from "react";

import { CompleteWrap, ColoredText } from "../Accordion.styles";

const CompleteBar: React.FC<{ complete?: number }> = ({ complete }) => {
  return (
    <CompleteWrap complete={complete ? complete : 0}>
      <span>Speed</span>
      <ColoredText>{complete ? complete : 0} of 5</ColoredText>
    </CompleteWrap>
  );
};

export default CompleteBar;
