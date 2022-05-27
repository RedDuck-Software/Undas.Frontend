import React from "react";

import MobileReward from "./MobileReward";
import {
  RewardMenuWrap,
  ButtonsBlock,
  Title,
  ContentWrap,
  Button,
  IntervalInput,
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
} from "./RewardMenu.styles";
import MainTable from "./RewardTable/RewardMainTable";
import RewardTable from "./RewardTable/RewardTable";

import {
  HoldingIco,
  StakingIco,
  TradingIco,
  InformIco,
} from "../../imports";

const RewardMenu: React.FC = () => {
  return (
    <>
      <Title>Rewards</Title>
      <RewardMenuWrap>
        <ContentWrap className="top-table">
          <ButtonsBlock>
            <span>Day</span>
            <Button>1</Button>
            <Button className="active">7</Button>
            <Button>30</Button>
            <Button>
              <IntervalInput type="text" placeholder="custom" />
            </Button>
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
                <MainTable />
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
            <Button>
              <IntervalInput type="text" placeholder="custom" />
            </Button>
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
                <MainTable />
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
            <Button>
              <IntervalInput type="text" placeholder="custom" />
            </Button>
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
                <MainTable />
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
      <MobileReward />
    </>
  );
};

export default RewardMenu;
