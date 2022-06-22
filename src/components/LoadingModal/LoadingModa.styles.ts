import styled from "styled-components";

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 100;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
`;

export const Modal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  padding: 1.75rem;
  z-index: 101;
`;

export const ModalInfo = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
`;

export const Arrow = styled.span<{
  rotate?: string | number;
}>`
  margin-top: 4px;
  border-top: 1px solid #5d3f92;
  border-left: 1px solid #5d3f92;
  transform: ${({ rotate }) =>
    rotate ? `rotate(${rotate}deg)` : "rotate(135deg)"};
  width: 10px;
  height: 10px;
  transition: all ease-in-out 0.15s;
`;

export const ModalNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavigationText = styled.span<{
  mr?: string | number;
  ml?: string | number;
  toRight?: boolean;
  toLeft?: boolean;
}>`
  position: relative;
  font-size: 18px;
  line-height: 28px;
  margin-top: 0.25rem;
  margin-left: ${({ ml }) => (ml ? ml : "0")};
  margin-right: ${({ mr }) => (mr ? mr : "0")};

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
    background: #5d3f92;
    position: absolute;
    bottom: 0;
    right: ${({ toLeft }) => (toLeft ? "0" : "")};
  }
`;

export const NavigationItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0.25rem 0.5rem;

  transition: all 0.3s ease-in-out;
  &:hover ${NavigationText}::after {
    width: 100%;
  }
`;
