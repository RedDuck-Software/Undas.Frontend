import styled from 'styled-components';

export const Info = styled.ul`
  display: flex;
  border-radius: 0 0 20px 20px;
  box-shadow: inset 0px 0px 3px rgba(135, 61, 193, 0.25);
  background-color: #fff;
  overflow: hidden;
  max-height: 80px;
`;

export const InfoElement = styled.li`
  padding: 16px 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  color: #7c7c7c;
  text-align: center;
`;

export const Amount = styled.span`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #232428;
`;

export const MakeComplaint = styled.button`
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #873dc1;
  padding: 6px 18px;
  border: none;
  margin-top: 44px;
  max-height: 36px;
  cursor: pointer;
`;

export const AddToFav = styled.button`
  margin-top: 52px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  gap: 18px;
  max-height: 36px;
  cursor: pointer;
  align-self: end;
`;
