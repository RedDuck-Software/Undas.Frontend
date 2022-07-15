import { Link } from "react-router-dom";
import styled from "styled-components";

import { CollectionBG } from "./imports";

import { ResultsTotal, SettingsBlock } from "../../../AllNFTs/AllNFTs.styles";

export const CreatedWrap = styled.div`
  padding-bottom: 80px;
  @media (max-width: 992px) {
    padding-bottom: 40px;
  }
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
    flex: 0 0 20%;
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

export const CollectionCard = styled(Link)`
  margin: 20px 0;
  position: relative;
  cursor: pointer;
  width: 100%;
  padding: 20px;
  background: url(${CollectionBG}) no-repeat center / cover;
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
  min-width: 470px;
  margin-top: 45px;
  background: rgba(35, 36, 40, 0.7);
  backdrop-filter: blur(50px);
  border-radius: 20px;
  flex: 0 0 60%;
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
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  & img {
    width: 100%;
    border-radius: 20px;
  }
  @media (max-width: 576px) {
    height: 60px;
    width: 60px;
    align-items: unset;
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
    width: 65%;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    font-style: normal;
    font-size: 10px;
    line-height: 12px;
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
  width: 30%;
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
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
  flex: 0 1 40%;
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
