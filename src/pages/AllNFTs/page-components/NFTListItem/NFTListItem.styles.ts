import { Col, Row, Tab } from "react-bootstrap";
import styled from "styled-components";

import { block, ethereum } from "./imports";

export const TabShop = styled(Tab)`
  background-image: url(${block});
  background-color: red;
`;
export const RowLine = styled(Row)`
  background: linear-gradient(0deg, #e2d1ff, #e2d1ff), #ffffff;
  border-radius: 10px;
  height: 200px;
  filter: drop-shadow(0px 3px 5px rgba(124, 124, 124, 0.25));
  margin-top: 20px;
  width: 100%;
  margin-right: 0;
  margin-left: auto;
`;

export const ColTextTop = styled(Col)`
  width: 85%;
  height: 40px;
  background: #ffffff;
  border-radius: 0px 10px 0px 0px;
  position: relative;
`;
export const DivLastSales = styled.div`
  height: 36px;
  width: 25%;
  position: absolute;
  background-color: #ffffff;
  border-left-color: #e2d1ff;
  border-left-style: solid;
  border-left-width: 1px;
  left: 75%;
  border-radius: 0px 0px 10px 0px;
`;
export const PeriodText = styled.div`
  position: absolute;
  right: 10px;
  top: 11px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
`;
export const DivPeriod = styled.div`
  height: 36px;
  width: 25%;
  position: absolute;
  background-color: #ffffff;
  border-left-color: #e2d1ff;
  border-left-style: solid;
  border-left-width: 1px;
  left: 50%;
`;
export const DivPrice = styled.div`
  height: 36px;
  width: 25%;
  position: absolute;
  background-color: #ffffff;
  border-left-color: #e2d1ff;
  border-left-style: solid;
  border-left-width: 1px;
  left: 25%;
`;
export const EthereumText = styled.div`
  position: absolute;
  right: 10px;
  top: 11px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  &:before {
    content: url(${ethereum});
    position: absolute;
    left: -15px;
  }
`;
export const DepositText = styled.span`
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  margin-left: 15px;
  margin-top: 11px;
`;
export const DivDeposit = styled.div`
  height: 36px;
  width: 25%;
  position: absolute;
  background-color: #ffffff;
  border-left-color: #e2d1ff;
  border-left-style: solid;
  border-left-width: 1px;
`;
export const RowDown = styled.div`
  height: 36px;
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  padding-right: 10px;
  bottom: 0;
  border-radius: 0px 0px 10px 0px;
`;
export const RowCenter = styled.div`
  height: 160px;
  margin-top: -160px;
  position: relative;
  margin-left: 180px;
  background-color: #e2d1ff;
  border-radius: 0px 0px 10px 0px;
`;
export const ImageHeart = styled.img`
  right: 12px;
  position: absolute;
  top: 12px;
  width: 16px;
  height: 16px;
`;
export const ImageBlock = styled.img`
  position: relative;
  left: 25px;
  width: 14px;
  height: 16px;
  top: 7px;
`;
export const ImageChecked = styled.img`
  position: relative;
  left: 10px;
  width: 16px;
  height: 16px;
  top: 8px;
`;
export const TextUND = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #873dc1;
  position: relative;
  top: 8px;
  left: 15px;
`;
export const TextNameNFT = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  top: 8px;
  padding-right: 20px;
  position: relative;
`;
export const TextPreview = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
export const ImageEye = styled.img`
  height: 20px;
  margin-right: 10px;
`;
export const ImagePreview = styled.div`
  height: 36px;
  position: absolute;
  background: rgba(35, 36, 40, 0.5);
  border-radius: 0px 0px 0px 10px;
  width: 180px;
  bottom: 0;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const ImgNFT = styled.img`
  width: 180px;
  height: 200px;
  position: relative;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px;
`;
export const ColImg = styled(Col)`
  padding-left: 0px;
  height: 200px;
  width: 15%;
  display: contents;
`;
