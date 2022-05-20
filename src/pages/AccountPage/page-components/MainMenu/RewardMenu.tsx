import React from "react";

import {
  RewardMenuWrap,
  ButtonsBlock,
  Title,
  ContentWrap,
  Button,
  ContentTableWrap,
  ImageBlock,
  MainBlock,
  CentralBlock,
  RightBlock,
  BlockTitleWrap,
  BlockTitle,
  BlockValue,
  TextValue,
  InformButton,
  BlockContent,
  BlockContentTotal,
  CentralBlockHead,
  RightBlockHead,
  RightBlockButton,
} from "./Menu.styles";

import {
  HoldingIco,
  StakingIco,
  TradingIco,
  InformIco,
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
import RewardTable from "../RewardTable/RewardTable";
import {
  ContentTable,
  ContentTr,
  ContentTd,
  Icon,
} from "../RewardTable/RewardTable.styles";

const RewardMenu: React.FC = () => {
  return (
    <RewardMenuWrap>
      <Title>Rewards</Title>
      <ContentWrap className="top-table">
        <ButtonsBlock>
          <span>Day</span>
          <Button>1</Button>
          <Button className="active">7</Button>
          <Button>30</Button>
          <Button>custom</Button>
        </ButtonsBlock>
        <ContentTableWrap>
          <ImageBlock>
            <HoldingIco />
          </ImageBlock>
          <MainBlock>
            <BlockTitleWrap>
              <BlockTitle>Holding</BlockTitle>
              <BlockValue>
                <TextValue>
                  <span className="number">12</span>%
                </TextValue>
                <InformButton>
                  <InformIco />
                </InformButton>
              </BlockValue>
            </BlockTitleWrap>
            <BlockContent>
              <BlockContentTotal>Total</BlockContentTotal>
              <ContentTable>
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
              </ContentTable>
            </BlockContent>
          </MainBlock>
          <CentralBlock>
            <CentralBlockHead>x Days</CentralBlockHead>
            <RewardTable />
          </CentralBlock>
          <RightBlock>
            <RightBlockHead>Unclaimed reward&#39;s</RightBlockHead>
            <RewardTable />
            <RightBlockButton>Claim</RightBlockButton>
          </RightBlock>
        </ContentTableWrap>
      </ContentWrap>
      <ContentWrap>
        <ButtonsBlock>
          <span>Day</span>
          <Button>1</Button>
          <Button className="active">7</Button>
          <Button>30</Button>
          <Button>custom</Button>
        </ButtonsBlock>
        <ContentTableWrap className="central-table">
          <ImageBlock>
            <StakingIco />
          </ImageBlock>
          <MainBlock>
            <BlockTitleWrap>
              <BlockTitle>Staking NFT</BlockTitle>
              <BlockValue>
                <TextValue>
                  <span className="number">152</span>
                </TextValue>
                <InformButton>
                  <InformIco />
                </InformButton>
              </BlockValue>
            </BlockTitleWrap>
            <BlockContent>
              <BlockContentTotal>Total</BlockContentTotal>
              <ContentTable>
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
              </ContentTable>
            </BlockContent>
          </MainBlock>
          <CentralBlock>
            <CentralBlockHead>x Days</CentralBlockHead>
            <RewardTable />
          </CentralBlock>
          <RightBlock>
            <RightBlockHead>Unclaimed reward&#39;s</RightBlockHead>
            <RewardTable />
            <RightBlockButton>Claim</RightBlockButton>
          </RightBlock>
        </ContentTableWrap>
      </ContentWrap>
      <ContentWrap>
        <ButtonsBlock>
          <span>Day</span>
          <Button>1</Button>
          <Button className="active">7</Button>
          <Button>30</Button>
          <Button>custom</Button>
        </ButtonsBlock>
        <ContentTableWrap>
          <ImageBlock>
            <TradingIco />
          </ImageBlock>
          <MainBlock>
            <BlockTitleWrap>
              <BlockTitle>Trading</BlockTitle>
              <BlockValue>
                <TextValue>
                  <span className="number">85</span>%
                </TextValue>
                <InformButton>
                  <InformIco />
                </InformButton>
              </BlockValue>
            </BlockTitleWrap>
            <BlockContent>
              <BlockContentTotal>Total</BlockContentTotal>
              <ContentTable>
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
              </ContentTable>
            </BlockContent>
          </MainBlock>
          <CentralBlock>
            <CentralBlockHead>x Days</CentralBlockHead>
            <RewardTable />
          </CentralBlock>
          <RightBlock>
            <RightBlockHead>Unclaimed reward&#39;s</RightBlockHead>
            <RewardTable />
            <RightBlockButton>Claim</RightBlockButton>
          </RightBlock>
        </ContentTableWrap>
      </ContentWrap>
    </RewardMenuWrap>
  );
};

export default RewardMenu;
