import styled from "styled-components";

import { Button } from "../../../../globalStyles";
import OLetter from "../../../../icons/o-letter.svg";

interface InfoSectionProps {
  big?: boolean;
  icon?: boolean;
}

export const InfoSec = styled.div`
  padding: 3.75rem 0;
`;

export const InfoRow = styled.div`
  display: flex;

  @media (max-width: 574px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftColumn = styled.div`
  width: 50vw;

  @media (max-width: 1199px) {
    width: 50vw;
  }

  @media (max-width: 680px) {
    button {
      width: 30vw;
    }
  }

  @media (max-width: 574px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 175px;
    }

    a {
      text-decoration: none;
    }
  }
`;

export const RightColumn = styled.div`
  width: 50vw;

  @media (max-width: 1199px) {
    width: 60vw;
  }

  @media (max-width: 801px) {
    max-width: 50vw;
    overflow: hidden;
  }

  @media (max-width: 680px) {
    display: flex;
    align-items: flex-end;
  }

  @media (max-width: 574px) {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 3rem;
    width: 100%;
    overflow: visible;

    margin-bottom: -5rem;
  }
`;

export const TextWrapper = styled.div``;

export const Tagline = styled.h1<InfoSectionProps>`
  font-size: ${({ big }) => (big ? "3.8rem" : "2.05rem")};
  font-weight: 400;
  word-spacing: 1rem;

  &:nth-child(2) {
    &:before {
      content: "";
      display: inline-block;
      height: 25px;
      width: 25px;
      background-size: 25px 25px;
      background-image: ${(props) =>
        props.icon ? `url('${OLetter}')` : "none"};
      background-repeat: no-repeat;
      position: relative;
      top: 2px;
    }
  }

  @media (max-width: 1009px) {
    font-size: ${(props) => (props.big ? "3.2rem" : "1.75rem")};
  }

  @media (max-width: 801px) {
    font-size: ${(props) => (props.big ? "2.1rem" : "1.3rem")};
    word-spacing: 0.3rem;

    &:nth-child(2) {
      &:before {
        height: 20px;
        width: 20px;
        background-size: 20px 20px;
      }
    }
  }

  @media (max-width: 680px) {
    font-size: ${(props) => (props.big ? "2.1rem" : "1.15rem")};
    word-spacing: 0.3rem;

    &:nth-child(2) {
      &:before {
        height: 15px;
        width: 15px;
        background-size: 15px 15px;
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  padding-top: 6.5rem;

  ${Button} {
    margin-right: 1.6rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 915px) {
    button {
      padding: 0.8rem 3rem;
    }
  }

  @media (max-width: 894px) {
    button {
      padding: 0.8rem 2rem;
    }
  }

  @media (max-width: 823px) {
    padding-top: 5rem;
  }

  @media (max-width: 801px) {
    padding-top: 1rem;

    button {
      font-size: 1rem;
      padding: 0.6rem 1.6rem;
    }
  }

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;

    button {
      font-size: 1rem;
      padding: 0.6rem 3rem;
    }
  }

  @media (max-width: 574px) {
    padding-top: 2rem;

    ${Button} {
      margin-right: 0.2rem;
    }
  }
`;

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1.5rem;

  @media (max-width: 1243px) {
    grid-gap: 0.8rem;
    margin-right: -0.4rem;
  }

  @media (max-width: 1169px) {
    grid-gap: 0.8rem;
    grid-template-columns: 42% 1fr 1fr;
  }

  @media (max-width: 984px) {
    grid-template-columns: 1.6fr 1fr 1fr;
  }

  @media (max-width: 801px) {
    display: flex;

    img {
      height: 122px;
    }
  }

  @media (max-width: 574px) {
    display: grid;
    grid-template-columns: 130px 130px;
    grid-template-rows: 80px 155px;

    img {
      object-fit: cover;
      border-radius: 10px;

      &:nth-child(1) {
        height: 80px;
      }

      &:nth-child(2) {
        height: 175px;
      }

      &:nth-child(3) {
        height: 80px;
      }
    }
  }
`;

export const Image = styled.img`
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1119px) {
    width: 95%;
  }

  @media (max-width: 801px) {
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      display: none;
    }
  }
`;
