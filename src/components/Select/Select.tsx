import React, { ReactNode, useState } from "react";

import {
  CreateDropdown,
  CreateDropdownCurrent,
  CreateDropdownList,
  CreateDropdownItem,
  DropdownItemIcon,
} from "./Select.styles";

export const SelectItem: React.FC<{
  setSelected: any;
  icon: string;
  label: string;
}> = ({ setSelected, icon, label }) => {
  return (
    <CreateDropdownItem onClick={() => setSelected({ icon, label })}>
      <DropdownItemIcon src={icon} />
      {label}
    </CreateDropdownItem>
  );
};

export const Select: React.FC<{
  itemList: ReactNode;
  item: { icon: string; label: string };
}> = ({ itemList, item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <CreateDropdown onClick={() => setIsOpen(!isOpen)}>
      <CreateDropdownCurrent
        isOpen={isOpen}
        tabIndex={0}
        style={
          item.label == "Add Category"
            ? { color: "#232428" }
            : {
                color: "#7C7C7C",
                fontWeight: "500",
                justifyContent: "flex-start",
              }
        }
      >
        {item.icon !== "" && item.icon.length && (
          <DropdownItemIcon src={item.icon} />
        )}
        {item.label}
      </CreateDropdownCurrent>
      <CreateDropdownList isOpen={isOpen}>{itemList}</CreateDropdownList>
    </CreateDropdown>
  );
};
