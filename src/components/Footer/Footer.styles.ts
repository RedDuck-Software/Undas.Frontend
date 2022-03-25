import styled from "styled-components";
import { Container } from "../../globalStyles";

export const FooterSec = styled.footer`
  background: #f6e9ff;
`;

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1.8fr 2.2fr;

  min-height: 100%;
  padding: 3rem;

  @media (max-width: 1019px) {
    padding: 2.5rem;

    grid-template-columns: 3fr 1fr;
  }

  @media (max-width: 634px) {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }

  ${Container};
`;

export const FooterText = styled.span`
  font-size: 1.5rem;
  word-spacing: 0.3rem;

  @media (max-width: 1169px) {
    font-size: 1.3rem;
  }

  @media (max-width: 954px) {
    font-size: 1.1rem;
  }

  @media (max-width: 869px) {
    font-size: 1rem;
  }

  @media (max-width: 734px) {
    font-size: 0.85rem;
  }
`;

export const TopLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-self: end;

  @media (max-width: 634px) {
    align-self: center;
    align-items: center;
    order: 4;

    padding-top: 2rem;
  }
`;

export const BottomLeftWrapper = styled(TopLeftWrapper)`
  margin-top: 12%;
  align-self: start;

  @media (max-width: 634px) {
    align-self: center;
    order: 3;
    margin-top: 0rem;
  }

  ${TopLeftWrapper}
`;

export const TopRightWrapper = styled(TopLeftWrapper)`
  flex-direction: row;

  @media (max-width: 634px) {
    order: 2;

    display: flex;
    flex-direction: column;
    margin-top: -6rem;
  }

  ${TopLeftWrapper}
`;

export const BottomRightWrapper = styled(TopLeftWrapper)`
  margin-top: 10%;

  flex-direction: row;
  gap: 10%;

  @media (max-width: 969px) {
    gap: 2%;
  }

  @media (max-width: 719px) {
    gap: 4%;
  }

  @media (max-width: 634px) {
    align-items: flex-start;
    margin-top: 4%;
    order: 1;
  }

  ${TopLeftWrapper};
`;

export const FooterIconsWrapper = styled.div`
  margin-top: 1.625rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 1019px) {
    img {
      width: 40px;
    }
  }

  @media (max-width: 869px) {
    margin-top: 1.25rem;
    gap: 1rem;

    img {
      width: 30px;
    }
  }

  @media (max-width: 734px) {
    margin-top: 1rem;
  }

  @media (max-width: 719px) {
    gap: 0.75rem;
  }
`;

export const FooterIcon = styled.img`
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.15s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (max-width: 869px) {
    border-radius: 5px;
  }
`;

export const CustomSearch = styled.div`
  width: 350px;
  position: relative;

  @media (max-width: 1019px) {
    width: 265px;
  }

  @media (max-width: 869px) {
    width: 215px;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 40px;
  outline: none;
  width: 350px;
  height: 62px;
  margin-top: 1rem;
  font-size: 1.25rem;
  padding-left: 2rem;
  color: #000000;

  &::placeholder {
    font-size: 1.25rem;
    color: #7c7c7c;
  }

  @media (max-width: 1019px) {
    width: 260px;
    height: 50px;
    //padding-left: 1rem;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media (max-width: 869px) {
    width: 210px;
    height: 38px;
    padding-left: 1rem;
    font-size: 0.75rem;

    &::placeholder {
      font-size: 0.75rem;
    }
  }
`;

export const ButtonSubmit = styled.button`
  position: absolute;
  right: 1rem;
  top: 1.8rem;
  width: 90px;
  height: 36px;
  background: #893ac2;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  color: #fff;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #6a358f;
  }

  @media (max-width: 1019px) {
    top: 35%;
  }

  @media (max-width: 869px) {
    width: 210px;
  }

  @media (max-width: 869px) {
    top: 42%;
    width: 60px;
    height: 24px;
    font-size: 0.75rem;
  }
`;

export const PhoneImage = styled.img`
  width: 255px;

  @media (max-width: 1084px) {
    width: 200px;
  }

  @media (max-width: 1019px) {
    width: 170px;
  }
`;

export const LeftSide = styled.div`
  @media (max-width: 801px) {
    img {
      width: 150px;
      height: 108.82px;
    }
  }

  @media (max-width: 719px) {
    img {
      width: 105px;
      height: 83px;
    }
  }

  @media (max-width: 634px) {
    img {
      visibility: hidden;
    }
  }
`;

export const RightSide = styled.div`
  max-width: 500px;
  align-self: end;
  padding-left: 2rem;

  ${FooterText} {
    display: inline-block;
    min-width: 300px;
    padding-bottom: 28px;
  }

  @media (max-width: 1084px) {
    padding: 2rem 0 0 1.625rem;
  }

  @media (max-width: 1019px) {
    padding: 1.5rem 0 0 1rem;

    ${FooterText} {
      display: inline-block;
      min-width: 300px;
      padding-bottom: 18px;
      font-size: 1.1rem;
      max-width: 150px;
    }
  }

  @media (max-width: 954px) {
    ${FooterText} {
      min-width: 240px;
      padding-bottom: 18px;
      font-size: 1rem;
      max-width: 150px;
    }
  }

  @media (max-width: 869px) {
    padding: 0 0 0 1rem;

    ${FooterText} {
      min-width: 180px;
    }
  }

  @media (max-width: 801px) {
    ${FooterText} {
      font-size: 0.95rem;
      min-width: 180px;
    }

    img {
      width: 90px;
    }
  }

  @media (max-width: 719px) {
    ${FooterText} {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 634px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const TopicColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;

  @media (max-width: 969px) {
    min-width: 100px;
  }

  @media (max-width: 719px) {
    min-width: 80px;
  }

  @media (max-width: 634px) {
    min-width: 120px;
  }

  @media (max-width: 464px) {
    min-width: 110px;
  }

  @media (max-width: 399px) {
    min-width: 25vw;
  }
`;

export const TopicTitle = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  cursor: pointer;

  @media (max-width: 1169px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1019px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 954px) {
    font-size: 1.25rem;
  }

  @media (max-width: 734px) {
    font-size: 1.15rem;
  }

  @media (max-width: 719px) {
    margin-bottom: 0.75rem;
    font-size: 1.05rem;
  }
`;

export const TopicText = styled.span`
  cursor: not-allowed;
  opacity: 0.4;
  align-items: flex-start;
  font-size: 1.2rem;
  padding: 0.3rem 0;

  &:hover {
    font-weight: 600;
  }

  @media (max-width: 1169px) {
    font-size: 1rem;
  }

  @media (max-width: 801px) {
    padding: 0.25rem 0;
  }

  @media (max-width: 734px) {
    font-size: 0.9rem;
  }
`;

export const TopicFirst = styled(TopicText)`
  cursor: pointer;
  opacity: 1;
`;

export const Year = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem;
  color: #7c7c7c;
  font-size: 16px;
`;
