import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components";

export const ReferralWrap = styled.div`
  padding: 60px 0;
  @media (max-width: 992px) {
    padding: 60px 0 40px;
  }
  @media (max-width: 768px) {
    padding: 60px 0 20px;
  }
  @media (max-width: 576px) {
    padding: 30px 0 0;
  }
`;
export const PageHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -40px 0 20px;
  @media (max-width: 1200px) {
    margin: 20px 0;
    flex-wrap: wrap;
  }
`;
export const Title = styled.h1`
  text-align: left;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
`;
export const ReferralLinkButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  transition: all 0.3s linear;
  &:hover {
    color: #232428;
  }
  @media (max-width: 1200px) {
    order: 2;
    flex: 0 0 50%;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;
export const ReferralLink = styled.p`
  margin: 0 20px 0 0;
`;

export const SocialWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1200px) {
    flex: 0 0 50%;
    order: 3;
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
    justify-content: flex-start;
    margin-top: 20px;
  }
`;
export const ShareButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #232428;
  transition: all 0.3s linear;
  &:hover {
    color: #7c7c7c;
    text-decoration: underline;
  }
`;
export const SocialButton = styled.button`
  border: 1px solid transparent;
  outline: none;
  background: transparent;
  margin-left: 10px;
  padding: 0 5px;
  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.3);
  }
`;
export const TextBlock = styled.div`
  padding: 20px;
  max-width: 500px;
  max-height: 120px;
  overflow-y: auto;
  background: #fbf5ff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(135, 61, 193, 0.25);
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  @media (max-width: 1200px) {
    order: 1;
    flex: 0 0 100%;
    max-width: 80%;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const PageContent = styled.div``;
export const SubTitle = styled.h2`
  text-align: left;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
`;
export const ContentTableWrap = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;
export const ContentTable = styled.table`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
  @media (max-width: 768px) {
    display: block;
    width: 650px;
    white-space: nowrap;
  }
`;
export const ContentTableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7c7c7c;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-bottom: none;
  &.first-row {
    border-radius: 10px 10px 0 0;
    border: none;
  }
  &.last-row {
    border-radius: 0 0 10px 10px;
    border-bottom: 1px solid rgba(124, 124, 124, 0.25);
  }
`;
export const ContentTableTh = styled.th`
  flex: 0 0 30%;
  text-align: right;
  background: #fbf5ff;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 20px;
  &.first-column {
    flex: 0 0 40%;
    text-align: left;
  }
  @media (max-width: 992px) {
    flex: 0 0 40%;
    &.first-column {
      flex: 0 0 20%;
    }
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
`;
export const ContentTableTd = styled.td`
  text-align: right;
  flex: 0 0 30%;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding: 10px 20px;
  &.first-column {
    flex: 0 0 40%;
    text-align: left;
  }
  @media (max-width: 992px) {
    flex: 0 0 40%;
    &.first-column {
      max-width: 125px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 0 0 20%;
    }
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
`;
export const PaginationWrap = styled.div`
  width: 100%;
  margin: 40px auto;
  text-align: center;
  @media (max-width: 768px) {
    margin: 20px auto;
  }
  @media (max-width: 768px) {
    margin: 20px auto 0;
  }
`;
export const ReferralPagination = styled(Pagination)`
  justify-content: center;
  & .page-link {
    border: 1px solid transparent;
    color: #873dc1;
    border-radius: 10px;
  }
  & .page-item.active .page-link {
    background-color: #873dc1;
    border-color: #873dc1;
    border-radius: 10px;
  }
  & .page-link:hover {
    background-color: #fbf5ff;
  }
  & .page-link:focus {
    background-color: #fbf5ff;
    box-shadow: none;
  }
  &.pagination-sm {
    display: none;
  }
  @media (max-width: 576px) {
    display: none;
    &.pagination-sm {
      display: flex;
    }
  }
`;
export const Message = styled.div<{ opacity?: boolean }>`
  opacity: ${({ opacity }) => (opacity ? "1" : "0")};
  position: absolute;
  top: 33%;
  left: 25%;
  padding: 10px 25px;
  border-radius: 20px;
  background-color: #fbf5ff;
  box-shadow: 0px 4px 10px rgb(135 61 193 / 25%);
  transition: all 0.5s;
`;
