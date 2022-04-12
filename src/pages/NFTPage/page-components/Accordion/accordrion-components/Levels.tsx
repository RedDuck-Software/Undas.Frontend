import React, {FC} from 'react';

//Styles
import {DetailsWrap} from "../Accordion.styles";

//Components
import CompleteBar from "./CompleteBar";
const Levels: FC = () => {
    return (
        <DetailsWrap padd="30px 30px">
            <CompleteBar/>
        </DetailsWrap>
    )
}

export default Levels