import styled from 'styled-components';

export const LoginSec = styled.div`
  padding: 9.5rem 0;

  @media (max-width: 801px) {
    padding: 4rem 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.25rem;

  @media (max-width: 501px) {
    text-align: center;
  }
`;

export const VioletText = styled.span`
  color: #5d3f92;
`;

export const LoginTitle = styled.h2`
  font-weight: 400;
  font-size: 2.05rem;
  display: block;
  margin-bottom: 0.8rem;

  @media (max-width: 801px) {
    font-size: 1.5rem;
  }
`;

export const LoginText = styled.p`
  font-size: 1.2rem;
  word-spacing: 0.3rem;
  color: #747474;

  @media (max-width: 801px) {
    max-width: 570px;
    font-size: 1.15rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LoginButton = styled.button`
  display: flex;
  //gap: 0.8rem;
  padding: 20px 0 20px 20px;
  height: 10rem;
  width: 24%;
  background: #ffffff;
  border: none;
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.25);
  border-radius: 20px;
  margin-bottom: 1.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #FBF5FF;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 1019px) {
    width: 80%;
  }

  @media (max-width: 801px) {
    height: 50px;
  }

  @media (max-width: 501px) {
    width: 100%;
  }
`;

export const ButtonIcon = styled.img`
  @media (max-width: 801px) {
    width: 28px;
  }
`;

export const ButtonText = styled.span`
  font-size: 1.2rem;

  @media (max-width: 801px) {
    font-size: 1rem;
  }
`;

export const ShowMore = styled.button`
  width: 100%;
  padding: 7px 0;
  border: 1px solid #873DC1;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #873DC1;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f7ecff;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.4);
  }
`;
