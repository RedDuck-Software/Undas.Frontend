import React from "react";

import {
    Line,
    Circle,
    LineWrap
} from "./Road.styles";

const Road = () => {
    return (
        <LineWrap>
        <Line className="done">
            <Circle className="done"/>
        </Line>
        <Line>
            <Circle />
        </Line>
        <Line>
            <Circle />
        </Line>
        <Line>
            <Circle />
        </Line>
        <Line>
            <Circle />
        </Line>
        <Line>
        
        </Line>
        </LineWrap>
    )
}

export default Road