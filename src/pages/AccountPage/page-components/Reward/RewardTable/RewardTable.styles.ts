import styled from "styled-components";

export const Wrap = styled.div``;
export const ContentTable = styled.table`
  width: 230px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const ContentMainTable = styled(ContentTable)`
  @media (max-width: 992px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ContentTr = styled.tr`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #7c7c7c;
  padding: 5px 0;
  &.disabled {
    border-bottom: 1px solid #e5e5e5;
    color: #e5e5e5;
  }
`;
export const ContentTd = styled.td``;
export const Icon = styled.p`
  display: inline-block;
  margin-bottom: 0;
  width: 20px;
  text-align: center;
  &.left-table {
    width: 40px;
  }
`;

export const Name = styled.span`
  margin-left: 10px;
`;
