import React, { useReducer, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import {
  ASideWrap,
  Holder,
  HolderElement,
  ElementText,
  Arrow,
  AccordionArrow,
  AccordionMenu,
  AccordionElement,
  Switch,
  InputSwitch,
  SliderRound,
  CheckboxInputWrapper,
  CheckboxInput,
  CheckboxLabel,
  FilterChainItemWrapper,
  ChainItemIcon,
  ChainItemTitle,
  FilterCategoryItemWrapper,
  CategoryItemTitleIcon,
  FilterCategoryItemTitle,
  CheckboxInputWrapperCentered,
  MobileListWrap,
} from "./ASideFilter.styles";
import { AsideCollectionList, AsidePrice } from "./components";
import FilterMobileButton from "./FilterMobileButton/FilterMobileButton";
import {
  FilterIco,
  StatusIco,
  CategoriesIco,
  ChainsIco,
  EthereumIcon,
} from "./imports";
import { AsideSection } from "./types";

import { PolygonIcon } from "../../pages/AllNFTs/imports";
import { bsc, solana, ton } from "../../pages/CreateNFT/imports";
import {
  buyAction,
  hasOffersAction,
  newAction,
  rentAction,
} from "../../store/reducers/Filter/filterActions";
import { addSelectedCategory } from "../../store/reducers/Filter/filterActions";
import { Category } from "../../types/category";
import { getCategory } from "../../utils/getCategory";

interface CategoryItemProps {
  label: string;
  icon: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, icon }) => {
  const dispatchRedux = useDispatch();

  return (
    <CheckboxLabel htmlFor={label}>
      <FilterCategoryItemWrapper>
        <CheckboxInputWrapperCentered>
          <CheckboxInput
            type="checkbox"
            className="custom-checkbox"
            id={label}
            mr="15px"
            onClick={() => dispatchRedux(addSelectedCategory(icon, label))}
          />
          <CheckboxLabel htmlFor={label} />
        </CheckboxInputWrapperCentered>
        <FilterCategoryItemTitle>
          <CategoryItemTitleIcon src={icon} />
          {label}
        </FilterCategoryItemTitle>
      </FilterCategoryItemWrapper>
    </CheckboxLabel>
  );
};

interface FilterChainItemProps {
  chainName: string;
  chainIcon: string;
  checked?: boolean;
}

const FilterChainItem: React.FC<FilterChainItemProps> = ({
  chainName,
  chainIcon,
  checked,
}) => {
  return (
    <CheckboxLabel>
      <FilterChainItemWrapper>
        <CheckboxInputWrapper mb="-4px">
          <CheckboxInput
            checked={checked}
            type="checkbox"
            className="custom-checkbox"
            id={chainName}
            mr="12px"
          />
          <CheckboxLabel htmlFor={chainName} />
        </CheckboxInputWrapper>
        <ChainItemIcon src={chainIcon} />
        <ChainItemTitle>{chainName}</ChainItemTitle>
      </FilterChainItemWrapper>
    </CheckboxLabel>
  );
};

interface ASideFilterProps {
  marginTop?: string;
  accountPage?: boolean;
  selectedCollections?: any;
  setSelectedCollections?: any;
  newRefs?: any;
  rentRefs?: any;
  buyingRefs?: any;
  hasOffersRefs?: any;
  page?: string;
}

export interface IState {
  status: boolean;
  price: boolean;
  category: boolean;
  collection: boolean;
  chain: boolean;
  menu: boolean;
}

export interface IAction {
  type: string;
  payload: boolean;
}

const initialState: IState = {
  status: false,
  price: false,
  category: false,
  collection: false,
  chain: false,
  menu: true,
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case AsideSection.status:
      return {
        ...state,
        status: action.payload,
      };
    case AsideSection.price:
      return {
        ...state,
        price: action.payload,
      };
    case AsideSection.categories:
      return {
        ...state,
        category: action.payload,
      };
    case AsideSection.collections:
      return {
        ...state,
        collection: action.payload,
      };
    case AsideSection.chains:
      return {
        ...state,
        chain: action.payload,
      };
    case AsideSection.menu:
      return {
        ...state,
        menu: action.payload,
      };
    case AsideSection.reset:
      return {
        status: false,
        price: false,
        category: false,
        collection: false,
        chain: false,
        menu: false,
      };
    default:
      break;
  }
  const result = { ...state };
  result[action.type as keyof typeof initialState] = action.payload;
  return result;
};

