import styled from "styled-components";

export const Wrap = styled.div ``;
export const ContentTable = styled.table`
  width: 230px;
`;
export const ContentTr = styled.tr`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #7C7C7C;
  padding: 5px 0;
  &.disabled{
    border-bottom: 1px solid #E5E5E5;
    color: #E5E5E5;
  }
`;
export const ContentTd = styled.td`

`;
export const Icon = styled.p`
display: inline-block;
margin-bottom: 0;
width: 20px;
text-align: center;
 &.left-table{
     width: 40px;
 }
`;

export const Name = styled.span`
    margin-left: 10px;
`;
