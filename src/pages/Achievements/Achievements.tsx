import React from "react";

import {
  AchievementsWrap,
  AchievementsHeadInner,
  InfoText,
  RewardsBody,
  PurpleRewards,
  PurpleRewardsTitle,
  RewardsDescription,
  ImagesBlock,
  RewardItem,
  RewardImg,
  BronzeRewards,
  BronzeRewardsTitle,
  SilverRewards,
  SilverRewardsTitle,
  GoldRewards,
  GoldRewardsTitle,
  ImageInner,
  Diamond,
  DiamondImg,
  DiamondText,
  UndasText,
  TradingRewards,
  TradingRewardsTitle,
  RewardImgTrading,
  TextRewards,
  Rewards,
} from "./Achievements.styles";
import {
  dollarReward,
  caseReward,
  ethReward,
  moneyReward,
  peopleReward,
  bronzeDollarReward,
  bronzeCaseReward,
  bronzeEthReward,
  bronzeMoneyReward,
  bronzePeopleReward,
  silverDollarReward,
  silverCaseReward,
  silverEthReward,
  silverMoneyReward,
  silverPeopleReward,
  goldDollarReward,
  goldCaseReward,
  goldEthReward,
  goldMoneyReward,
  goldPeopleReward,
  diamond,
} from "./imports";

import { Background, Container, PageTitle } from "../../globalStyles";

