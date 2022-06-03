import React, { Dispatch, SetStateAction } from "react";

import PropertyList from "./PropertyList";

import {
  CreateFormGroup,
  ModalTitle,
  ModalBlock,
  ModalBlockDescript,
  WithPropertiesBlock,
} from "../../CreateNFT.styles";
import { PropertiesIco } from "../../imports";
import PropertiesModal from "../SettingsModal/PropertiesModal";
import { Property } from "../../types";

interface PropertiesProps {
  propertyList: Property[];
  setPropertyList: Dispatch<SetStateAction<Property[]>>;
}

const Properties: React.FC<PropertiesProps> = ({
  propertyList,
  setPropertyList,
}) => {
  return (
    <CreateFormGroup>
      <ModalTitle>
        <PropertiesIco /> Properties
      </ModalTitle>
      <ModalBlock>
        <ModalBlockDescript>
          Textual traits that show up as rectangles
        </ModalBlockDescript>
        <PropertiesModal
          propertyList={propertyList}
          setPropertyList={setPropertyList}
        />
      </ModalBlock>
      <WithPropertiesBlock>
        <PropertyList propertyList={propertyList} />
      </WithPropertiesBlock>
    </CreateFormGroup>
  );
};

export default Properties;
 