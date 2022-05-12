import React from "react";

import {
  Wrap,
  ContentTable,
  ContentTr,
  ContentTd,
  Name,
  Icon,
} from "./RewardTable.styles";
import {
  UndIco,
  EthIco,
  UsdIco,
  WethIco,
  MaticIco,
  BnbIco,
  SolanaIco,
  FtmIco,
  AvaxIco,
} from "../../imports";
const RewardTable = () => {
  return (
    <Wrap>
      <ContentTable>
        <ContentTr>
          <ContentTd>
            <Icon>
              <EthIco />
            </Icon>
            <Name>
              <UndIco />
            </Name>
          </ContentTd>
          <ContentTd>5</ContentTd>
        </ContentTr>
        <ContentTr>
          <ContentTd>
            <Icon>
              <EthIco />
            </Icon>
            <Name>ETH</Name>
          </ContentTd>
          <ContentTd>5</ContentTd>
        </ContentTr>
        <ContentTr>
          <ContentTd>
            <Icon>
              <UsdIco />
            </Icon>
            <Name>USD</Name>
          </ContentTd>
          <ContentTd>5</ContentTd>
        </ContentTr>
        <ContentTr>
          <ContentTd>
            <Icon>
              <WethIco />
            </Icon>
            <Name>WETH</Name>
          </ContentTd>
          <ContentTd>5</ContentTd>
        </ContentTr>
        <ContentTr>
          <ContentTd>
            <Icon>
              <MaticIco />
            </Icon>
            <Name>MATIC</Name>
          </ContentTd>
          <ContentTd>5</ContentTd>
        </ContentTr>
        <ContentTr>
          <ContentTd>
            <Icon>
              <BnbIco />
            </Icon>
            <Name>BNB</Name>
          </ContentTd>
          <ContentTd>5</ContentTd>
        </ContentTr>
        <ContentTr>
          <ContentTd>
            <Icon>
              <SolanaIco />
            </Icon>
            <Name>Solana</Name>
          </ContentTd>
          <ContentTd>5</ContentTd>
        </ContentTr>
        <ContentTr className="disabled">
          <ContentTd>
            <Icon>
              <FtmIco />
            </Icon>
            <Name>FTM</Name>
          </ContentTd>
          <ContentTd></ContentTd>
        </ContentTr>
        <ContentTr className="disabled">
          <ContentTd>
            <Icon>
              <AvaxIco />
            </Icon>
            <Name>AVAX</Name>
          </ContentTd>
          <ContentTd></ContentTd>
        </ContentTr>
      </ContentTable>
    </Wrap>
  );
};

export default RewardTable;
