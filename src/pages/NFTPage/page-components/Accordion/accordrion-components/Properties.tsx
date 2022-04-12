import React, {FC} from "react";

//Styles
import {
    PropertiesWrap,
    PropertiesElement,
    ColoredText
} from "../Accordion.styles";

const Properties: FC = () => {
    return (
        <PropertiesWrap padd=" 30px 30px">
            <PropertiesElement>
                <ColoredText color="#873DC1" fw="400" fs="10px">
                    BACKGROUND
                </ColoredText>
                <span>
                    Green Purple
                </span>
                <ColoredText color="#7C7C7C" fw="400" fs="12px">
                    9% have this trait
                </ColoredText>
            </PropertiesElement>
            <PropertiesElement>
                <ColoredText color="#873DC1" fw="400" fs="10px">
                    BACKGROUND
                </ColoredText>
                <span>
                    Green Purple
                </span>
                <ColoredText color="#7C7C7C" fw="400" fs="12px">
                    9% have this trait
                </ColoredText>
            </PropertiesElement>
            <PropertiesElement>
                <ColoredText color="#873DC1" fw="400" fs="10px">
                    BACKGROUND
                </ColoredText>
                <span>
                    Green Purple
                </span>
                <ColoredText color="#7C7C7C" fw="400" fs="12px">
                    9% have this trait
                </ColoredText>
            </PropertiesElement>
        </PropertiesWrap>
    )
}

export default Properties