import React, { useEffect, useRef, useState } from "react";
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
  SearchInputWrapper,
  FilterCollectionItemWrapper,
  CheckboxInputWrapper,
  CheckboxInput,
  CheckboxLabel,
  FilterCollectionItemTitle,
  CollectionItemTitleIcon,
  CollectionItemTitleName,
  CollectiomItemTitleVol,
  CollectionItemVerifyWrapper,
  CollectionItemVerify,
  CollectionItemVerifyIcon,
  CollectionItemVerifyText,
  CollectionItemVerifyFloor,
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
import FilterMobileButton from "./FilterMobileButton/FilterMobileButton";
import {
  FilterIco,
  StatusIco,
  PriceIco,
  UsdIco,
  EthIco,
  CategoriesIco,
  CollectionsIco,
  CollectionItemIco,
  VerifyIcon,
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
import {
  addSelectedCategory,
  addSelectedCollection,
} from "../../store/reducers/Filter/filterActions";
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

interface FilterCollectionItemProps {
  collectionIcon: string;
  collectionName: string;
  vol?: number | string;
  isVerified: boolean;
  floor?: number | string;
}

const FilterCollectionItem: React.FC<FilterCollectionItemProps> = ({
  collectionIcon,
  collectionName,
  isVerified,
}) => {
  const dispatch = useDispatch();
  const [longName, setLongName] = useState<string>("");
  const handleCollectionName = (name: string, verify: boolean) => {
    if (name.length > 9 && verify === true) {
      const trunced = collectionName.slice(0, 8) + "...";
      setLongName(trunced);
    } else {
      setLongName(name);
    }
  };

  useEffect(() => {
    handleCollectionName(collectionName, isVerified);
  }, []);

  return (
    <CheckboxLabel>
      <FilterCollectionItemWrapper>
        <CheckboxInputWrapper mb="12px">
          <CheckboxInput
            type="checkbox"
            className="custom-checkbox"
            id={collectionName}
            mr="15px"
            onClick={() =>
              dispatch(addSelectedCollection(collectionIcon, collectionName))
            }
          />
          <CheckboxLabel htmlFor={collectionName} />
        </CheckboxInputWrapper>
        <FilterCollectionItemTitle>
          <CollectionItemTitleName>
            <CollectionItemTitleIcon src={collectionIcon} />
            {longName}
          </CollectionItemTitleName>
          <CollectiomItemTitleVol>Vol=87,017,06</CollectiomItemTitleVol>
        </FilterCollectionItemTitle>
        {isVerified && (
          <CollectionItemVerifyWrapper>
            <CollectionItemVerify>
              <CollectionItemVerifyIcon src={VerifyIcon} />
              <CollectionItemVerifyText>UND</CollectionItemVerifyText>
            </CollectionItemVerify>
            <CollectionItemVerifyFloor>Floor=896</CollectionItemVerifyFloor>
          </CollectionItemVerifyWrapper>
        )}
      </FilterCollectionItemWrapper>
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
    <FilterChainItemWrapper>
      <CheckboxInputWrapper mb="0">
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
}

const ASideFilter: React.FC<ASideFilterProps> = ({ marginTop }) => {
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

  const [collectionList] = useState<FilterCollectionItemProps[]>([
    {
      collectionIcon: CollectionItemIco,
      collectionName: "Borya Borya",
      isVerified: true,
    },
    {
      collectionIcon: CollectionItemIco,
      collectionName: "Azuki",
      isVerified: true,
    },
    {
      collectionIcon: CollectionItemIco,
      collectionName: "Bored Ape",
      isVerified: false,
    },
  ]);
  const [filteredCollectionList, setFilteredCollectionList] =
    useState(collectionList);

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

  const handleCollectionSearch = (event: any) => {
    const pattern: string = event?.target.value;
    const searchResult = collectionList.filter((collection) =>
      collection.collectionName
        .toLowerCase()
        .includes(pattern.toLocaleLowerCase()),
    );
    setFilteredCollectionList(searchResult);
  };

  const newRef: any = useRef();
  const stakingRef: any = useRef();
  const buyingRef: any = useRef();
  const hasOffersRef: any = useRef();
  const createdRef: any  = useRef();
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
                hasOffersRef.current.checked = !hasOffersRef.current.checked;
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
          </AccordionMenu>

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
                          !priceMenu ? setPriceMenu(true) : setPriceMenu(false);
                        }}
                      >
                        {item.ico}
                        <span>{item.text}</span>
                        <AccordionArrow
                          className={(priceMenu && "price-menu-active") || ""}
                        />
                        <PriceSelect
                          className={(priceMenu && "price-menu-active") || ""}
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
                          <MinPrice type="number" id="min" placeholder="Min" />
                        </InputBlock>
                        <InputBlock className="margin-left">
                          <MinPrice type="number" id="max" placeholder="Max" />
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
              <CategoryItem {...getCategory(Category.allNFTs)} />
              <CategoryItem {...getCategory(Category.new)} />
              <CategoryItem {...getCategory(Category.artwork)} />
              <CategoryItem {...getCategory(Category.sport)} />
              <CategoryItem {...getCategory(Category.photography)} />
              <CategoryItem {...getCategory(Category.gamefi)} />
              <CategoryItem {...getCategory(Category.celebrity)} />
              <CategoryItem {...getCategory(Category.rwaNFTLong)} />
              <CategoryItem {...getCategory(Category.plus18)} />
            </MobileListWrap>
          </AccordionMenu>

          <HolderElement
            onClick={() => {
              if (!activeMenu.collection) {
                setActiveMenu({ collection: true });
                !active && setActive(true);
              } else setActiveMenu({ collection: false });
            }}
            isActive={activeMenu.collection}
          >
            <CollectionsIco />
            <ElementText>Collections</ElementText>
            <AccordionArrow
              className={(activeMenu.collection && "active-collection") || ""}
            />
          </HolderElement>
          <AccordionMenu
            backgroundColor="rgba(251, 245, 255, 0.7)"
            mh={`${60 + 3 * 60}px`} // calculate max-height because of accordion animation bug
            className={(activeMenu.collection && "active-collection") || ""}
          >
            <AccordionElement padd="20px 15px 0 15px">
              <SearchInputWrapper
                placeholder="Search"
                onChange={handleCollectionSearch}
              />
            </AccordionElement>
            <MobileListWrap>
              {filteredCollectionList.map((item: any) => {
                return (
                  <FilterCollectionItem
                    key={`${item.collectionName}-${item.collectionIcon}`}
                    collectionName={item.collectionName}
                    collectionIcon={item.collectionIcon}
                    isVerified={item.isVerified}
                  />
                );
              })}
            </MobileListWrap>
          </AccordionMenu>

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
              <FilterChainItem chainName={"Polygon"} chainIcon={PolygonIcon} />
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
        </Holder>
      </ASideWrap>
      <FilterMobileButton onClick={handleMobileFilter} />
    </>
  );
};

export default ASideFilter;
