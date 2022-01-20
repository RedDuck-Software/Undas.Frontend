import styled from 'styled-components';

export const ModalWindowWrapper = styled.aside`
  display: flex;
  justify-content: center;
  align-item: center;
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  z-index: 99;

  width: 340px;
  height: 10vh;
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  svg {
    position: absolute;
    top: 8px;
    right: 8px;

    cursor: pointer;
  }
`;

export const ModalWindowText = styled.span`
  padding: 1rem;
  font-size: 1rem;
`;
