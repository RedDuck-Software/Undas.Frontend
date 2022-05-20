import styled from "styled-components";

export const ColoredText = styled.span<{
  color?: string;
  fs?: string;
  fw?: string;
  cursor?: string;
}>`
  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fs || ""};
  font-weight: ${(props) => props.fw || ""};
  cursor: ${(props) => props.cursor || ""};
`;

//Properties
export const PropertiesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100% - 49px);

  @media (max-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
  }
`;
export const PropertiesElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  background: #ffffff;
  box-shadow: inset 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  padding: 10px 20px;
  @media (max-width: 576px) {
    flex-wrap: wrap;
    text-align: center;
    flex: 0 0 31%;
  }
  @media (max-width: 520px) {
    flex: 0 0 45%;
  }
`;
export const PropertiesElementItem = styled.span`
  @media (max-width: 576px) {
    flex: 0 0 100%;
  }
`;
export const CompleteWrap = styled.div<{ complete?: number }>`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: #fff;
  border: 1px solid rgba(124, 124, 124, 0.5);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  &:before {
    margin-left: -20px;
    content: "";
    position: absolute;
    height: 100%;
    width: ${(props) =>
      (props.complete === 0 && "") ||
      (props.complete === 1 && "20%") ||
      (props.complete === 2 && "40%") ||
      (props.complete === 3 && "60%") ||
      (props.complete === 4 && "80%") ||
      (props.complete === 5 && "100%")};
    background-color: #e2d1ff;
    z-index: 1;
  }
  span {
    z-index: 2;
  }
`;
export const LevelsWrap = styled.ul<{ padd?: string }>`
  padding: ${(props) => props.padd || "0"};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  height: calc(100% - 49px);
  @media (max-width: 576px) {
    padding: 15px;
  }
`;
