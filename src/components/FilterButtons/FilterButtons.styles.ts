import styled from 'styled-components';

export const FilterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  padding-top: 1.5rem;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  border: 1px solid #893ac2;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 5px;
  min-height: 36px;
  padding: 10px 20px;
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;

  svg {
    position: relative;
    top: 1px;

    margin-left: 1rem;
  }
`;

export const FilterClear = styled.span`
  color: #5d3f92;
  cursor: pointer;
`;
