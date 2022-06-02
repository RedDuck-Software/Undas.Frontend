import styled from "styled-components";

export const FavouriteSelect = styled.div`
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-width: 400px;
`;
export const FavouriteButton = styled.button`
  cursor: pointer;
  background: #ffffff;
  height: 36px;
  border: none;
  //box-sizing: border-box;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #5d3f92;
  &.favourite-active {
    background-color: #edd2ff;
  }
`;
export const OfferMenuWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-right: 30px;

  @media (max-width: 992px) {
    margin-top: 10px;
  }
  @media (max-width: 576px) {
    margin-top: unset;
    margin-left: unset;
    margin-right: unset;
  }
`;
export const OffersWrapTable = styled.table`
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
  flex: 0 0 100%;
  margin: 20px 0;
`;
export const ItemIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  & .offers-item-image {
    width: 100%;
  }

  @media (max-width: 576px) {
    margin-right: 15px;
  }
`;
export const ItemName = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  margin-right: 5px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const CollectionName = styled.span`
  margin-right: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #7c7c7c;
`;
export const UNDText = styled.span`
  margin-right: 5px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #873dc1;
  position: relative;
  display: flex;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const UND = styled.span`
  position: absolute;
  left: 25px;
  top: 2px;
`;
export const OffersTdText = styled.td`
  padding: 10px 30px;
  position: relative;
  &.offers-table-item {
    display: flex;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
  &.first-column {
    padding: 15px 0 15px 20px;
    width: 3%;
    position: relative;
  }
  &.first-column:hover {
    cursor: pointer;
  }
  &.first-column:hover .offers-tooltip {
    visibility: visible;
    opacity: 1;
  }
`;
export const ActionText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
`;
export const USDPrise = styled.div`
  width: 100%;
  text-alight: right;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: #7c7c7c;

  &::before {
    content: "$";
  }
`;
export const QuantityText = styled.div`
  width: 100%;
  text-align: center;
`;
export const TimeText = styled.div`
  width: 100%;
  text-align: right;
`;
export const PriceTextW = styled.div`
  width: 100%;
  text-align: right;
`;
export const SelectedFilters = styled.div`
  width: 100%;
  margin-top: 20px;
`;
export const Filter = styled.div`
  width: 180px;
  height: 36px;
  background: #fbf5ff;
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  display: inline-block;
`;
export const FilterImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  margin-top: 3px;
  margin-left: 10px;
`;
export const FilterName = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  vertical-align: middle;
  margin-left: 5px;
`;
export const FilterClose = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 40px;
  margin-top: 3px;
`;
export const ClearAll = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  border: none;
  background: transparent;
  margin-left: 15px;

  @media (max-width: 344px) {
    margin-top: 20px;
  }
`;
export const ContainerTable = styled.div`
  overflow-x: scroll;
  width: 100%;
  margin-bottom: 120px;

  @media (max-width: 992px) {
    margin-bottom: 80px;
  }
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;
export const OffersTr = styled.tr`
  padding: 0 30px;
  background: #fbf5ff;
  box-shadow: inset 0 0 1px #7c7c7c;
  &.offers-menu-row {
    background-color: #ffffff;
  }
`;

interface IOffersTd {
  padd?: string;
  textAlign?: string;
}

export const OffersTd = styled.td<IOffersTd>`
  padding: ${(props) => props.padd || "10px 30px"};
  text-align: ${(props) => props.textAlign || ""};
  font-weight: 400;
  font-size: 14px;
  color: #7c7c7c;
  &.first-column {
    padding: 15px 0 15px 20px;
    width: 3%;
  }
  @media (max-width: 992px) {
    padding: 10px 10px 10px 20px;
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
`;
export const OffersHeadTr = styled.tr`
  &.offers-menu-head {
    background-color: #fbf5ff;
  }
`;
export const OffersText = styled.span<{ color?: string }>`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.color || "#7C7C7C"};
  vertical-align: middle;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
