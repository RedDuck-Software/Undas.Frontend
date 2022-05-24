import React from "react";

import { FixedButon } from "./FilterMobileButton.styles";

import { FilterMobileIco } from "../imports"

const FilterMobileButton: React.FC = () => {
  return <>
      <FixedButon><FilterMobileIco /><span>Filter</span></FixedButon>
  </>;
};

export default FilterMobileButton;
