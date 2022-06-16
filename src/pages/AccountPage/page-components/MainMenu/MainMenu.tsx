import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

import nft0 from "../../../../images/temp-nft-examples/nft-exp-0.png";
import nft1 from "../../../../images/temp-nft-examples/nft-exp-1.png";
import nft10 from "../../../../images/temp-nft-examples/nft-exp-10.png";
import nft11 from "../../../../images/temp-nft-examples/nft-exp-11.png";
import nft2 from "../../../../images/temp-nft-examples/nft-exp-2.png";
import nft3 from "../../../../images/temp-nft-examples/nft-exp-3.png";
import nft4 from "../../../../images/temp-nft-examples/nft-exp-4.png";
import nft5 from "../../../../images/temp-nft-examples/nft-exp-5.png";
import nft6 from "../../../../images/temp-nft-examples/nft-exp-6.png";
import nft7 from "../../../../images/temp-nft-examples/nft-exp-7.png";
import nft8 from "../../../../images/temp-nft-examples/nft-exp-8.png";
import nft9 from "../../../../images/temp-nft-examples/nft-exp-9.png";
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
} from "../../../AllNFTs/AllNFTs.styles";
import NFTListItem from "../../../AllNFTs/page-components/NFTListItem/NFTListItem";
import CollectionGridWrap from "../../../CollectionPage/page-components/CollectionGridWrap";
import { ethers } from "ethers";
import { useMoralisWeb3Api } from "react-moralis";

export interface ItemsProps {
  id: number;
  URI: string;
  name: string;
  tokenAddress:string;
  tokenOwner?:string;
}

const MainMenu: React.FC = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

  const { viewMode, viewButtonsRender } = useViewMode();
  const { account } = useWeb3React();
  const { connector } = useContext(Context);
  const { Moralis } = useMoralis();

  const Web3Api = useMoralisWeb3Api();

  async function fetchData() {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const signerPublicAddress = await signer.getAddress();
    


    const data = await Web3Api.Web3API.account.getNFTs({
      chain: "goerli",
      address: signerPublicAddress,
    });
    console.log('data',data)
    return data.result;
  }
  const items: ItemsProps[] = [];
  const [list, setList] = useState<ItemsProps[]>([]);

  async function getNfts() {
 
    const nfts = await fetchData();

    if (!nfts) return;
    nfts.map((nft: any) => {
      const name = nft.name;
      const URI = nft.token_uri;
      const id = nft.token_id;
      const tokenAddress = nft.token_address;
      const tokenOwner = nft.owner_of;
      //query here
      console.log(nft)
      items.push({ id, URI, name,tokenAddress,tokenOwner });
    });
    return items;
  }
  console.log('my collection',list)
  async function getUserNft() {
    const response = await getNfts();

    if (response) {
      setList(response);
    }
  }
  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
  }
  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    getUserNft();
  }, [connector]);
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
        <MenuSearchWrap mw="530px" marginLeft="0" placeholder="Search" />
        <ResultsTotal>12 results</ResultsTotal>
      </MenuWrap>
      {viewMode === ViewMode.grid ? (
                <CollectionGridWrap itemList={list} />
              ) : (
                <>
                  {list.map((item) => {
                    return (
                      <NFTListItem
                        key={item.id}
                        name={item.name}
                        URI={item.URI}
                      />
                    );
                  })}
                </>
              )}
    </div>
  );
};

export default MainMenu;
