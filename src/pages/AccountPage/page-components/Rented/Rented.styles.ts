import styled from "styled-components";

import {
  ViewOption,
  ResultsTotal,
  SettingsBlock,
} from "../../../AllNFTs/AllNFTs.styles";

export const FavouriteSettingsBlock = styled(SettingsBlock)`
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;
export const FavouriteSelect = styled.div`
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    min-width: 100%;
  }
`;
export const FavouriteButton = styled.button`
  cursor: pointer;
  background: #ffffff;
  height: 40px;
  border: none;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #5d3f92;
  &:hover {
    background-color: #fbf5ff;
  }
  &.favourite-active {
    background-color: #edd2ff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 8px;
  }
`;
export const FavouriteResultsTotal = styled(ResultsTotal)`
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
