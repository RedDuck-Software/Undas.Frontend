import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components';

export const ReferralWrap = styled.div`
  padding: 60px 0 120px;
`;
export const PageHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -40px 0 20px;
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
`;
export const ReferralLink = styled.p`
  margin: 0 20px 0 0;
`;

export const SocialWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
`;
export const PageContent = styled.div``;
export const SubTitle = styled.h2`
  text-align: left;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
`;
export const ContentTable = styled.table`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
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
`;
export const PaginationWrap = styled.div`
  width: 100%;
  margin: 40px auto;
  text-align: center;
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
`;
