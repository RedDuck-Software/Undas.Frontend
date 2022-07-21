import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoaderWrapper = styled.div`
  text-align: center;
  padding: 10rem 0;
`;
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

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  width: 540px;
  max-height: 120px;
  height: auto;
  overflow: hidden;
  background-color: #fbf5ff;
  box-shadow: 0 4px 10px rgba(135, 61, 193, 0.25);
  border-radius: 10px;

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 10px;
  }
  @media (max-width: 576px) {
    max-height: unset;
  }
`;

export const InfoText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #232428;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CollectionCard = styled(Link)`
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
  text-decoration: none;
  align-items: flex-end;
  gap: 15px;
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
  width: 100%;
  height: 100%;
  opacity: 0.70 
`;

export const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  background: rgba(35, 36, 40, 0.7);
  backdrop-filter: blur(50px);
  border-radius: 20px;
  gap: 10px;
  flex: 0 0 60%;
  @media (max-width: 1200px) {
    flex: 0 0 100%;
    width: 100%;
  }
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 5px 10px;
    padding: 10px 5px;
  }
`;

export const CollectionPicWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  flex: 0 0 10%;
  & img {
    width: 100%;
    border-radius: 20px;
  }
  @media (max-width: 576px) {
    flex: 0 0 20%;
    & img {
      height: 60px;
      width: 60px;
    }
  }
`;
export const CollectionName = styled.div`
  max-width: 260px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;
export const NameWrap = styled.div`
  flex: 0 1 40%;
  @media (max-width: 1200px) {
    flex: 0 1 30%;
  }
  @media (max-width: 576px) {
    flex: 0 0 70%;
    max-width: 70%;
  }
`;
export const NameNft = styled.div`
  position: relative;
  display: flex;
  margin: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  max-width: 260px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;
export const OwnerName = styled.div`
  max-width: 260px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 15px;
  }
  @media (max-width: 576px) {
    max-width: 95%;
  }
`;
export const CollectionTextDiv = styled.div`
  position: relative;
  display: flex;
  margin: 0 0 0 auto;
  flex: 0 1 50%;
  @media (max-width: 1200px) {
    flex: 0 1 60%;
  }
  @media (max-width: 576px) {
    flex: 0 0 100%;
    padding: 0 15px;
  }
`;
export const CollectionText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding-right: 10px;
  @media (max-width: 1200px) {
    width: 100%;
    padding-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 15px;
  }
  @media (max-width: 576px) {
    font-style: normal;
    font-size: 10px;
    line-height: 12px;
    -webkit-line-clamp: 2;
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
  margBottomM?: string;
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
  @media (max-width: 992px) {
    margin-bottom: ${(props) => props.margBottomM};
  }
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