const ASideFilter: React.FC<ASideFilterProps> = ({ marginTop, page }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchRedux = useDispatch();
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const handleMobileFilter = () => {
    setIsOpenMobile(!isOpenMobile);
  };

  const newRef: any = useRef();
  const stakingRef: any = useRef();
  const buyingRef: any = useRef();
  const hasOffersRef: any = useRef();
  const createdRef: any = useRef();

  return (
    <>
      <ASideWrap
        className={(state.menu && "active") || ""}
        isOpenMobile={isOpenMobile}
      >
        <Holder marginTop={marginTop}>
          <HolderElement
            isActive={state.menu}
            onClick={() => {
              if (state.menu) {
                dispatch({ type: AsideSection.reset, payload: true });
                return;
              }
              dispatch({ type: AsideSection.menu, payload: !state.menu });
            }}
          >
            <FilterIco />
            <ElementText>Filter</ElementText>
            <Arrow />
          </HolderElement>

          <HolderElement
            onClick={() => {
              if (!state.status) {
                dispatch({ type: AsideSection.menu, payload: true });
              }
              dispatch({ type: AsideSection.status, payload: !state.status });
            }}
            isActive={state.status}
          >
            <StatusIco />
            <ElementText>Status</ElementText>
            <AccordionArrow
              className={(state.status && "active-status") || ""}
            />
          </HolderElement>
          <AccordionMenu
            mh="224px"
            className={(state.status && "active-status") || ""}
          >
            <AccordionElement
              onClick={() => {
                newRef.current.checked = !newRef.current.checked;
                dispatchRedux(newAction(newRef.current.checked));
              }}
            >
              <span>New</span>
              <Switch>
                <InputSwitch type="checkbox" ref={newRef} />
                <SliderRound />
              </Switch>
            </AccordionElement>
            <AccordionElement disabled>
              <span>Staking</span>
              <Switch>
                <InputSwitch type="checkbox" />
                <SliderRound />
              </Switch>
            </AccordionElement>
            <AccordionElement
              onClick={() => {
                buyingRef.current.checked = !buyingRef.current.checked;
                dispatchRedux(buyAction(buyingRef.current.checked));
              }}
            >
              <span>Buy now</span>
              <Switch>
                <InputSwitch type="checkbox" ref={buyingRef} />
                <SliderRound />
              </Switch>
            </AccordionElement>
            {page !== "TopCollection" && (
              <>
                <AccordionElement
                  onClick={() => {
                    stakingRef.current.checked = !stakingRef.current.checked;
                    dispatchRedux(rentAction(stakingRef.current.checked));
                  }}
                >
                  <span>Rent</span>
                  <Switch>
                    <InputSwitch type="checkbox" ref={stakingRef} />
                    <SliderRound />
                  </Switch>
                </AccordionElement>

                <AccordionElement
                  onClick={() => {
                    hasOffersRef.current.checked =
                      !hasOffersRef.current.checked;
                    dispatchRedux(
                      hasOffersAction(hasOffersRef.current.checked),
                    );
                  }}
                >
                  <span>Has Offers</span>
                  <Switch>
                    <InputSwitch type="checkbox" ref={hasOffersRef} />
                    <SliderRound />
                  </Switch>
                </AccordionElement>
                <AccordionElement
                  onClick={() => {
                    createdRef.current.checked = !createdRef.current.checked;
                  }}
                >
                  <span>Created</span>
                  <Switch>
                    <InputSwitch type="checkbox" ref={createdRef} />
                    <SliderRound />
                  </Switch>
                </AccordionElement>
              </>
            )}
          </AccordionMenu>

          {page !== "TopCollection" && (
            <AsidePrice dispatch={dispatch} state={state} />
          )}

          {page !== "Collection" && (
            <>
              <HolderElement
                onClick={() => {
                  if (!state.category) {
                    dispatch({ type: AsideSection.menu, payload: true });
                  }
                  dispatch({
                    type: AsideSection.categories,
                    payload: !state.category,
                  });
                }}
                isActive={state.category}
              >
                <CategoriesIco />
                <ElementText>Categories</ElementText>
                <AccordionArrow
                  className={(state.category && "active-category") || ""}
                />
              </HolderElement>
              <AccordionMenu
                backgroundColor="rgba(251, 245, 255, 0.7)"
                mh={`${60 + 8 * 60}px`} // calculate max-height because of accordion animation bug
                className={(state.category && "active-category") || ""}
              >
                <MobileListWrap>
                  <CategoryItem {...getCategory(Category.artwork)} />
                  <CategoryItem {...getCategory(Category.sport)} />
                  <CategoryItem {...getCategory(Category.photography)} />
                  <CategoryItem {...getCategory(Category.gamefi)} />
                  <CategoryItem {...getCategory(Category.celebrity)} />
                  <CategoryItem {...getCategory(Category.rwaNFTLong)} />
                  <CategoryItem {...getCategory(Category.plus18)} />
                </MobileListWrap>
              </AccordionMenu>
            </>
          )}

          {page !== "TopCollection" && page !== "Collection" && (
            <AsideCollectionList dispatch={dispatch} state={state} />
          )}

          {page !== "Collection" && (
            <>
              <HolderElement
                onClick={() => {
                  if (!state.chain) {
                    dispatch({ type: AsideSection.menu, payload: true });
                  }
                  dispatch({
                    type: AsideSection.chains,
                    payload: !state.chain,
                  });
                }}
                isActive={state.chain}
              >
                <ChainsIco />
                <ElementText>Chains</ElementText>
                <AccordionArrow
                  className={(state.chain && "active-chains") || ""}
                />
              </HolderElement>
              <AccordionMenu
                backgroundColor="rgba(251, 245, 255, 0.7)"
                pb="15px"
                pt={state.chain ? "7px" : "0"}
                mh="320px" // calculate max-height because of accordion animation bug
                className={(state.chain && "active-chains") || ""}
              >
                <AccordionElement padd="0">
                  <FilterChainItem
                    chainName={"Ethereum"}
                    chainIcon={EthereumIcon}
                    checked
                  />
                </AccordionElement>
                <AccordionElement padd="1" disabled>
                  <FilterChainItem
                    chainName={"Polygon"}
                    chainIcon={PolygonIcon}
                  />
                </AccordionElement>
                <AccordionElement padd="2" disabled>
                  <FilterChainItem chainName={"Solana"} chainIcon={solana} />
                </AccordionElement>
                <AccordionElement padd="3" disabled>
                  <FilterChainItem chainName={"BSC"} chainIcon={bsc} />
                </AccordionElement>
                <AccordionElement padd="4" disabled>
                  <FilterChainItem chainName={"TON"} chainIcon={ton} />
                </AccordionElement>
              </AccordionMenu>
            </>
          )}
        </Holder>
      </ASideWrap>
      <FilterMobileButton onClick={handleMobileFilter} />
    </>
  );
};

export default ASideFilter;
