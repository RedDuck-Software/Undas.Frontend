import styled from "styled-components";
import { Tabs, Tab, TabContainer, TabContent, TabPane, Nav } from 'react-bootstrap';

export const FaqTabsWrapper = styled.div`
  min-height: 550px;
`
export const TabButton = styled(Nav.Link)`
      background: #FFFFFF !important;
      box-shadow: 3px 3px 5px rgba(124, 124, 124, 0.25), inset 0px 0px 5px rgba(124, 124, 124, 0.25);
      border-radius: 10px;
      color: #5D3F92;
      margin-bottom: 20px;
      padding: 20px;
      transition: all .3s linear;
      &:hover{
        color: #232428 !important;
        box-shadow: 3px 5px 5px rgba(124, 124, 124, 0.75);
        text-shadow: 0 0 1px rgba(135, 61, 193, 0.5);
      }
      &.active{
        color: #5D3F92 !important;
        background: #FBF5FF !important;
        box-shadow: 3px 5px 5px rgba(135, 61, 193, 0.5);
        text-shadow: 0 0 1px rgba(135, 61, 193, 0.5);
      }
`
export const TabText = styled.div`
  
`
export const ContentTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  margin-bottom: 30px;
  max-width: 300px;
`
export const ContentText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
  & .content-text-link{
    color: #5D3F92;
    text-decoration: none;
  }
  & span{
    color: #7C7C7C;
  }
`