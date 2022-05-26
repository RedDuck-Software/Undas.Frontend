import React from "react";

import { 
    MobileRewardMenuWrap,
    RewardAccordion,
    RewardAccordionItem,
    RewardAccordionHeader,
    RewardAccordionBody
 } from "./MobileReward.styles";
import {
    ButtonsBlock,
    Button,
    IntervalInput,
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

const MobileReward: React.FC = () => {
  return (
    <MobileRewardMenuWrap>
      <RewardAccordion defaultActiveKey="0">
        <RewardAccordionItem eventKey="0">
          <RewardAccordionHeader>
            <MainBlock>
              <BlockTitleWrap>
              <ImageBlock>
                <HoldingIco />
              </ImageBlock>
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
          </RewardAccordionHeader>
          <RewardAccordionBody>
            <CentralBlock>
              <CentralBlockHead>
                <ButtonsBlock>
                    <span>Day</span>
                    <Button>1</Button>
                    <Button className="active">7</Button>
                    <Button>30</Button>
                    <Button>
                        <IntervalInput type="text" placeholder="custom" />
                    </Button>
                </ButtonsBlock>
                <span>x Days</span>
              </CentralBlockHead>
              <RewardTable />
            </CentralBlock>
            <RightBlock>
              <RightBlockHead>Unclaimed reward&#39;s</RightBlockHead>
              <RewardTable />
              <RightBlockButton>Claim</RightBlockButton>
            </RightBlock>
          </RewardAccordionBody>
        </RewardAccordionItem>
        <RewardAccordionItem eventKey="1">
          <RewardAccordionHeader><MainBlock>
              <BlockTitleWrap>
              <ImageBlock>
                <StakingIco />
              </ImageBlock>
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
          </RewardAccordionHeader>
          <RewardAccordionBody>
            <CentralBlock>
              <CentralBlockHead>
                <ButtonsBlock>
                    <span>Day</span>
                    <Button>1</Button>
                    <Button className="active">7</Button>
                    <Button>30</Button>
                    <Button>
                        <IntervalInput type="text" placeholder="custom" />
                    </Button>
                </ButtonsBlock>
                <span>x Days</span>
              </CentralBlockHead>
              <RewardTable />
            </CentralBlock>
            <RightBlock>
              <RightBlockHead>Unclaimed reward&#39;s</RightBlockHead>
              <RewardTable />
              <RightBlockButton>Claim</RightBlockButton>
            </RightBlock>
          </RewardAccordionBody>
        </RewardAccordionItem>
        <RewardAccordionItem eventKey="2">
          <RewardAccordionHeader><MainBlock>
              <BlockTitleWrap>
              <ImageBlock>
                <TradingIco />
              </ImageBlock>
                <BlockTitle>Trading</BlockTitle>
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
          </RewardAccordionHeader>
          <RewardAccordionBody>
            <CentralBlock>
              <CentralBlockHead>
                <ButtonsBlock>
                    <span>Day</span>
                    <Button>1</Button>
                    <Button className="active">7</Button>
                    <Button>30</Button>
                    <Button>
                        <IntervalInput type="text" placeholder="custom" />
                    </Button>
                </ButtonsBlock>
                <span>x Days</span>
              </CentralBlockHead>
              <RewardTable />
            </CentralBlock>
            <RightBlock>
              <RightBlockHead>Unclaimed reward&#39;s</RightBlockHead>
              <RewardTable />
              <RightBlockButton>Claim</RightBlockButton>
            </RightBlock>
          </RewardAccordionBody>
        </RewardAccordionItem>
      </RewardAccordion>
    </MobileRewardMenuWrap>
  );
};

export default MobileReward;
