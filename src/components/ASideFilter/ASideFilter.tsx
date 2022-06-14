import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  SearchInput,
  SearchInputIco,
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
} from "./ASideFilter.styles";
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

import { filterAction } from "../../store/reducers/stackingReducer";
import { Category } from "../../types/category";
import { getCategory } from "../../utils/getCategory";
import FilterMobileButton from "./FilterMobileButton/FilterMobileButton";
import { addSelectedCollection } from "../../store/reducers/Filter/filterActions";

interface CategoryItemProps {
  label: string;
  icon: string;
  setCategory?: any;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, icon }) => {
  return (
    <FilterCategoryItemWrapper>
      <CheckboxInputWrapperCentered>
        <CheckboxInput
          type="checkbox"
          className="custom-checkbox"
          id={label}
          mr="15px"
        />
        <CheckboxLabel htmlFor={label} />
      </CheckboxInputWrapperCentered>
      <FilterCategoryItemTitle>
        <CategoryItemTitleIcon src={icon} />
        {label}
      </FilterCategoryItemTitle>
    </FilterCategoryItemWrapper>
  );
};

interface FilterCollectionItemProps {
  collectionIcon: string;
  collectionName: string;
  vol?: number | string;
  isVerified: boolean;
  floor?: number | string;
  handleCollectionChoose?: any;
}

const FilterCollectionItem: React.FC<FilterCollectionItemProps> = ({
  collectionIcon,
  collectionName,
  isVerified,
  handleCollectionChoose,
}) => {
  const [longName, setLongName] = useState<string>("");

  const handleCollectionName = (name: string, verify: boolean) => {
    if (name.length > 9 && verify === true) {
      const trunced = collectionName.slice(0, 8) + "...";
      setLongName(trunced);
      return;
    }

    setLongName(name);
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
              handleCollectionChoose(collectionIcon, collectionName)
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
}

const ASideFilter: React.FC<ASideFilterProps> = ({
  marginTop,
  accountPage,
  selectedCollections,
  setSelectedCollections,
}) => {
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

  const [collectionList, setCollectionList] = useState<
    FilterCollectionItemProps[]
  >([
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

  const handleCollectionChoose = (
    collectionIcon: string,
    collectionName: string,
  ) => {
    dispatch(addSelectedCollection(collectionIcon, collectionName));
    console.log(setSelectedCollections, {
      collectionIcon,
      collectionName,
    });
    setSelectedCollections(...selectedCollections, {
      collectionIcon,
      collectionName,
    });
  };

  const newRef: any = useRef();
  const stakingRef: any = useRef();
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

          {!accountPage && (
            <>
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
                mh="146px"
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
                <AccordionElement
                  onClick={() => {
                    stakingRef.current.checked = !stakingRef.current.checked;
                    dispatch(filterAction(stakingRef.current.checked));
                  }}
                >
                  <span>Staking</span>
                  <Switch>
                    <InputSwitch type="checkbox" ref={stakingRef} />
                    <SliderRound />
                  </Switch>
                </AccordionElement>
                <AccordionElement>
                  <span>Rent</span>
                  <Switch>
                    <InputSwitch type="checkbox" />
                    <SliderRound />
                  </Switch>
                </AccordionElement>
                <AccordionElement>
                  <span>Has Offers</span>
                  <Switch>
                    <InputSwitch type="checkbox" />
                    <SliderRound />
                  </Switch>
                </AccordionElement>
              </AccordionMenu>
            </>
          )}

          {!accountPage && (
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
                            className={(priceMenu && "price-menu-active") || ""}
                          />
                        </PriceElement>
                      );
                  })}
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
                  <ApplyBtn>Apply</ApplyBtn>
                </AccordionElement>
              </AccordionMenu>
            </>
          )}

          {!accountPage && (
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
                <CategoryItem {...getCategory(Category.allNFTs)} />
                <CategoryItem {...getCategory(Category.new)} />
                <CategoryItem {...getCategory(Category.artwork)} />
                <CategoryItem {...getCategory(Category.sport)} />
                <CategoryItem {...getCategory(Category.photography)} />
                <CategoryItem {...getCategory(Category.metaverses)} />
                <CategoryItem {...getCategory(Category.celebrity)} />
                <CategoryItem {...getCategory(Category.rwaNFTLong)} />
              </AccordionMenu>
            </>
          )}

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
              <SearchInputWrapper>
                <SearchInputIco />
                <SearchInput
                  placeholder="Search"
                  onChange={handleCollectionSearch}
                />
              </SearchInputWrapper>
            </AccordionElement>
            <>
              {filteredCollectionList.map((item: any) => {
                return (
                  <FilterCollectionItem
                    key={`${item.collectionName}-${item.collectionIcon}`}
                    collectionName={item.collectionName}
                    collectionIcon={item.collectionIcon}
                    isVerified={item.isVerified}
                    handleCollectionChoose={handleCollectionChoose}
                  />
                );
              })}
            </>
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
            mh={`${60 + 3 * 60}px`} // calculate max-height because of accordion animation bug
            className={(activeMenu.chain && "active-chains") || ""}
          >
            <AccordionElement padd="0">
              <FilterChainItem
                chainName={"Ethereum"}
                chainIcon={EthereumIcon}
              />
            </AccordionElement>
          </AccordionMenu>
        </Holder>
      </ASideWrap>
      <FilterMobileButton onClick={handleMobileFilter} />
    </>
  );
};

export default ASideFilter;
