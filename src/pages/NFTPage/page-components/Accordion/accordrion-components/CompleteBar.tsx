import React, {FC} from 'react';

//Styles
import {
    CompleteWrap,
    ColoredText
} from "../Accordion.styles";

const CompleteBar: FC = () => {
    return (
        <CompleteWrap>
            <span>
                Speed
            </span>
            <ColoredText>
                3 of 5
            </ColoredText>
        </CompleteWrap>
    )
}

export default CompleteBar