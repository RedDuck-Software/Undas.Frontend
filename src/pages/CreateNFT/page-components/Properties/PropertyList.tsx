import React from "react";

import { Property as PropertyType } from "../../types";
import {
  PropertiesWrap,
  PropertiesElement,
  ColoredText,
  PropertiesElementItem,
} from "../Proprties.styles";

interface PropertyProps {
  propertyType: string;
  propertyName: string;
}

const Property: React.FC<PropertyProps> = ({ propertyType, propertyName }) => {
  return (
    <PropertiesElement>
      <PropertiesElementItem>
        <ColoredText color="#873DC1" fw="400" fs="10px">
          {propertyType.toUpperCase()}
        </ColoredText>
      </PropertiesElementItem>
      <PropertiesElementItem>{propertyName}</PropertiesElementItem>
      <PropertiesElementItem>
        <ColoredText color="#7C7C7C" fw="400" fs="12px">
          {Math.floor(Math.random() * 100)}% have this trait
        </ColoredText>
      </PropertiesElementItem>
    </PropertiesElement>
  );
};

interface PropertyListProps {
  propertyList: PropertyType[];
}
const PropertyList: React.FC<PropertyListProps> = ({ propertyList }) => {
  return (
    <PropertiesWrap>
      {propertyList.map((item) => {
        return (
          <Property
            key={`${item.type}-${item.name}`}
            propertyType={item.type}
            propertyName={item.name}
          />
        );
      })}
    </PropertiesWrap>
  );
};

export default PropertyList;
