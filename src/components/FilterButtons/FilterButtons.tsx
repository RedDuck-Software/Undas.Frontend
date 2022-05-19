import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import {
  FilterButtonsContainer,
  FilterButton,
  FilterClear,
} from './FilterButtons.styles';

const FilterButtons = () => {
  return (
    <FilterButtonsContainer>
      <FilterButton>
        New <AiOutlineClose />
      </FilterButton>
      <FilterClear>Clear all</FilterClear>
    </FilterButtonsContainer>
  );
};

export default FilterButtons;
