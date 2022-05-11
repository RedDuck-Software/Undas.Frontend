import React, {FC} from 'react';

//Styles
import {LevelsWrap} from "./Proprties.styles";

//Components
import CompleteBar from "./CompleteBar";
const Levels: FC<{complete?: number}> = ({complete}) => {
    return (
        <LevelsWrap>
            <CompleteBar complete={complete}/>
            <CompleteBar complete={complete}/>
            <CompleteBar complete={complete}/>
        </LevelsWrap>
    )
}

export default Levels