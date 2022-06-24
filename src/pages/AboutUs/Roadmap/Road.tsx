import React from "react";

import { Line, Circle, LineWrap } from "./Road.styles";

const Road = () => {
  return (
    <LineWrap>
      <Line className="done">
        <Circle className="done" />
      </Line>
      <Line className="second">
        <Circle />
      </Line>
      <Line className="three">
        <Circle />
      </Line>
      <Line className="four">
        <Circle />
      </Line>
      <Line className="five">
        <Circle />
      </Line>
      <Line className="lastLine"></Line>
    </LineWrap>
  );
};

export default Road;
