import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  & img {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 10px;
  font-weight: 400;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 10px;
  color: #232428;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  color: #232428;
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
  overflow: auto;
  display: flex;
  justify-content: space-between;
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
`;

export const CollectionPicWrap = styled.div`
  width: 70px;
  height: 100%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
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
`;

interface IPlatform {
  col?: string;
}

export const Platform = styled.strong<IPlatform>`
  font-family: "Jost";
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
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
`;
