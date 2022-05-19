import styled from 'styled-components';

export const InfoBlock = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 1px 5px rgba(124, 124, 124, 0.25);
`;

export const InfoWrap = styled.ul`
  width: 100%;
  height: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0 3rem;

  @media (max-width: 469px) {
    padding: 0 1rem;
  }
`;

export const InfoList = styled.li`
  max-width: 230px;
  display: flex;
  gap: 10px;
`;

export const InfoText = styled.span`
  font-family: 'Jost';
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #232428;
`;
