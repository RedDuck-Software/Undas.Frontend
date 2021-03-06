import React from "react";

import {
  PropertiesWrap,
  PropertiesElement,
  ColoredText,
  PropertiesElementItem,
} from "../Accordion.styles";

const Properties: React.FC = () => {
  return (
    <PropertiesWrap padd=" 30px 30px">
      <PropertiesElement>
        <PropertiesElementItem>
          <ColoredText color="#873DC1" fw="400" fs="12px">
            BACKGROUND
          </ColoredText>
        </PropertiesElementItem>
        <PropertiesElementItem>Green Purple</PropertiesElementItem>
        <PropertiesElementItem>
          <ColoredText color="#7C7C7C" fw="400" fs="14px">
            9% have this trait
          </ColoredText>
        </PropertiesElementItem>
      </PropertiesElement>
      <PropertiesElement>
        <PropertiesElementItem>
          <ColoredText color="#873DC1" fw="400" fs="12px">
            BACKGROUND
          </ColoredText>
        </PropertiesElementItem>
        <PropertiesElementItem>Green Purple</PropertiesElementItem>
        <PropertiesElementItem>
          <ColoredText color="#7C7C7C" fw="400" fs="14px">
            9% have this trait
          </ColoredText>
        </PropertiesElementItem>
      </PropertiesElement>
      <PropertiesElement>
        <PropertiesElementItem>
          <ColoredText color="#873DC1" fw="400" fs="12px">
            BACKGROUND
          </ColoredText>
        </PropertiesElementItem>
        <PropertiesElementItem>Green Purple</PropertiesElementItem>
        <PropertiesElementItem>
          <ColoredText color="#7C7C7C" fw="400" fs="14px">
            9% have this trait
          </ColoredText>
        </PropertiesElementItem>
      </PropertiesElement>
    </PropertiesWrap>
  );
};

export default Properties;
