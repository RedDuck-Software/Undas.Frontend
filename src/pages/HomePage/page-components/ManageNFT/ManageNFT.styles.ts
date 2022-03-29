import styled from "styled-components";

export const ManageCardWrap = styled.ul `
  list-style: none;
  display: flex;
  justify-content: space-between;
`

export const ManageCard = styled.li `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background: #FFFFFF;
  box-shadow: 3px 3px 10px rgba(124, 124, 124, 0.25), inset 0px 0px 10px rgba(124, 124, 124, 0.25);
  border-radius: 20px;
  width: 255px;
  height: 300px;
`

export const CardTitle = styled.span `
  margin: 30px 0 20px 0;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  //line-height: 26px;
  color: #5D3F92;
`

export const DescHolder = styled.ul `
  width: 100%;
  text-align: left;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const DescList = styled.li `
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  &:before {
    content: '';
    display: inline-block;
    margin-right: 5px;
    transform: translateY(-2px);
    width: 5px;
    height: 5px;
    border: 1px solid #873DC1;
    border-radius: 50%;
  }
`

export const StyledSpan = styled.span `
  text-align: right;
`

interface IPurpleText {
    fs?: string
}

export const PurpleText = styled.span<IPurpleText> `
  width: 100%;
  cursor: pointer;
  font-weight: 400;
  font-size: ${props => props.fs || '12px'};
  text-align: right;
  color: #873DC1;
`