const Achievements: React.FC = () => {
  return (
    <Background>
      <Container>
        <AchievementsWrap>
          <AchievementsHeadInner>
            <PageTitle>Achievements</PageTitle>
            <InfoText>
              Each reward gives 1% to the total user rate when distributing
              tokens for staking and trading volume{" "}
            </InfoText>
          </AchievementsHeadInner>
          <PurpleRewards>
            <PurpleRewardsTitle>Set of Purple Rewards</PurpleRewardsTitle>
            <RewardsBody>
              <RewardsDescription>
                When you close a set of purple badges - a lifetime discount on
                all Undas service fees of 1 percent{" "}
              </RewardsDescription>
              <ImagesBlock>
                <RewardImg src={dollarReward} alt="dollar-reward-image" />
                <RewardImg src={moneyReward} alt="money-reward-image" />
                <RewardImg src={ethReward} alt="eth-reward-image" />
                <RewardImg src={caseReward} alt="bank-reward-image" />
                <RewardImg src={peopleReward} alt="people-reward-image" />
              </ImagesBlock>
            </RewardsBody>
          </PurpleRewards>
          <BronzeRewards>
            <BronzeRewardsTitle>Set of Bronze Rewards</BronzeRewardsTitle>
            <RewardsBody>
              <RewardsDescription>
                Lifetime discount on all Undas service commissions of 3 percent,
                the first five thousand users to close the set receives 500 und{" "}
              </RewardsDescription>
              <ImagesBlock>
                <RewardImg src={bronzeDollarReward} alt="dollar-reward-image" />
                <RewardImg src={bronzeMoneyReward} alt="money-reward-image" />
                <RewardImg src={bronzeEthReward} alt="eth-reward-image" />
                <RewardImg src={bronzeCaseReward} alt="eth-reward-image" />
                <RewardImg src={bronzePeopleReward} alt="people-reward-image" />
              </ImagesBlock>
            </RewardsBody>
          </BronzeRewards>
          <SilverRewards>
            <SilverRewardsTitle>Set of Silver Rewards</SilverRewardsTitle>
            <RewardsBody>
              <RewardsDescription>
                Lifetime discount on all commissions of all Undas services of 6
                percent, the first thousand users to close the set receives
                1,000 und{" "}
              </RewardsDescription>
              <ImagesBlock>
                <RewardImg src={silverDollarReward} alt="dollar-reward-image" />
                <RewardImg src={silverMoneyReward} alt="money-reward-image" />
                <RewardImg src={silverEthReward} alt="eth-reward-image" />
                <RewardImg src={silverCaseReward} alt="bank-reward-image" />
                <RewardImg src={silverPeopleReward} alt="people-reward-image" />
              </ImagesBlock>
            </RewardsBody>
          </SilverRewards>
          <GoldRewards>
            <GoldRewardsTitle>Set of Gold Rewards</GoldRewardsTitle>
            <RewardsBody>
              <RewardsDescription>
                Lifetime discount on all commissions of all Undas services of 9
                percent the first 100 users to close the set receives 10,000 und
              </RewardsDescription>
              <ImagesBlock>
                <RewardImg src={goldDollarReward} alt="dollar-reward-image" />
                <RewardImg src={goldMoneyReward} alt="money-reward-image" />
                <RewardImg src={goldEthReward} alt="eth-reward-image" />
                <RewardImg src={goldCaseReward} alt="bank-reward-image" />
                <RewardImg src={goldPeopleReward} alt="people-reward-image" />
              </ImagesBlock>
            </RewardsBody>
          </GoldRewards>
          <Diamond>
            <ImageInner>
              <DiamondImg src={diamond} alt="diamond-reward-image" />
            </ImageInner>
            <DiamondText>
              Special diamond award from the platform for contribution to the
              development of <UndasText>UNDAS</UndasText>
            </DiamondText>
          </Diamond>
          <TradingRewards>
            <TradingRewardsTitle>
              Trading Rewards (Trade Turnover)
            </TradingRewardsTitle>
            <Rewards>
              <RewardItem>
                <RewardImgTrading
                  src={dollarReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  1 Grade: Trade turnover of 1 ETH or more
                </TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={bronzeDollarReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  2 Grade: Trade turnover of 10 ETH or more
                </TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={silverDollarReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  3 Grade: Trade turnover of 100 ETH or more
                </TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={goldDollarReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  4 Grade: Trade turnover of 10 000 ETH or more
                </TextRewards>
              </RewardItem>
            </Rewards>
          </TradingRewards>
          <TradingRewards>
            <TradingRewardsTitle>
              NFT Staking Rewards (NFT Staking on The Platform)
            </TradingRewardsTitle>
            <Rewards>
              <RewardItem>
                <RewardImgTrading src={moneyReward} alt="dollar-reward-image" />{" "}
                <TextRewards>1 Grade: Simultaneous Stacking 5 NFT</TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={bronzeMoneyReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>2 Grade: Simultaneous Stacking 50 NFT</TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={silverMoneyReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  3 Grade: Simultaneous Stacking 100 NFT
                </TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={goldMoneyReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  4 Grade: Simultaneous Stacking 250 NFT
                </TextRewards>
              </RewardItem>
            </Rewards>
          </TradingRewards>
          <TradingRewards>
            <TradingRewardsTitle>
              Rental Rewards (Only Counts on Commissions)
            </TradingRewardsTitle>
            <Rewards>
              <RewardItem>
                <RewardImgTrading src={ethReward} alt="dollar-reward-image" />{" "}
                <TextRewards>1 Grade: Rent 1 NFT</TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={bronzeEthReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>2 Grade: Rent 25 NFT</TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={silverEthReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>3 Grade: Rent 100 NFT</TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={goldEthReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>4 Grade: Rent 500 NFT</TextRewards>
              </RewardItem>
            </Rewards>
          </TradingRewards>
          <TradingRewards>
            <TradingRewardsTitle>
              Token Cold Rewards (Holding The Platform Token)
            </TradingRewardsTitle>
            <Rewards>
              <RewardItem>
                <RewardImgTrading src={caseReward} alt="dollar-reward-image" />{" "}
                <TextRewards>
                  1 Grade: A hold of at least 1 000 UND for 30 days
                </TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={bronzeCaseReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  2 Grade: A hold of at least 1 500 UND for 60 days
                </TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={silverCaseReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  3 Grade: A hold of at least 3 000 UND for 90 days
                </TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={goldCaseReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>
                  4 Grade: A hold of at least 10 000 UND for 180 days
                </TextRewards>
              </RewardItem>
            </Rewards>
          </TradingRewards>
          <TradingRewards>
            <TradingRewardsTitle>
              Rewards for Referred User (Dissemination of Referral Links)
            </TradingRewardsTitle>
            <Rewards>
              <RewardItem>
                <RewardImgTrading
                  src={peopleReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>1 Grade: Bringing 1 user to the site</TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={bronzePeopleReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>2 Grade: Bringing 5 user to the site</TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={silverPeopleReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>3 Grade: Bringing 25 user to the site</TextRewards>
              </RewardItem>
              <RewardItem>
                <RewardImgTrading
                  src={goldPeopleReward}
                  alt="dollar-reward-image"
                />{" "}
                <TextRewards>4 Grade: Bringing 50 user to the site</TextRewards>
              </RewardItem>
            </Rewards>
          </TradingRewards>
        </AchievementsWrap>
      </Container>
    </Background>
  );
};

export default Achievements;
