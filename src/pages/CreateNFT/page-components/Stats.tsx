import React, {FC} from 'react';

//Styles
import {LevelsWrap} from "./Proprties.styles";

//Components
import CompleteBar from "./CompleteBar";
const Stats: FC<{complete?: number}> = ({complete}) => {
    return (
        <LevelsWrap>
            <CompleteBar complete={complete}/>
        </LevelsWrap>
    )
}

export default Stats