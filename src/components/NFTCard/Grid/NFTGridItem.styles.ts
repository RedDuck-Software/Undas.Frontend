import styled from "styled-components";

import { ReactComponent as FavoriteIco } from "../../../icons/nftcard-favorite.svg";
import { Wrapper } from "../../../pages/CategoriesPage/Categories.styles";

export const Preview = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  bottom: 0;
  background: rgba(35, 36, 40, 0.5);
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  transition: all 0.3s;
  opacity: 0;
`;
export const NFTWrap = styled.div`
  cursor: pointer;
  width: 100%;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(124, 124, 124, 0.25);
  transition: all 0.3s;
  max-width: 420px;
  &:hover {
    box-shadow: 0px 5px 15px rgba(135, 61, 193, 0.5);
  }
  &:hover ${Preview} {
    opacity: 1;
  }
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const Info = styled(Wrapper)`
  background-color: #fff;
  height: 40px;
  padding: 0 10px;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
  ${Wrapper}
`;
export const Name = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #232428;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Favorite = styled(FavoriteIco)`
  cursor: pointer;
  margin-left: auto;
`;
export const ImageWrap = styled.div`
  position: relative;
  height: 215px;
  background-color: #fff;
`;
export const TextSpan = styled.span`
  line-height: 10px;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
export const BuyingBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #e2d1ff;
  padding: 1px;
  font-weight: 400;
  font-size: 14px;
  color: #232428;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  text-align: center;
`;
export const BuyBtn = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 10px;
  color: #873dc1;
  background-color: #fff;
  border-radius: 2px 2px 2px 10px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #873dc1;
    color: #fff;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const TagName = styled.span`
  padding: 13px 0;
  @media (max-width: 576px) {
    padding: 14px 0;
  }
`;

export const PriceList = styled.ul`
  max-height: 85px;
  border-radius: 0 0 12px 0;
  list-style: none;
  padding-left: 1px;
  overflow: hidden;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const PriceItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding: 0 14px 0 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #232428;
  background: rgba(255, 255, 255, 0.7);
`;
export const PriceInEth = styled.span`
  font-size: 12px;
`;
