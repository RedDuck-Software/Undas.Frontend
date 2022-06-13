import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  & img {
    width: 100%;
  }

  @media (max-width: 576px) {
    height: 60px;
    & img {
      height: 60px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 10px;
  font-weight: 400;
  align-items: center;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 10px;
  color: #232428;

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  color: #232428;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px 20px;
  width: 540px;
  height: 120px;
  background-color: #fbf5ff;
  box-shadow: 0 4px 10px rgba(135, 61, 193, 0.25);
  border-radius: 10px;

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const InfoText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 230px;
`;

export const ContactImage = styled.img`
  cursor: pointer;
`;

export const ContactText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
`;

export const CollectionCard = styled.div`
  margin: 20px 0;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 160px;
  padding: 20px;
  background-color: hotpink;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    height: 180px;
    padding: 0px;
  }
  @media (max-width: 768px) {
    height: 160px;
  }
  @media (max-width: 576px) {
    height: 165px;
  }
`;

export const CollectionBackground = styled.img`
  top: 0;
  left: 0;
  position: absolute;
`;

export const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  width: 56%;
  min-width: 474px;
  height: 70px;
  margin-top: 45px;
  padding-right: 20px;
  background: rgba(35, 36, 40, 0.7);
  backdrop-filter: blur(50px);
  border-radius: 20px;

  @media (max-width: 1200px) {
    width: 100%;
    position: absolute;
    margin-top: 110px;
  }
  @media (max-width: 768px) {
    margin-top: 90px;
  }
  @media (max-width: 576px) {
    height: 95px;
    margin-top: 70px;
    align-items: unset;
  }
`;

export const CollectionPicWrap = styled.div`
  width: 70px;
  height: 100%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;

  @media (max-width: 576px) {
    height: 60px;
    width: 60px;
    align-items: unset;
  }
`;

interface IText {
  fs?: string;
  mw?: string;
  lh?: string;
  padd?: string;
}

export const CollectionText = styled.span<IText>`
  max-width: ${(props) => props.mw || ""};
  font-weight: 400;
  font-size: ${(props) => props.fs || "14px"};
  line-height: ${(props) => props.lh || "17px"};
  padding: ${(props) => props.padd};
  color: #fff;

  @media (max-width: 1200px) {
    max-width: unset;
    width: 65%;
    font-size: 12px;
  }
  @media (max-width: 576px) {
    font-family: "Montserrat";
    font-style: normal;
    font-size: 10px;
    line-height: 12px;
    display: table-cell;
  }
`;

interface IWrapper {
  disp?: string;
  alignItems?: string;
  justifyContent?: string;
  justifySelf?: string;
  flexDirection?: string;
  flexWrap?: string;
  gap?: string;
  marg?: string;
  mw?: string;
  bg?: string;
  w?: string;
  curs?: string;
  margBottomS?: string;
  margBottomXS?: string;
}

export const Wrapper = styled.div<IWrapper>`
  position: relative;
  width: ${(props) => props.w || ""};
  display: ${(props) => props.disp || "inline-block"};
  margin: ${(props) => props.marg};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  justify-self: ${(props) => props.justifySelf};
  flex-direction: ${(props) => props.flexDirection || ""};
  margin: ${(props) => props.marg};
  max-width: ${(props) => props.mw};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.flexWrap || ""};
  background-color: ${(props) => props.bg || ""};
  cursor: ${(props) => props.curs || ""};
  @media (max-width: 768px) {
    margin-bottom: ${(props) => props.margBottomS};
  }
  @media (max-width: 576px) {
    margin-bottom: ${(props) => props.margBottomXS};
  }
`;

interface IPlatform {
  col?: string;
  fs?: string;
}

export const Platform = styled.strong<IPlatform>`
  font-family: "Jost";
  font-weight: 600;
  font-size: ${(props) => props.fs || "12px"};
  line-height: 16px;
  color: ${(props) => props.col || "#CCB7F2"};
`;

export const NFTCards = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 120px;
  height: 120px;
  border-radius: 20px;

  @media (max-width: 1200px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
`;

export const NameNft = styled.div`
  position: relative;
  display: flex;
  margin: 0 20px 0 0;
  align-items: center;
  gap: 10px;

  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;

export const CollectionTextDiv = styled.div`
  position: relative;
  display: flex;
  max-width: 320px;
  margin: 0 0 0 auto;

  @media (max-width: 1200px) {
    max-width: unset;
    position: absolute;
    right: 15px;
    display: block;
    width: 70%;
  }
  @media (max-width: 950px) {
    width: 60%;
  }
  @media (max-width: 700px) {
    width: 56%;
    line-height: 12px;
    display: table-cell;
    left: 20px;
    margin-left: 210px;
    top: 10px;
    bottom: 10px;
  }
  @media (max-width: 646px) {
    width: 56%;
  }
  @media (max-width: 626px) {
    width: 53%;
  }
  @media (max-width: 576px) {
    width: 45%;
  }
  @media (max-width: 540px) {
    width: 37%;
  }
  @media (max-width: 576px) {
    left: 170px;
    margin-left: -100px;
    width: 68%;
    bottom: 10px;
    top: unset;
  }
  @media (max-width: 486px) {
    width: 60%;
  }
  @media (max-width: 390px) {
    width: 50%;
  }
  @media (max-width: 340px) {
    width: 45%;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 15px;

  @media (max-width: 1200px) {
    position: absolute;
    right: 15px;
    top: 15px;
    max-width: unset;
    text-align: left;
  }
  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;

export const ImageCollection = styled.img`
  width: 100%;
`;
