import styled from "styled-components";

export const PromoSlide = styled.div`
  background-color: #5d3f92;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const SlideText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
`;
