import React from "react";

import {
    ContentMainTable,
    ContentTr,
    ContentTd,
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
  } from "../../../imports";

const MainTable: React.FC = () => {
  return <ContentMainTable>
                <ContentTr>
                  <ContentTd>
                    <Icon className="left-table">
                      <UndIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd>2</ContentTd>
                </ContentTr>
                <ContentTr>
                  <ContentTd>
                    <Icon className="left-table">
                      <EthIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd>40</ContentTd>
                </ContentTr>
                <ContentTr>
                  <ContentTd>
                    <Icon className="left-table">
                      <UsdIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd>23 278.00</ContentTd>
                </ContentTr>
                <ContentTr>
                  <ContentTd>
                    <Icon className="left-table">
                      <WethIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd>40</ContentTd>
                </ContentTr>
                <ContentTr>
                  <ContentTd>
                    <Icon className="left-table">
                      <MaticIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd>40</ContentTd>
                </ContentTr>
                <ContentTr>
                  <ContentTd>
                    <Icon className="left-table">
                      <BnbIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd>2</ContentTd>
                </ContentTr>
                <ContentTr>
                  <ContentTd>
                    <Icon className="left-table">
                      <SolanaIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd>2</ContentTd>
                </ContentTr>
                <ContentTr className="disabled">
                  <ContentTd>
                    <Icon className="left-table">
                      <FtmIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd></ContentTd>
                </ContentTr>
                <ContentTr className="disabled">
                  <ContentTd>
                    <Icon className="left-table">
                      <AvaxIco />
                    </Icon>
                  </ContentTd>
                  <ContentTd></ContentTd>
                </ContentTr>
              </ContentMainTable>;
};

export default MainTable;
