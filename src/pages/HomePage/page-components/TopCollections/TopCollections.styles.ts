import styled from 'styled-components';
import violetLine from '../../../../icons/violet-line.svg';
import violetArrowDown from '../../../../icons/violet-arrow-down.svg';

interface TopCollectionsProps {
  big?: boolean;
  rhombus?: boolean;
}

export const CollectionsSec = styled.div`
  padding: 4rem 0;

  @media (max-width: 801px) {
    padding: 3.75rem 0;
  }
`;
export const CollectionsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
  color: #000000;
  margin-left: 0.5rem;

  &:before {
    content: url('${violetLine}');
    position: relative;
    right: 8px;
    top: 3px;
  }

  @media (max-width: 1009px) {
    font-size: 2.4rem;
  }

  @media (max-width: 801px) {
    font-size: 1.4rem;

    &:before {
      right: 8px;
      top: 0.6rem;
    }
  }

  @media (max-width: 574px) {
    &:before {
      content: none;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 0;
  }

  @media (max-width: 369px) {
    font-size: 1.15rem;
  }
`;

export const CollectionsTitleViolet = styled.span`
  display: inline;
  font-size: 2.8rem;
  padding-left: 1rem;
  font-weight: 400;
  color: #5d3f92;

  &:after {
    content: '';
    display: inline-block;
    height: 22px;
    width: 27px;
    background-size: 22px 27px;
    background-image: url(${violetArrowDown});
    background-repeat: no-repeat;
    position: relative;
    left: 8px;
    top: 3px;
  }

  @media (max-width: 1009px) {
    font-size: 2.4rem;
  }

  @media (max-width: 801px) {
    font-size: 1.4rem;
    padding-left: 0.5rem;

    &:before {
      right: 8px;
      top: 0.6rem;
    }
  }

  @media (max-width: 574px) {
    &:after {
      width: 14px;
      height: 16px;
      background-size: 14px 16px;
    }
  }

  @media (max-width: 369px) {
    font-size: 1.15rem;
  }
`;
export const CollectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 57.5rem;
  margin: 0 auto;
  padding: 3.75rem 0 0 0;

  @media (max-width: 1084px) {
    justify-content: space-evenly;
  }

  @media (max-width: 854px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 801px) {
    padding: 2rem 0 0 0;
  }
`;

export const CollectionsItem = styled.div`
  width: 445px;
  height: 80px;
  background: #ffffff;
  border: 1px solid rgba(93, 63, 146, 0.5);
  box-shadow: 4px 4px 15px rgba(93, 63, 146, 0.2);
  border-radius: 10px;
  margin-bottom: 3%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  transition: border 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid #5d3f92;
  }

  @media (max-width: 1084px) {
    width: 45%;
  }

  @media (max-width: 854px) {
    width: 80%;
  }

  @media only screen and (max-width: 640px) {
    width: 425px;
    height: 70px;
  }

  @media (max-width: 574px) {
    max-width: 275px;
    padding: 0.5rem 1.5rem;
    margin: 0.5rem 0;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 50%;

  @media (max-width: 1084px) {
    min-width: 60%;
  }

  @media (max-width: 574px) {
    justify-content: space-between;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 1.15rem;

  @media only screen and (max-width: 640px) {
    font-size: 1.05rem;
  }

  @media (max-width: 574px) {
    position: relative;
    right: 8px;
    font-size: 0.85rem;
  }
`;

export const Number = styled.span<TopCollectionsProps>`
  color: ${({ color }) =>
    (color === 'red' && '#8C0008;') ||
    (color === 'green' && '#008C38;') ||
    '#747474;'}
  font-size: ${({ big }) => (big ? `1.2rem` : '0.8rem')};

  &:after {
    content: ${({ rhombus }) => (rhombus ? `url('${rhombus}')` : 'none')};
    position: relative;
    left: 4px;
    top: 8px;
  }

  @media only screen and (max-width: 640px) {
    font-size: ${(props) => (props.big ? `1rem` : '0.8rem')};
  }
`;

export const Picture = styled.img`
  border-radius 50%;

  @media (max-width: 574px) {
    width: 40px;
    height: 40px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
