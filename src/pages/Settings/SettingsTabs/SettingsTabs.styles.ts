import { Tabs, Tab } from "react-bootstrap";
import styled from "styled-components";

import { FormButton } from "../../../globalStyles";

export const SettingsTabWrap = styled.div`
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link {
    color: #7c7c7c;
  }
  .nav-tabs {
    background: #fbf5ff;
    box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.5);
    border-radius: 0px 0px 10px 10px;
  }
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    border: 1px solid transparent;
    border-bottom: 4px solid rgba(135, 61, 193, 0.5);
  }
  li:first-child .nav-link.active {
    border-radius: 0 0 0 10px;
  }
  .nav-tabs .nav-link:focus,
  .nav-tabs .nav-link:hover {
    border: 1px solid transparent;
    outline: none;
    color: #873dc1;
  }
  .nav-tabs .nav-link:focus,
  .nav-tabs .nav-link.active:hover {
    border-bottom: 4px solid rgba(135, 61, 193, 0.5);
  }
  .nav-tabs .nav-link:focus svg path,
  .nav-tabs .nav-link:hover svg path,
  .nav-tabs .nav-link.active svg path {
    fill: #873dc1;
  }
  @media (max-width: 825px) {
    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link {
      width: 100%;
    }
    li:last-child .nav-link.active {
    border-radius: 0 0 10px 0;
  }
  }
`;
export const TabWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TabsText = styled.span`
  margin-left: 10px;
  @media (max-width: 825px) {
    display: none;
  }
  @media (min-width: 1700px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const SettingTabs = styled(Tabs)`
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    color: #873dc1;
    border: 1px solid transparent;
    border-bottom: 4px solid rgba(135, 61, 193, 0.5);
  }
  @media (max-width: 825px) {
    display: flex;
    justify-content: space-around;
    & li {
      width: 20%;
    }
  }
`;
export const SettingsTab = styled(Tab)`
  @media (max-width: 825px) {
    width: 100%;
  }
`;
export const Button = styled(FormButton)`
  margin-top: 40px;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  margin-bottom: 0;
  &.form-descript {
    padding-left: 3.5rem;
    margin-top: 5px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (min-width: 1700px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
