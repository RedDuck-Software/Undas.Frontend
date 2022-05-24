import styled from "styled-components";

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
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 18px;
    text-align: center;
  }
  @media (max-width: 501px) {
    font-size: 14px;
  }
`;

export const LoginText = styled.p`
  font-size: 18px;
  word-spacing: 0.3rem;
  color: #747474;

  @media (max-width: 801px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 14px;
    text-align: center;
    word-spacing: unset;
  }
  @media (max-width: 501px) {
    font-size: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const ButtonToggle = styled.button`
  cursor: pointer;
  align-self: self-end;
  padding: 10px;
  border: none;
  background-color: #dedede;
  border-radius: 18px 0 0 18px;
  width: 116px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1019px) {
    width: 65px;
    height: 30px;
    padding: 6px;
  }
`;
export const Circle = styled.div`
  border: 1px solid transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1019px) {
    width: 18px;
    height: 18px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  //gap: 0.8rem;
  padding: 14px 0 14px;
  height: 10rem;
  width: 23%;
  background: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(124, 124, 124, 0.25);
  border-radius: 20px;
  margin-bottom: 1.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #fbf5ff;
    box-shadow: 0 0 5px rgba(135, 61, 193, 0.25);
    ${ButtonToggle} {
      background-color: #dbd7de;
      ${Circle} {
        background-color: #c6b1d7;
      }
    }
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 1019px) {
    width: 23%;
    height: 130px;
  }

  @media (max-width: 801px) {
    height: 100px;
  }

  @media (max-width: 640px) {
    height: 100px;
    width: 35%;
    margin-right: 15px;
    margin-left: 15px;
  }
  @media (max-width: 501px) {
    width: 40%;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const ButtonIcon = styled.img`
  margin-left: 20px;
  align-self: self-start;
  @media (max-width: 801px) {
    width: 28px;
  }
`;

export const ButtonText = styled.span`
  font-size: 1.2rem;
  @media (max-width: 801px) {
    font-size: 14px;
  }
`;

export const ShowMore = styled.button`
  width: 100%;
  padding: 7px 0;
  border: 1px solid #873dc1;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #873dc1;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f7ecff;
    box-shadow: 0 0 5px rgba(135, 61, 193, 0.4);
  }
`;
export const UNDAS = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #873dc1;
`;
