import styled from "styled-components";

export const CreateDropdown = styled.div`
  width: 100%;
  max-width: 255px;

  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const CreateDropdownCurrent = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: inherit;
  max-width: inherit;

  outline: none;
  border: 1px solid rgba(124, 124, 124, 0.5);
  // prettier-ignore
  border-radius: 10px 10px ${({ isOpen }) => (isOpen ? 0 : "10px")} ${({
    isOpen,
  }) => (isOpen ? 0 : "10px")};

  padding: 10px 20px;

  color: #232428;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;

  transition: all 0.1s ease-in;

  &:hover,
  &:focus-visible {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;

export const CreateDropdownList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: inherit;

  position: absolute;
  top: 100%;
`;

export const CreateDropdownItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: inherit;
  padding: 10px;

  z-index: 10;
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  color: #7c7c7c;
  background-color: white;
  box-shadow: inset 0px 0px 1px rgba(135, 61, 193, 0.5);
  transition: all ease-in-out 0.15s;
  &:hover {
    box-shadow: inset 0px -3px 4px rgba(124, 124, 124, 0.25);
    font-weight: 500;
    color: #873dc1;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export const DropdownItemIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;