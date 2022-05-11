import React, {FC} from 'react';

//Styles
import {
    CompleteWrap,
    ColoredText
} from "./Proprties.styles";

const CompleteBar: FC<{complete?: number}> = ({complete}) => {
    return (
        <CompleteWrap complete={complete ? complete : 1}>
            <span>
                Speed
            </span>
            <ColoredText>
                {complete ? complete : 1} of 5
            </ColoredText>
        </CompleteWrap>
    )
}

export default CompleteBar