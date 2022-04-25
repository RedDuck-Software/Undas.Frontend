import React, {FC} from 'react';

//Styles
import {DetailsWrap} from "../Accordion.styles";

//Components
import CompleteBar from "./CompleteBar";
const Levels: FC<{complete?: number}> = ({complete}) => {
    return (
        <DetailsWrap padd="30px 30px">
            <CompleteBar complete={complete}/>
            <CompleteBar complete={complete}/>
            <CompleteBar complete={complete}/>
        </DetailsWrap>
    )
}

export default Levels