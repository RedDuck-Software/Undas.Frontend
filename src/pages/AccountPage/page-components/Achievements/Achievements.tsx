import React from "react";

import {
    AchievementsWrap,
    AchievementsText,
    InfoText,
    PurpleRewards,
    PurpleRewardsTitle,
    RewardsDiv,
    RewardImg,
    BronzeRewards,
    BronzeRewardsTitle,
    RewardImgBronze,
    SilverRewards,
    SilverRewardsTitle,
    GoldRewards,
    GoldRewardsTitle,
    BackImg,
    Diamond,
    DiamondImg,
    DiamondText,
    UndasText,
    TradingRewards,
    TradingRewardsTitle,
    RewardImgTrading,
    TextRewards,
    TextRewardsFirst,
    Rewards,
    TradingRewardsSecond,
    TradingRewardsLast,
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
    backImg,
    diamond,

} from "../../imports"

const Achievements = () => {
    return (
        <AchievementsWrap>
             <BackImg src={backImg} alt="back-image"/>
            <AchievementsText>Achievements</AchievementsText>
            <InfoText>Each reward gives 1% to the total user rate when distributing tokens for staking and trading volume </InfoText>
            <PurpleRewards>
                <PurpleRewardsTitle>Set of Purple Rewards</PurpleRewardsTitle>
                <RewardsDiv>When you close a set of purple badges - a lifetime discount on all Undas service fees of 1 percent </RewardsDiv>
                <RewardImg src={dollarReward} alt="dollar-reward-image"/>
                <RewardImg src={moneyReward} alt="money-reward-image"/>
                <RewardImg src={ethReward} alt="eth-reward-image"/>
                <RewardImg src={caseReward} alt="bank-reward-image"/>
                <RewardImg src={peopleReward} alt="people-reward-image"/>
            </PurpleRewards>
            <BronzeRewards>
                <BronzeRewardsTitle>Set of Bronze Rewards</BronzeRewardsTitle>
                <RewardsDiv>Lifetime discount on all Undas service commissions of 3 percent, the first five thousand users to close the set receives 500 und </RewardsDiv>
                <RewardImgBronze src={bronzeDollarReward} alt="dollar-reward-image"/>
                <RewardImgBronze src={bronzeMoneyReward} alt="money-reward-image"/>
                <RewardImgBronze src={bronzeEthReward} alt="eth-reward-image"/>
                <RewardImgBronze src={bronzeCaseReward} alt="bank-reward-image"/>
                <RewardImgBronze src={bronzePeopleReward} alt="people-reward-image"/>
            </BronzeRewards>
            <SilverRewards>
                <SilverRewardsTitle>Set of Silver Rewards</SilverRewardsTitle>
                <RewardsDiv>Lifetime discount on all commissions of all Undas services of 6 percent, the first thousand users to close the set receives 1,000 und </RewardsDiv>
                <RewardImgBronze src={silverDollarReward} alt="dollar-reward-image"/>
                <RewardImgBronze src={silverMoneyReward} alt="money-reward-image"/>
                <RewardImgBronze src={silverEthReward} alt="eth-reward-image"/>
                <RewardImgBronze src={silverCaseReward} alt="bank-reward-image"/>
                <RewardImgBronze src={silverPeopleReward} alt="people-reward-image"/>
            </SilverRewards>
            <GoldRewards>
                <GoldRewardsTitle>Set of Gold Rewards</GoldRewardsTitle>
                <RewardsDiv>Lifetime discount on all commissions of all Undas services of 9 percent the first 100 users to close the set receives 10,000 und</RewardsDiv>
                <RewardImgBronze src={goldDollarReward} alt="dollar-reward-image"/>
                <RewardImgBronze src={goldMoneyReward} alt="money-reward-image"/>
                <RewardImgBronze src={goldEthReward} alt="eth-reward-image"/>
                <RewardImgBronze src={goldCaseReward} alt="bank-reward-image"/>
                <RewardImgBronze src={goldPeopleReward} alt="people-reward-image"/>
            </GoldRewards>
            <Diamond>
                <DiamondImg src={diamond} alt="diamond-reward-image"/>
                <DiamondText>Special diamond award from the platform for contribution to the development of</DiamondText>
                <UndasText>UNDAS</UndasText>
            </Diamond>
            <TradingRewards>
                <TradingRewardsTitle>Trading Rewards (Trade Turnover)</TradingRewardsTitle>
                <Rewards>  
                    <RewardImgTrading src={dollarReward} alt="dollar-reward-image"/> <TextRewardsFirst>1 Grade: Trade turnover of 1 ETH or more</TextRewardsFirst><br></br>
                    <RewardImgTrading src={bronzeDollarReward} alt="dollar-reward-image"/> <TextRewards>2 Grade: Trade turnover of 10 ETH or more</TextRewards><br></br>
                    <RewardImgTrading src={silverDollarReward} alt="dollar-reward-image"/> <TextRewards>3 Grade: Trade turnover of 100 ETH or more</TextRewards><br></br>
                    <RewardImgTrading src={goldDollarReward} alt="dollar-reward-image"/> <TextRewards>4 Grade: Trade turnover of 10 000 ETH or more</TextRewards><br></br>
                </Rewards>
            </TradingRewards>
            <TradingRewardsSecond>
                <TradingRewardsTitle>NFT Staking Rewards (NFT Staking on The Platform)</TradingRewardsTitle>
                <Rewards>  
                    <RewardImgTrading src={moneyReward} alt="dollar-reward-image"/> <TextRewardsFirst>1 Grade: Simultaneous Stacking 5 NFT</TextRewardsFirst><br></br>
                    <RewardImgTrading src={bronzeMoneyReward} alt="dollar-reward-image"/> <TextRewards>2 Grade: Simultaneous Stacking 50 NFT</TextRewards><br></br>
                    <RewardImgTrading src={silverMoneyReward} alt="dollar-reward-image"/> <TextRewards>3 Grade: Simultaneous Stacking 100 NFT</TextRewards><br></br>
                    <RewardImgTrading src={goldMoneyReward} alt="dollar-reward-image"/> <TextRewards>4 Grade: Simultaneous Stacking 250 NFT</TextRewards><br></br>
                </Rewards>
            </TradingRewardsSecond>
            <TradingRewardsSecond>
                <TradingRewardsTitle>Rental Rewards (Only Counts on Commissions)</TradingRewardsTitle>
                <Rewards>  
                    <RewardImgTrading src={ethReward} alt="dollar-reward-image"/> <TextRewardsFirst>1 Grade: Rent 1 NFT</TextRewardsFirst><br></br>
                    <RewardImgTrading src={bronzeEthReward} alt="dollar-reward-image"/> <TextRewards>2 Grade: Rent 25 NFT</TextRewards><br></br>
                    <RewardImgTrading src={silverEthReward} alt="dollar-reward-image"/> <TextRewards>3 Grade: Rent 100 NFT</TextRewards><br></br>
                    <RewardImgTrading src={goldEthReward} alt="dollar-reward-image"/> <TextRewards>4 Grade: Rent 500 NFT</TextRewards><br></br>
                </Rewards>
            </TradingRewardsSecond>
            <TradingRewardsSecond>
                <TradingRewardsTitle>Token Cold Rewards (Holding The Platform Token)</TradingRewardsTitle>
                <Rewards>  
                    <RewardImgTrading src={caseReward} alt="dollar-reward-image"/> <TextRewardsFirst>1 Grade: A hold of at least 1 000 UND for 30 days</TextRewardsFirst><br></br>
                    <RewardImgTrading src={bronzeCaseReward} alt="dollar-reward-image"/> <TextRewards>2 Grade: A hold of at least 1 500 UND for 60 days</TextRewards><br></br>
                    <RewardImgTrading src={silverCaseReward} alt="dollar-reward-image"/> <TextRewards>3 Grade: A hold of at least 3 000 UND for 90 days</TextRewards><br></br>
                    <RewardImgTrading src={goldCaseReward} alt="dollar-reward-image"/> <TextRewards>4 Grade: A hold of at least 10 000 UND for 180 days</TextRewards><br></br>
                </Rewards>
            </TradingRewardsSecond>
            <TradingRewardsLast>
                <TradingRewardsTitle>Rewards for Referred User (Dissemination of Referral Links)</TradingRewardsTitle>
                <Rewards>  
                    <RewardImgTrading src={peopleReward} alt="dollar-reward-image"/> <TextRewardsFirst>1 Grade: Bringing 1 user to the site</TextRewardsFirst><br></br>
                    <RewardImgTrading src={bronzePeopleReward} alt="dollar-reward-image"/> <TextRewards>2 Grade: Bringing 5 user to the site</TextRewards><br></br>
                    <RewardImgTrading src={silverPeopleReward} alt="dollar-reward-image"/> <TextRewards>3 Grade: Bringing 25 user to the site</TextRewards><br></br>
                    <RewardImgTrading src={goldPeopleReward} alt="dollar-reward-image"/> <TextRewards>4 Grade: Bringing 50 user to the site</TextRewards><br></br>
                </Rewards>
            </TradingRewardsLast>
        </AchievementsWrap>
    )
}

export default Achievements