import React, {FC} from 'react';

//Styles
import {DetailsWrap} from "../Accordion.styles";

//Components
import CompleteBar from "./CompleteBar";
const Stats: FC<{complete?: number}> = ({complete}) => {
    return (
        <DetailsWrap padd="30px 30px">
            <CompleteBar complete={complete}/>
        </DetailsWrap>
    )
}

export default Stats