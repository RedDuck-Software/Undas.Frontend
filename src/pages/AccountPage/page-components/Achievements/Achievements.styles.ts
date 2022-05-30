import styled from "styled-components";

export const AchievementsWrap = styled.div``;

export const AchievementsHeadInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width:992px) {
    flex-direction: column;
  }
`;

export const AchievementsTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  @media (max-width:992px) {
    margin-bottom: 15px;
  }
`;
export const InfoText = styled.p`
  background: #fbf5ff;
  box-shadow: 0px 4px 10px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  max-width: 500px;
  max-height: 100px;
  overflow-y: auto;
  padding: 20px;
  margin-bottom: 0;
  @media (max-width:768px) {
    max-width: 100%;
  }
`;
export const PurpleRewards = styled.div`
  filter: drop-shadow(0px 15px 15px #873dc1);
  box-shadow: inset 0px 0px 1px #7c7c7c;
  border-radius: 10px 10px 10px 10px;
  background: #ffffff;
  margin-top: 40px;
`;
export const PurpleRewardsTitle = styled.div`
  background: #ccb7f2;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  border-radius: 10px 10px 0px 0px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #232428;
  padding: 15px;
  @media (max-width: 768px){
    font-size: 16px;
    line-height: 20px;
  }
`;
export const RewardsBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 992px){
    flex-direction: column;
  }
`;
export const RewardsDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 0;
  flex: 0 0 30%;
  @media (max-width: 992px){
    text-align: center;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 768px){
    font-size: 14px;
    line-height: 17px;
  }
`;
export const ImagesBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 60%;
  @media (max-width: 992px){
    justify-content: space-around;
    width: 100%;
  }
`;
export const RewardImg = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 992px){
    width: 80px;
    height: 80px;
  }
  @media (max-width: 768px){
    width: 60px;
    height: 60px;
  }
  @media (max-width: 576px){
    width: 40px;
    height: 40px;
  }
`;
export const BronzeRewards = styled(PurpleRewards)`
  filter: drop-shadow(0px 15px 15px #cd7f32);
  box-shadow: inset 0px 0px 1px #cd7f32;
`;
export const BronzeRewardsTitle = styled(PurpleRewardsTitle)`
  background: #cd7f32;
  box-shadow: inset 0px 0px 1px #cd7f32;
`;
export const SilverRewards = styled(PurpleRewards)`
  filter: drop-shadow(0px 15px 15px #c0c0c0);
  box-shadow: inset 0px 0px 1px #c0c0c0;
`;
export const SilverRewardsTitle = styled(PurpleRewardsTitle)`
  background: #c0c0c0;
  box-shadow: inset 0px 0px 1px #c0c0c0;
`;
export const GoldRewards = styled(PurpleRewards)`
  filter: drop-shadow(0px 15px 15px #ffd700);
  box-shadow: inset 0px 0px 1px #ffd700;
`;
export const GoldRewardsTitle = styled(PurpleRewardsTitle)`
  background: #ffd700;
  box-shadow: inset 0px 0px 1px #ffd700;
`;
export const BackImgSecond = styled.img`
  position: absolute;
  margin-top: 1400px;
  margin-left: -180px;
  z-index: -1;
  max-width: 100%;
`;
export const BackImg = styled.img`
  position: absolute;
  margin-top: 300px;
  margin-left: -180px;
  max-width: 100%;
`;
export const Diamond = styled.div`
  margin-top: 40px;
  height: 120px;
  background: #ccb7f2;
  box-shadow: 0px 0px 10px rgba(135, 61, 193, 0.25), inset 0px 0px 1px #7c7c7c;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
`;
export const ImageInner = styled.div``;
export const DiamondImg = styled.img`
  margin-top: 5px;
  width: 100px;
  height: 100px;
  @media (max-width: 992px){
    width: 80px;
    height: 80px;
  }
  @media (max-width: 768px){
    width: 60px;
    height: 60px;
  }
  @media (max-width: 576px){
    width: 40px;
    height: 40px;
  }
`;
export const DiamondText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-left: 30px;
  @media (max-width: 768px){
  font-size: 16px;
  line-height: 20px;
  }
  @media (max-width: 576px){
  font-size: 14px;
  line-height: 17px;
  }
`;
export const UndasText = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #873dc1;
`;
export const TradingRewards = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0px 0px 1px #7c7c7c;
  border-radius: 10px 10px 10px 10px;
  margin-top: 40px;
`;
export const TradingRewardsTitle = styled.p`
  padding: 15px 30px;
  margin-bottom: 0;
  text-align: left;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  border-radius: 10px 10px 0px 0px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #5d3f92;
  @media (max-width: 576px){
    font-size: 14px;
    line-height: 17px;
    padding: 15px;
  }
`;
export const RewardImgTrading = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 35px;
  @media (max-width: 992px){
    margin-right: 20px;
  }
  @media (max-width: 768px){
    margin-right: 10px;
  }
`;
export const TextRewards = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #7c7c7c;
  margin-top: 5px;
  margin-bottom: 0;
  display: inline-block;
  @media (max-width: 768px){
    font-size: 14px;
    line-height: 17px;
  }
  @media (max-width: 576px){
    font-size: 12px;
    line-height: 15px;
  }
`;
export const Rewards = styled.div`
  margin-left: 265px;
  padding: 20px;
  @media (max-width:992px) {
    margin-left: 10px;
  }
  @media (max-width:768px) {
    margin-left: 0;
    padding: 15px;
  }
`;
export const RewardItem = styled.div`
  @media (max-width:576px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;