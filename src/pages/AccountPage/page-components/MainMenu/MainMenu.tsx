import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import { ViewMode } from "../../../../types/viewMode";
import Context from "../../../../utils/Context";
import useViewMode from "../../../../utils/hooks/useViewMode";
import {
  Arrow,
  Filter,
  FilterItem,
  FilterMenu,
  FilterTitle,
  MenuItem,
  MenuSearchWrap,
  MenuWrap,
  SettingsBlock,
  ResultsTotal,
  ContainerFilters,
} from "../../../AllNFTs/AllNFTs.styles";
import NFTListItem from "../../../AllNFTs/page-components/NFTListItem/NFTListItem";
import { Wrapper } from "../../../CategoriesPage/Categories.styles";
import CollectionGridWrap from "../../../CollectionPage/page-components/CollectionGridWrap";
import NoData from "../NoData/NoData";

export interface ItemsProps {
  id: number;
  URI: string;
  name: string;
  tokenAddress: string;
  tokenOwner?: string;
}

interface MainMenuProps {
  nftList: ItemsProps[];
}

const MainMenu: React.FC<MainMenuProps> = ({ nftList }) => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

  const { viewMode, viewButtonsRender } = useViewMode();
  const { account } = useWeb3React();
  const { connector } = useContext(Context);

  const [list, setList] = useState<ItemsProps[]>([]);

  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
  }

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }
    setList(nftList);
  }, [connector, nftList]);

  return (
    <div>
      <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
        <SettingsBlock>
          <>{viewButtonsRender}</>
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
              <MenuItem hover={true}>
                <span>Price: Low to High</span>
              </MenuItem>
              <MenuItem hover={true}>
                <span>Price: High to Low</span>
              </MenuItem>
            </FilterMenu>
          </Filter>
          <Filter className={active.event && "event-active"} disabled>
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
        <MenuSearchWrap mw="530px" marginLeft="0" placeholder="Search" />
        <ResultsTotal>{list.length} results</ResultsTotal>
        <ContainerFilters>
          <FilterSelected />
        </ContainerFilters>
      </MenuWrap>
      <Wrapper marg="0 0 40px 0" w="100%">
      {list && list.length > 0 ? (
        viewMode === ViewMode.grid ? (
          <CollectionGridWrap itemList={list} />
        ) : (
          <>
            {list ? (
              <NFTListItem itemList={list} />
            ) : (
              <span>There are no NFTs on the marketplace</span>
            )}
          </>
        )
      ) : (
        <NoData />
      )}
      </Wrapper>
    </div>
  );
};

export default MainMenu;
