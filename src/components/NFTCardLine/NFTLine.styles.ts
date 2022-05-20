import styled from "styled-components";

import { ReactComponent as FavoriteIco } from "../../../icons/nftcard-favorite.svg";

export const NFTWrap = styled.div`
  cursor: pointer;
  max-width: 255px;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  filter: drop-shadow(0px 5px 15px rgba(135, 61, 193, 0.5));
`;

export const Name = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #232428;
`;

export const Favorite = styled(FavoriteIco)`
  cursor: pointer;
  margin-left: auto;
`;
export const ContainerLine = styled.div`
  background: linear-gradient(0deg, #e2d1ff, #e2d1ff), #ffffff;
  border-radius: 10px;
  width: 100%;
  height: 200px;
`;
