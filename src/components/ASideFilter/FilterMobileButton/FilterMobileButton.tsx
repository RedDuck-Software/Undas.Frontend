import React from "react";

import { FixedButon } from "./FilterMobileButton.styles";

import { FilterMobileIco } from "../imports";

const FilterMobileButton: React.FC<{ onClick?: any }> = ({ onClick }) => {
  return (
    <>
      <FixedButon onClick={onClick}>
        <FilterMobileIco />
        <span>Filter</span>
      </FixedButon>
    </>
  );
};

export default FilterMobileButton;
