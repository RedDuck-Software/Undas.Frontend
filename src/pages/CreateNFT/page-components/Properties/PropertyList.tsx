import React from "react";

import {
  PropertiesWrap,
  PropertiesElement,
  ColoredText,
  PropertiesElementItem,
} from "../Proprties.styles";
import { Property as PropertyType } from "../../types";

const Property: React.FC = () => {
  return (
    <PropertiesElement>
      <PropertiesElementItem>
        <ColoredText color="#873DC1" fw="400" fs="10px">
          BACKGROUND
        </ColoredText>
      </PropertiesElementItem>
      <PropertiesElementItem>Green Purple</PropertiesElementItem>
      <PropertiesElementItem>
        <ColoredText color="#7C7C7C" fw="400" fs="12px">
          9% have this trait
        </ColoredText>
      </PropertiesElementItem>
    </PropertiesElement>
  );
};

interface PropertyListProps {
  propertyList: PropertyType[];
}
const PropertyList: React.FC<PropertyListProps> = () => {
  return (
    <PropertiesWrap>
      <Property />
      <Property />
      <Property />
    </PropertiesWrap>
  );
};

export default PropertyList;
