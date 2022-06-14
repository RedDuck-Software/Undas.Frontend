import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  AllNFTContainer,
  MenuWrap,
  ResultsTotal,
  SettingsBlock,
  Filter,
  FilterItem,
  MenuItem,
  FilterTitle,
  Arrow,
  FilterMenu,
  SelectedCollectionsList,
  SelectedCollection,
  RemoveSelectedCollection,
  SelectedCollectionsWrapper,
} from "./AllNFTs.styles";
import NFTListItem from "./page-components/NFTListItem/NFTListItem";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import AllGridWrap from "../../components/NFTCard/Grid/AllGridWrap";
import { Background } from "../../globalStyles";
import { useSelectedCollections } from "../../store/reducers/Filter/helpers";
import { ViewMode } from "../../types/viewMode";
import useViewMode from "../../utils/hooks/useViewMode";
import { Wrapper } from "../CategoriesPage/Categories.styles";

import { CloseIcon } from "./imports";
import { removeSelectedCollection } from "../../store/reducers/Filter/filterActions";

interface SelectedCollectionItemProps {
  icon?: string;
  label: string;
  handleUnselect?: any;
}

const SelectedCollectionItem: React.FC<SelectedCollectionItemProps> = ({
  icon,
  label,
  handleUnselect,
}) => {
  return (
    <SelectedCollection>
      <img src={icon} />
      {label}
      <RemoveSelectedCollection
        src={CloseIcon}
        onClick={handleUnselect(label)}
      />
    </SelectedCollection>
  );
};

const AllNFTs: React.FC = () => {
  const dispatch = useDispatch();
  const selector = useSelector(useSelectedCollections);
  useEffect(() => {
    console.log(selector);
  }, [selector]);

  const [results, setResults] = useState<any>();
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });
  useEffect(() => {
    console.log(priceFilter);
  }, [active, priceFilter]);
  const [selectedCollections, setSelectedCollections] = useState(selector);
  const { viewMode, viewButtonsRender } = useViewMode();

  const handleUnselectCollection = (name: string) => {
    dispatch(removeSelectedCollection(name));
  };

  return (
    <Background>
      <AllNFTContainer>
        <ASideFilter
          selectedCollections={selectedCollections}
          setSelectedCollections={setSelectedCollections}
        />
        <Wrapper w="100%" marg="0 0 200px 0">
          {/*rm marg after deploy*/}
          <MenuWrap justifyContent="space-between">
            <SettingsBlock>
              {viewButtonsRender}
              <Filter className={active.price && "price-active"}>
                <FilterItem
                  onClick={() => {
                    if (!active.price) {
                      setActive({ price: true });
                    } else setActive({ price: false });
                  }}
                >
                  <FilterTitle>Sort by Price</FilterTitle>
                  <Arrow className={active.price && "price-active"} />
                </FilterItem>
                <FilterMenu className={active.price && "price-active"}>
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setPriceFilter("low-to-high");
                    }}
                  >
                    <span>Price: Low to High</span>
                  </MenuItem>
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setPriceFilter("high-to-low");
                    }}
                  >
                    <span>Price: High to Low</span>
                  </MenuItem>
                </FilterMenu>
              </Filter>
              <Filter className={active.event && "event-active"}>
                <FilterItem
                  onClick={() => {
                    if (!active.event) {
                      setActive({ event: true });
                    } else setActive({ event: false });
                  }}
                >
                  <FilterTitle>Sort by Event</FilterTitle>
                  <Arrow className={active.event && "event-active"} />
                </FilterItem>
                <FilterMenu className={active.event && "event-active"}>
                  <MenuItem hover={true}>
                    <span>Newly Created</span>
                  </MenuItem>
                  <MenuItem hover={true}>
                    <span>Recently Sold</span>
                  </MenuItem>
                  <MenuItem hover={true}>
                    <span>Recently Posted</span>
                  </MenuItem>
                  <MenuItem hover={true}>
                    <span>Recently Staking</span>
                  </MenuItem>
                </FilterMenu>
              </Filter>
            </SettingsBlock>
            <ResultsTotal>{results}</ResultsTotal>
          </MenuWrap>
          <SelectedCollectionsWrapper>
            <SelectedCollectionsList>
              {selectedCollections &&
                selectedCollections.map((item: any) => {
                  return (
                    <SelectedCollectionItem
                      key={`${item.collectionName}-${item.collectionIcon}`}
                      label={item.collectionName}
                      icon={item.collectionIcon}
                    />
                  );
                })}
            </SelectedCollectionsList>
          </SelectedCollectionsWrapper>
          {viewMode === ViewMode.grid ? (
            <AllGridWrap
              getResults={(amount: any) => setResults(amount)}
              priceFilter={priceFilter}
            />
          ) : (
            <NFTListItem name="item1" />
          )}
        </Wrapper>
      </AllNFTContainer>
    </Background>
  );
};

export default AllNFTs;
