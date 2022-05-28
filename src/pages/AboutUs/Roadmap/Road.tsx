import React from "react";

import { Line, Circle, LineWrap } from "./Road.styles";

const Road = () => {
  return (
    <LineWrap>
      <Line className="done">
        <Circle className="done" />
      </Line>
      <Line className="secondLine thirLine">
        <Circle />
      </Line>
      <Line className="secondLine ">
        <Circle />
      </Line>
      <Line className="secondLine">
        <Circle />
      </Line>
      <Line className="secondLine">
        <Circle />
      </Line>
      <Line className="lastLine"></Line>
    </LineWrap>
  );
};

export default Road;
