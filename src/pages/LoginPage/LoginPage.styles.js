import styled from 'styled-components';

export const LoginSec = styled.div`
  padding: 9.5rem 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.25rem;
`;

export const VioletText = styled.span`
  color: #5d3f92;
`;

export const LoginTitle = styled.h2`
  font-weight: 400;
  font-size: 2.05rem;
  display: block;
  margin-bottom: 0.8rem;
`;

export const LoginText = styled.p`
  font-size: 1.2rem;
  word-spacing: 0.3rem;
  color: #747474;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 5rem;
  width: 45.5rem;
  background: #ffffff;
  border: 1px solid rgba(93, 63, 146, 0.5);
  border-radius: 10px;
  margin-bottom: 1.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid #5d3f92;
    box-shadow: 4px 4px 15px rgba(93, 63, 146, 0.2);
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const ButtonIcon = styled.img``;

export const ButtonText = styled.span`
  font-size: 1.2rem;
`;
