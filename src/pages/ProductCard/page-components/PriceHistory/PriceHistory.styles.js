import styled from 'styled-components'

import Graph from '../../../../icons/graph.svg'

export const PriceHistoryTop = styled.div`
  border-radius: 10px 10px 0px 0px;

  background: #ffffff;
  border: 1px solid #5d3f92;
  word-spacing: 4px;
  padding: 1rem 2rem 1rem 1.8rem;
  border-radius: ${(props) => (props.closed ? `10px` : '10px 10px 0px 0px')};
  margin-top: 2rem;
  cursor pointer;

  display: flex;

  svg {
    position: relative;
    top: 4px;
    margin-left: auto;
  }

  &:before {
    content: url('${Graph}');
    position: relative;
    top: 2px;
    padding-right: 1rem;
  }
`

export const PriceHistoryContainer = styled.div`
  padding: 1rem 2rem;
  background: rgba(251, 245, 255, 0.7);
  border: 1px solid #5d3f92;
  border-top: none;
  border-radius: 0 0 10px 10px;
`

export const PriceHistoryInterface = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PriceHistoryDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.6rem 2rem;
  background: #ffffff;
  border: 1px solid #893ac2;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 5px;
  min-width: 14rem;
  cursor: pointer;
`

export const PriceHistoryStatsContainer = styled.div`
  display: block;
  flex-direction: column;
  display: flex;
  margin: 0 2rem;
  color: #7c7c7c;
`

export const PriceHistoryStatsValue = styled.span`
  color: #5d3f92;

  svg {
    position: relative;
    top: 4px;
    padding-right: 2px;
  }
`

export const PriceHistoryGraph = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

export const PriceHistoryGraphContainer = styled.span`
  color: #7c7c7c;
  padding-bottom: 0.5rem;

  &:after {
    content: '';
    display: block;
    border-top: solid 1px #7c7c7c;
    width: 28rem;
    left: 2.5rem;
    bottom: 0.5rem;
    height: 1px;
    position: relative;
    z-index: 1;
  }
`

export const PriceHistoryPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.85rem;
  color: #c4c4c4;
  padding-bottom: 2rem;
`
