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
        </AchievementsWrap>
    )
}

export default Achievements