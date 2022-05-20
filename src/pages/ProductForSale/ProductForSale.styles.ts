import styled from "styled-components";

import { Container } from "../../globalStyles";
import Like from "../../icons/like.svg";

interface ProductForSaleProps {
  mobile?: boolean;
}

export const ProductForSaleSec = styled.div`
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

export const ItemInformation = styled.div<ProductForSaleProps>`
  width: 100%;

  ${({ mobile }) =>
    mobile
      ? `display: none;
  
        @media (max-width: 1024px) {
          display: block;
        }`
      : `display: block; 
        
        @media (max-width: 1024px) {
          display: none;
        }
      `};
`;

export const ProductSubtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #5d3f92;
  margin-bottom: 5px;
`;

export const ProductTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    padding-bottom: 5%;
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

export const BookmarkButton = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 0.8rem;
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 10px;
  width: 55px;
  height: 35px;

  &:before {
    cursor: pointer;
    content: url("${Like}");
    position: relative;
    top: 1px;
    right: 4px;
  }

  @media (max-width: 1024px) {
    top: 7rem;
  }

  @media (max-width: 470px) {
    top: 6.75rem;
  }
`;
