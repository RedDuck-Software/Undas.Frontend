import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 60px;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
  @media (max-width: 576px) {
    padding: 0 0 60px;
    position: relative;
  }
`;
export const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-transform: capitalize;
  color: #232428;
  @media (max-width: 992px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin: 30px 0 10px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
export const SectionDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7c7c7c;
  flex: 0 1 60%;
  margin-bottom: 0;
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
export const DescriptWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const CardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 576px) {
    gap: 15px;
  }
  @media (max-width: 576px) {
    gap: 10px;
    display: block;
  }
`;
