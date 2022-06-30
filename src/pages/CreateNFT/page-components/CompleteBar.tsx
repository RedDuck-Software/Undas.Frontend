import React from "react";

import { CompleteWrap, ColoredText } from "./Proprties.styles";

import { Complete } from "../types";

interface CompleteBarProps {
  name: string;
  complete?: Complete;
}

const CompleteBar: React.FC<CompleteBarProps> = ({ name, complete }) => {
  return (
    <CompleteWrap complete={complete ? complete : 1}>
      <span>{name}</span>
      <ColoredText>{complete ? complete : 1} of 5</ColoredText>
    </CompleteWrap>
  );
};

export default CompleteBar;
