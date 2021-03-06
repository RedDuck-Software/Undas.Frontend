import React, { ReactNode, useState } from "react";

import {
  SelectWrapper,
  SelectedItemWrapper,
  SelectedItem,
  DropdownList,
  DropdownItemWrapper,
  DropdownItemIcon,
  DropdownArrow,
} from "./CreateSelect.styles";

import arrowIcon from "../../icons/select-arrow.svg";
import { SelectItemType } from "../../pages/CreateCollection/types";

export const SelectItem: React.FC<{
  setSelected: any;
  icon?: string;
  label: string;
  collectionId?: string;
  categoryId?: number;
}> = ({ setSelected, icon, label, collectionId, categoryId }) => {
  return (
    <DropdownItemWrapper
      onClick={() => setSelected({ icon, label, collectionId, categoryId })}
    >
      {icon && <DropdownItemIcon src={icon} />}
      {label}
    </DropdownItemWrapper>
  );
};

export const CreateSelect: React.FC<{
  itemList: ReactNode;
  item: SelectItemType;
  maxWidth?: string;
  padding?: string;
}> = ({ itemList, item, maxWidth, padding }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <SelectWrapper onClick={() => setIsOpen(!isOpen)} maxWidth={maxWidth}>
      <SelectedItemWrapper
        padding={padding}
        isOpen={isOpen}
        tabIndex={0}
        style={
          item.label == "Add Category"
            ? { color: "#232428" }
            : {
                color: "#7C7C7C",
                fontWeight: "500",
                justifyContent: "space-between",
              }
        }
      >
        <SelectedItem>
          {item.icon && item.icon !== "" && (
            <DropdownItemIcon src={item.icon} />
          )}
          {item.label}
        </SelectedItem>
        {item.label !== "Add Category" && (
          <DropdownArrow isOpen={isOpen} src={arrowIcon} />
        )}
      </SelectedItemWrapper>
      {isOpen && <DropdownList>{itemList}</DropdownList>}
    </SelectWrapper>
  );
};
