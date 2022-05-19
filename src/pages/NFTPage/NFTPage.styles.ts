import styled from 'styled-components';

import { Container } from '../../globalStyles';

export const Background = styled.div`
  background-color: #e2d1ff;
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
  ${Container}
`;

export const NavigationWrap = styled.div`
  margin: 80px 0 20px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
`;

export const NavMenu = styled.ul`
  list-style: none;
  background: #ffffff;
  box-shadow: 0 0 1px #7c7c7c, inset 0 0 1px #7c7c7c;
  border-radius: 10px;
  overflow: hidden;
`;

export const NavElement = styled.li`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 6px;
  width: 36px;
  height: 36px;
  box-shadow: 0px 0px 1px #7c7c7c;
`;

export const MainInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const ImageWrap = styled.div`
  filter: drop-shadow(0px 5px 5px rgba(124, 124, 124, 0.25));
  border-radius: 10px;
  width: 540px;
  height: 515px;
  @media (max-width: 992px) {
    flex: 0 0 100%;
    height: auto;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  @media (max-width: 992px) {
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
`;

export const TopBar = styled.li<{ justifyContent?: string; cursor?: string }>`
  display: flex;
  align-items: center;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  justify-content: ${(props) => props.justifyContent || ''};
  gap: 10px;
  width: 100%;
  background-color: #fff;
  padding: 16px 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  cursor: ${(props) => props.cursor || ''};
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
`;

export const PriceText = styled.span`
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #232428;
  vertical-align: middle;
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
  padding: 10px 80px;
  font-size: 14px;
  background-color: ${(props) => props.bg || '#fff'};
  color: ${(props) => props.fc || '#fff'};
  flex: ${(props) => props.flex || ''};
`;

// Rent Bar

export const RentElement = styled.li<{ h?: string }>`
  gap: 30px;
  height: ${(props) => props.h || '50px'};
  padding: 0 30px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7c7c7c;
`;

export const RentalPeriod = styled.input`
  width: 170px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  padding: 10px 36px;
  background: #ffffff;
  box-shadow: inset 0px 0px 2px #7c7c7c;
  border-radius: 10px;
  color: #7c7c7c;
  border: none;
`;

export const SmallAccordionWrap = styled.div`
  display: flex;
`;
