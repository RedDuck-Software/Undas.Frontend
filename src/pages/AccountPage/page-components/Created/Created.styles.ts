import { Link } from "react-router-dom";
import styled from "styled-components";

import { CollectionBG } from "./imports";

import { ResultsTotal, SettingsBlock } from "../../../AllNFTs/AllNFTs.styles";

export const CreatedWrap = styled.div`
  width: 100%;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
  @media (max-width: 576px) {
    padding-bottom: 0;
  }
`;

export const CreatedSettingsBlock = styled(SettingsBlock)`
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;
export const CreatedSelect = styled.div`
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    min-width: 100%;
  }
`;
export const CreatedButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  background: #ffffff;
  height: 40px;
  border: none;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 18px;
  color: #5d3f92;
  min-width: 220px;
  &:hover {
    background-color: #fbf5ff;
  }
  &.created-active {
    background-color: #edd2ff;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
  @media (max-width: 576px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 8px;
  }
`;
export const CreatedResultsTotal = styled(ResultsTotal)`
  @media (max-width: 1200px) {
    flex: 0 0 15%;
    text-align: right;
    order: 3;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

//Created collections

export const CollectionCard = styled(Link)<{ bg?: string }>`
  margin: 20px 0;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 160px;
  padding: 20px;
  background: url(${({ bg }) => (bg ? bg : CollectionBG)}) no-repeat center /
    cover;
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

export const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  background: rgba(35, 36, 40, 0.7);
  backdrop-filter: blur(50px);
  border-radius: 20px;
  gap: 10px;
  flex: 0 1 60%;
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
  height: 90px;
  width: 90px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  @media (max-width: 992px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: 768px) {
    height: 70px;
    width: 70px;
  }
  @media (max-width: 576px) {
    flex: 0 0 20%;
    & img {
      height: 60px;
      width: 60px;
    }
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
  @media (max-width: 992px) {
    max-width: 220px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 15px;
    max-width: 165px;
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
  @media (max-width: 992px) {
    flex: 0 1 50%;
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
  height: 100%;
  object-fit: cover;
`;
export const ClipLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
