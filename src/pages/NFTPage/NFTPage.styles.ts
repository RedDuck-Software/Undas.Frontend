import styled from "styled-components";

import { Container } from "../../globalStyles";

export const Background = styled.div`
  background-color: white;
`;
// Seller Menu
export const SellerNavigation = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: inset 0px 0px 2px #7c7c7c;
  background-color: #fff;
  display: flex;
  align-items: center;
`;
export const SellerWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`;

export const SellerButton = styled.button`
  width: 160px;
  padding: 10px 0;
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

export const RentSellBtn = styled(SellerButton)`
  cursor: pointer;
  color: #ffffff;
  border: 1px solid #873dc1;
  background: #873dc1;
`;
export const EditBtn = styled(SellerButton)`
  cursor: pointer;
  border: 1px solid #873dc1;
  color: #873dc1;
  background-color: #fff;
`;

// Buy page
export const NFTPageWrap = styled(Container)`
  position: relative;
  overflow: hidden;
  padding-bottom: 120px;
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
  ${Container}
`;

export const OwnerSettingsWrapper = styled.div`
  box-shadow: inset 0px 0px 2px #7c7c7c;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OwnerSettingsNavigation = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > *:first-child {
    margin-right: 30px;
  }
  margin: 0 auto;
  padding: 0.5rem 3rem;

  @media (max-width: 876px) {
    justify-content: center;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 1rem;
    flex-direction: column;
    & > *:first-child {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const OwnerSettingsButton = styled.button<{ isColored?: boolean }>`
  color: ${({ isColored }) => (isColored ? "white" : "#873DC1")};
  background-color: ${({ isColored }) => (isColored ? "#873DC1" : "white")};
  max-width: 160px;
  width: 100%;
  cursor: pointer;
  border: 1px solid #873dc1;
  box-sizing: border-box;
  border-radius: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 14px;
  transition: all 0.3s linear;

  &.colored-btn:hover {
    background-color: #fff;
    color: #873dc1;
  }

  &:hover {
    background-color: #873dc1;
    color: #fff;
  }

  @media (max-width: 876px) {
    max-width: 100%;
    justify-content: center;
  }
`;

export const NavigationWrap = styled.div`
  margin: 80px 0 20px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 992px) {
    margin-top: 40px;
  }
  @media (max-width: 576px) {
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;
export const NameInner = styled.div`
  margin-right: 20px;
  @media (max-width: 576px) {
    order: 2;
  }
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
`;
export const NameNft = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const NameCollection = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
interface IVerifiedIcon {
  w?: string;
}
export const VerifiedIcon = styled.div<IVerifiedIcon>`
  margin: 0 10px;
  width: ${(props) => props.w || "16px"};
  img {
    width: 100%;
  }
`;
interface IPlatform {
  col?: string;
  fs?: string;
  fsxs?: string;
}
export const Platform = styled.strong<IPlatform>`
  font-family: "Jost";
  font-weight: 600;
  font-size: ${(props) => props.fs || "36px"};
  line-height: 44px;
  color: ${(props) => props.col || "#CCB7F2"};
  @media (max-width: 576px) {
    font-size: ${(props) => props.fsxs || "16px"};
    line-height: 20px;
  }
`;
export const NavMenu = styled.ul`
  list-style: none;
  background: #ffffff;
  box-shadow: 0 0 1px #7c7c7c, inset 0 0 1px #7c7c7c;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 576px) {
    order: 1;
    margin-bottom: 15px;
  }
`;
export const NavElement = styled.li`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 6px;
  width: 36px;
  height: 36px;
  box-shadow: 0px 0px 1px #7c7c7c;
  &:hover {
    background-color: #fbf5ff;
  }
`;
export const MainInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  @media (max-width: 992px) {
    flex-wrap: wrap;
    gap: 10px;
  }
  @media (max-width: 768px) {
    gap: 0;
  }
`;
export const ImageWrap = styled.div`
  filter: drop-shadow(0px 5px 5px rgba(124, 124, 124, 0.25));
  border-radius: 10px;
  flex: 0 1 49%;
  position: relative;
  @media (max-width: 1200px) {
  }
  @media (max-width: 992px) {
    flex: 0 0 80%;
    margin: 0 auto;
  }
`;
export const FavouriteCounter = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 10px;
`;
export const CounterNumber = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  margin-left: 5px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const RightSideBlock = styled.div`
  flex: 0 0 48%;
  @media (max-width: 1200px) {
  }
  @media (max-width: 992px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;
export const Info = styled.ul`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  display: flex;
  gap: 20px;
  @media (max-width: 1250px) {
    gap: 10px;
  }
  @media (max-width: 1180px) {
    & .hide {
      display: none;
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 10px;
    justify-content: space-around;
    & .hide {
      display: inline;
    }
  }
  @media (max-width: 620px) {
    & .hide {
      display: none;
    }
  }
`;

export const InfoElement = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const PurpleText = styled.span`
  color: #873dc1;
`;

export const SaleBlock = styled.ul`
  list-style: none;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
`;

export const TopBar = styled.li<{ justifyContent?: string; cursor?: string }>`
  display: flex;
  align-items: center;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  justify-content: ${(props) => props.justifyContent || ""};
  gap: 10px;
  width: 100%;
  background-color: #fff;
  padding: 16px 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  cursor: ${(props) => props.cursor || ""};
`;

export const NotListedWrapper = styled.li`
  padding: 56px 200px;
  font-size: 16px;
  line-height: 20px;
  color: #7c7c7c;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  @media (max-width: 992px) {
    flex-flow: row wrap;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 20px 10px;
  }
`;

export const NotListed = styled.p`
  text-align: center;
  margin-bottom: 0;
`;

export const BuyBar = styled.li`
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  @media (max-width: 992px) {
    flex-flow: row wrap;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 20px 10px;
  }
`;
export const PriceWrap = styled.div`
  margin: 10px 0 20px 0;
  @media (max-width: 992px) {
    margin: 0 0 0 20px;
  }
`;

export const PriceText = styled.span`
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #232428;
  vertical-align: middle;
  margin: 0 10px 0 5px;
  @media (max-width: 576px) {
    margin: 0 3px 0 3px;
    font-size: 14px;
  }
`;

export const PriceInUSD = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #232428;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media (max-width: 992px) {
    flex: 0 0 100%;
    margin-top: 20px;
  }
  @media (max-width: 576px) {
    gap: 10px;
  }
`;

interface IButton {
  bg?: string;
  fc?: string;
  flex?: string;
}

export const InfoButton = styled.button<IButton>`
  cursor: pointer;
  border: 1px solid #873dc1;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
  width: 45%;
  font-size: 14px;
  background-color: ${(props) => props.bg || "#fff"};
  color: ${(props) => props.fc || "#fff"};
  flex: ${(props) => props.flex || ""};
  transition: all 0.3s linear;
  &.colored-btn:hover {
    background-color: #fff;
    color: #873dc1;
  }
  &:hover {
    background-color: #873dc1;
    color: #fff;
  }
  @media (max-width: 576px) {
    width: 50%;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

// Rent Bar

export const RentElement = styled.li<{ h?: string }>`
  gap: 30px;
  height: ${(props) => props.h || "50px"};
  padding: 0 30px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7c7c7c;
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 17px;
    gap: 10px;
    padding: 0 10px;
  }
`;

export const RentalPeriod = styled.input`
  width: 170px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  padding: 10px 36px;
  background: #ffffff;
  box-shadow: inset 0px 0px 5px rgba(124, 124, 124, 0.5);
  border-radius: 10px;
  color: #7c7c7c;
  border: none;
  outline: none;
  &:focus {
    box-shadow: inset 0px 0px 5px rgba(135, 61, 193, 1);
  }
`;

export const SmallAccordionWrap = styled.div`
  display: flex;
`;
