import styled from 'styled-components';

import { Container, Button } from '../../globalStyles';

interface ListingProps {
  mobile?: boolean;
}

export const ListingSec = styled.div`
  padding: 7rem 0;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const ListingContainer = styled(Container)`
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

export const ListingContainerCenter = styled(Container)`
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

export const ItemInformation = styled.div<ListingProps>`
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

export const CardImageContainer = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    margin-bottom: 6%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const ListingForm = styled.form`
  width: 100%;
`;

export const ListingFieldset = styled.fieldset`
  border: none;
  width: 100%;

  margin: 1rem 0;
`;

export const ListingLabel = styled.label`
  font-size: 1.5rem;
`;

export const ListingInput = styled.input`
  width: 24rem;
  height: 2rem;

  margin-top: 1rem;
  border-radius: 10px;
  border: 1px solid #000000;
  padding-left: 1rem;

  &:focus {
    outline: none !important;
    border: 1px solid #5d3f92;
    box-shadow: 0 0 4px #893ac2;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ListingButton = styled(Button)`
  display: flex;
  justify-content: center;

  margin-top: 1rem;
  max-width: 24rem;
`;
