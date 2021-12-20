import styled from 'styled-components'
import violetLine from '../../../../icons/violet-line.svg'
import violetArrowDown from '../../../../icons/violet-arrow-down.svg'
import rhombus from '../../../../icons/rhombus.svg'

export const CollectionsSec = styled.div`
  padding: 4rem 0;
`
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
`

export const CollectionsTitleViolet = styled.h2`
  display: inline;
  font-size: 2.8rem;
  padding-left: 1rem;
  font-weight: 400;
  color: #5d3f92;

  &:after {
    content: url('${violetArrowDown}');
    position: relative;
    left: 8px;
    top: 3px;
  }
`
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
`

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
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 50%;

  @media (max-width: 1084px) {
    min-width: 60%;
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.span`
  font-size: 1.15rem;
`

export const Number = styled.span`
  color: ${({ color }) =>
    (color === 'red' && '#8C0008;') ||
    (color === 'green' && '#008C38;') ||
    '#747474;'}
  font-size: ${(props) => (props.big ? `1.2rem` : '0.8rem')};

  &:after {
    content: ${(props) => (props.rhombus ? `url('${rhombus}')` : 'none')};
    position: relative;
    left: 4px;
    top: 8px;
  }
`

export const Picture = styled.img`
  border-radius 50%;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
