import styled from "styled-components";

export const BlogWrap = styled.div`
  padding: 80px 0 120px;
  @media (max-width: 992px) {
    padding: 40px 0 80px;
  }
  @media (max-width: 768px) {
    padding: 40px 0 60px;
  }
  @media (max-width: 576px) {
    padding: 20px 0 30px;
  }
`;
export const Text = styled.p`
  margin: 0;
  padding: 0;
  width: 60%;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7c7c7c;
  @media (max-width: 992px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const TabsMenuWrap = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 1px #7c7c7c;
  margin: 40px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TabsMenu = styled.ul`
  display: flex;
  align-items: center;
`;
export const Tab = styled.li`
  border-bottom: 4px solid transparent;
  padding: 15px 30px 11px;
  transition: all 0.4s;
  &.active {
    background: #fbf5ff;
    color: #873dc1;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
    border-bottom: 4px solid rgba(135, 61, 193, 0.5);
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
    color: #873dc1;
    border-bottom: 4px solid rgba(135, 61, 193, 0.5);
  }
  @media (max-width: 992px) {
    padding: 15px 20px 11px;
  }
`;
export const BlogTitle = styled.h2`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
`;
