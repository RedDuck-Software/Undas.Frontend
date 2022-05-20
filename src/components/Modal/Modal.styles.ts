import styled from 'styled-components';

export const ModalWrap = styled.div`
  //display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(35, 36, 40, 0.5);
  transition: all ease-in-out 0.15s;
  opacity: 0;
  visibility: hidden;
  display: flex;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
