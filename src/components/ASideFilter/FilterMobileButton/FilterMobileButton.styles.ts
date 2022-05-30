import styled from "styled-components";

export const FixedButon = styled.button`
  display: none;
  @media (max-width: 992px) {
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 10px;
    margin: 0 auto;
    position: fixed;
    bottom: 2%;
    left: 50%;
    margin-left: -25%;
    color: #ffffff;
    background: #ccb7f2;
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
    border-radius: 10px;
    z-index: 10;
    & span {
      margin-left: 10px;
    }
  }
`;
