import React, { useRef, useState } from "react";
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
  PriceSelect,
  PriceElement,
  ApplyBtn,
  PriceVariations,
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
  InputBlock,
  MinPrice,
  PriceContainer,
  InputPriceContainer,
  ApplyButton,
  ButtonContainer,
} from "./ASideFilter.styles";
import { AsideCollectionList } from "./components";
import FilterMobileButton from "./FilterMobileButton/FilterMobileButton";
import {
  FilterIco,
  StatusIco,
  PriceIco,
  UsdIco,
  EthIco,
  CategoriesIco,
  ChainsIco,
  EthereumIcon,
} from "./imports";

import { PolygonIcon } from "../../pages/AllNFTs/imports";
import { bsc, solana, ton } from "../../pages/CreateNFT/imports";
import {
  buyAction,
  hasOffersAction,
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
  const dispatch = useDispatch();

  return (
    <CheckboxLabel htmlFor={label}>
      <FilterCategoryItemWrapper>
        <CheckboxInputWrapperCentered>
          <CheckboxInput
            type="checkbox"
            className="custom-checkbox"
            id={label}
            mr="15px"
            onClick={() => dispatch(addSelectedCategory(icon, label))}
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
}

const FilterChainItem: React.FC<FilterChainItemProps> = ({
  chainName,
  chainIcon,
}) => {
  return (
    <CheckboxLabel>
      <FilterChainItemWrapper>
        <CheckboxInputWrapper mb="-4px">
          <CheckboxInput
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

const ASideFilter: React.FC<ASideFilterProps> = ({ marginTop, page }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState<any>({
    status: false,
    price: false,
    category: false,
    collection: false,
    chain: false,
  });
  const [priceMenu, setPriceMenu] = useState<boolean>(false);
  const [priceCurrency, setPriceCurrency] = useState([
    {
      currency: "eth",
      text: "Ether (ETH)",
      ico: <EthIco />,
      selected: true,
    },
    {
      currency: "usd",
      text: "United States Dollar (USD)",
      ico: <UsdIco />,
      selected: false,
    },
  ]);

  const variations = priceCurrency.filter((element) => {
    if (!element.selected) {
      return true;
    }
  });

  const currencySelector = (currencyItem: any) => {
    setPriceCurrency((prev) =>
      prev.map((item) => {
        if (currencyItem.currency !== item.currency) {
          item.selected = false;
        }
        if (currencyItem.currency === item.currency) {
          item.selected = true;
        }
        return { ...item };
      }),
    );
  };

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
        className={(active && "active") || ""}
        isOpenMobile={isOpenMobile}
      >
        <Holder marginTop={marginTop}>
          <HolderElement
            isActive={active}
            onClick={() => {
              !active && setActive(true);
              if (active) {
                setActiveMenu({
                  status: false,
                  price: false,
                  category: false,
                  collection: false,
                  chain: false,
                });
                setActive(false);
              }
            }}
          >
            <FilterIco />
            <ElementText>Filter</ElementText>
            <Arrow />
          </HolderElement>

          <HolderElement
            onClick={() => {
              if (!activeMenu.status) {
                setActiveMenu({ status: true });
                !active && setActive(true);
              } else setActiveMenu({ status: false });
            }}
          >
            <StatusIco />
            <ElementText>Status</ElementText>
            <AccordionArrow
              className={(activeMenu.status && "active-status") || ""}
            />
          </HolderElement>
          <AccordionMenu
            mh="224px"
            className={(activeMenu.status && "active-status") || ""}
          >
            <AccordionElement
              onClick={() => {
                newRef.current.checked = !newRef.current.checked;
              }}
            >
              <span>New</span>
              <Switch>
                <InputSwitch type="checkbox" ref={newRef} />
                <SliderRound />
              </Switch>
            </AccordionElement>
            <AccordionElement>
              <span>Staking</span>
              <Switch>
                <InputSwitch type="checkbox" />
                <SliderRound />
              </Switch>
            </AccordionElement>
            <AccordionElement
              onClick={() => {
                buyingRef.current.checked = !buyingRef.current.checked;
                dispatch(buyAction(buyingRef.current.checked));
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
                    dispatch(rentAction(stakingRef.current.checked));
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
                    dispatch(hasOffersAction(hasOffersRef.current.checked));
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
            <>
              <HolderElement
                onClick={() => {
                  if (!activeMenu.price) {
                    setActiveMenu({ price: true });
                    !active && setActive(true);
                  } else setActiveMenu({ price: false });
                }}
              >
                <PriceIco />
                <ElementText>Price</ElementText>
                <AccordionArrow
                  className={(activeMenu.price && "active-price") || ""}
                />
              </HolderElement>
              <AccordionMenu
                mh="178px"
                className={(activeMenu.price && "active-price") || ""}
              >
                <AccordionElement padd="15px 15px 20px 15px" direction="column">
                  {priceCurrency.map((item) => {
                    if (item.selected)
                      return (
                        <PriceContainer>
                          <PriceElement
                            className={(priceMenu && "price-menu-active") || ""}
                            onClick={() => {
                              !priceMenu
                                ? setPriceMenu(true)
                                : setPriceMenu(false);
                            }}
                          >
                            {item.ico}
                            <span>{item.text}</span>
                            <AccordionArrow
                              className={
                                (priceMenu && "price-menu-active") || ""
                              }
                            />
                            <PriceSelect
                              className={
                                (priceMenu && "price-menu-active") || ""
                              }
                            >
                              {variations.map((item) => {
                                return (
                                  <PriceVariations
                                    key={item.text}
                                    onClick={() => {
                                      currencySelector(item);
                                    }}
                                  >
                                    {item.ico}
                                    <span>{item.text}</span>
                                  </PriceVariations>
                                );
                              })}
                            </PriceSelect>
                          </PriceElement>
                          <InputPriceContainer>
                            <InputBlock>
                              <MinPrice
                                type="number"
                                id="min"
                                placeholder="Min"
                                min="0"
                              />
                            </InputBlock>
                            <InputBlock className="margin-left">
                              <MinPrice
                                type="number"
                                id="max"
                                placeholder="Max"
                                min="0"
                              />
                            </InputBlock>
                          </InputPriceContainer>
                          <ButtonContainer>
                            <ApplyButton>Apply</ApplyButton>
                          </ButtonContainer>
                        </PriceContainer>
                      );
                  })}

                  <ApplyBtn>Apply</ApplyBtn>
                </AccordionElement>
              </AccordionMenu>
            </>
          )}

          {page !== "Collection" && (
            <>
              <HolderElement
                onClick={() => {
                  if (!activeMenu.category) {
                    setActiveMenu({ category: true });
                    !active && setActive(true);
                  } else setActiveMenu({ category: false });
                }}
                isActive={activeMenu.category}
              >
                <CategoriesIco />
                <ElementText>Categories</ElementText>
                <AccordionArrow
                  className={(activeMenu.category && "active-category") || ""}
                />
              </HolderElement>
              <AccordionMenu
                backgroundColor="rgba(251, 245, 255, 0.7)"
                mh={`${60 + 8 * 60}px`} // calculate max-height because of accordion animation bug
                className={(activeMenu.category && "active-category") || ""}
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
            <AsideCollectionList
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              active={active}
              setActive={setActive}
            />
          )}

          {page !== "Collection" && (
            <>
              <HolderElement
                onClick={() => {
                  if (!activeMenu.chain) {
                    setActiveMenu({ chain: true });
                    !active && setActive(true);
                  } else setActiveMenu({ chain: false });
                }}
                isActive={activeMenu.chain}
              >
                <ChainsIco />
                <ElementText>Chains</ElementText>
                <AccordionArrow
                  className={(activeMenu.chain && "active-chains") || ""}
                />
              </HolderElement>
              <AccordionMenu
                backgroundColor="rgba(251, 245, 255, 0.7)"
                pb="15px"
                mh="320px" // calculate max-height because of accordion animation bug
                className={(activeMenu.chain && "active-chains") || ""}
              >
                <AccordionElement padd="0">
                  <FilterChainItem
                    chainName={"Ethereum"}
                    chainIcon={EthereumIcon}
                  />
                </AccordionElement>
                <AccordionElement padd="1">
                  <FilterChainItem
                    chainName={"Polygon"}
                    chainIcon={PolygonIcon}
                  />
                </AccordionElement>
                <AccordionElement padd="2">
                  <FilterChainItem chainName={"Solana"} chainIcon={solana} />
                </AccordionElement>
                <AccordionElement padd="3">
                  <FilterChainItem chainName={"BSC"} chainIcon={bsc} />
                </AccordionElement>
                <AccordionElement padd="4">
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
