import styled from "styled-components";

import { Container } from "../../globalStyles";
import Graph from "../../icons/graph.svg";

export const ProductCardSec = styled.div`
  padding: 7rem 0;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const ProductContainer = styled(Container)`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 584px;
  }

  @media (max-width: 631px) {
    width: 100%;
    font-size: 0.85rem;
  }

  @media (max-width: 531px) {
    font-size: 0.75rem;
  }

  ${Container}
`;

export const ProductContainerCenter = styled(Container)`
  display: flex;
  flex-direction: column;

  ${Container}
`;

export const LeftSide = styled.div`
  max-width: 540px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  height: 100%;

  margin-right: 2rem;

  @media (max-width: 1155px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: none;
    margin-right: 0;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;

export const PriceHistoryClosed = styled.div`
  background: #ffffff;
  border: 1px solid #5d3f92;
  word-spacing: 4px;
  padding: 1rem 2rem 1rem 1.8rem;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;

  display: flex;

  svg {
    position: relative;
    top: 4px;
    margin-left: auto;
  }

  &:before {
    content: url("${Graph}");
    position: relative;
    top: 2px;
    padding-right: 1rem;
  }
`;

export const CardImageContainer = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    margin-bottom: 6%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;
