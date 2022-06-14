import React from "react";

import NFTGridItem from "../../../components/NFTCard/Grid/NFTGridItem";
import { GridLayout } from "../../AllNFTs/AllNFTs.styles";

type GridItem = {
  id: number;
  URI: string;
  name: string;
  priceInNum?: number;
  premiumInNum?: number;
  colloteralWei?: number;
  stakingId?:number;
  listingId?:number;
  tokenAddress?:string;
  tokenOwner?:string;
};
interface CollectionGridWrapperProps {
  itemList: GridItem[];
}

const CollectionGridWrap: React.FC<CollectionGridWrapperProps> = ({
  itemList,
}) => {
  console.log('itemList',itemList)
  return (
    <GridLayout>
      {itemList.map((item: GridItem) => {
        return (
          <NFTGridItem
            key={item.name + item.id + item.URI}
            tokenId={+item.id}
            URI={item.URI}
            name={item.name}
            price={item.priceInNum}
            premium={item.premiumInNum}
            colloteralWei={item.colloteralWei}
            stakingId = {item.stakingId}
            listingId = {item.listingId}
            tokenAddress ={ item.tokenAddress}
            tokenOwner = {item.tokenOwner}
          />
        );
      })}
    </GridLayout>
  );
};

export default CollectionGridWrap;
