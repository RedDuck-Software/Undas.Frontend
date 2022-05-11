import React, {FC} from "react";

//Styles
import {
    PropertiesWrap,
    PropertiesElement,
    ColoredText,
    PropertiesElementItem
} from "./Proprties.styles";

const Properties: FC = () => {
    return (
        <PropertiesWrap>
            <PropertiesElement>
                <PropertiesElementItem>
                    <ColoredText color="#873DC1" fw="400" fs="10px">
                        BACKGROUND
                    </ColoredText>
                </PropertiesElementItem>
                <PropertiesElementItem>
                    Green Purple
                </PropertiesElementItem>
                <PropertiesElementItem>
                <ColoredText color="#7C7C7C" fw="400" fs="12px">
                    9% have this trait
                </ColoredText>
                </PropertiesElementItem>
            </PropertiesElement>
            <PropertiesElement>
                <PropertiesElementItem>
                    <ColoredText color="#873DC1" fw="400" fs="10px">
                        BACKGROUND
                    </ColoredText>
                </PropertiesElementItem>
                <PropertiesElementItem>
                    Green Purple
                </PropertiesElementItem>
                <PropertiesElementItem>
                    <ColoredText color="#7C7C7C" fw="400" fs="12px">
                        9% have this trait
                    </ColoredText>
                </PropertiesElementItem>
            </PropertiesElement>
            <PropertiesElement>
                <PropertiesElementItem>
                    <ColoredText color="#873DC1" fw="400" fs="10px">
                        BACKGROUND
                    </ColoredText>
                </PropertiesElementItem>
                <PropertiesElementItem>
                    Green Purple
                </PropertiesElementItem>
                <PropertiesElementItem>
                    <ColoredText color="#7C7C7C" fw="400" fs="12px">
                        9% have this trait
                    </ColoredText>
                </PropertiesElementItem>
            </PropertiesElement>
        </PropertiesWrap>
    )
}

export default Properties