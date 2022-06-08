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
};
interface CollectionGridWrapperProps {
  itemList: GridItem[];
}

const CollectionGridWrap: React.FC<CollectionGridWrapperProps> = ({
  itemList,
}) => {
  return (
    <GridLayout>
      {itemList.map((item: GridItem) => {
        return (
          <NFTGridItem
            key={item.id}
            tokenId={+item.id}
            URI={item.URI}
            name={item.name}
            price={item.priceInNum}
            premium={item.premiumInNum}
            colloteralWei={item.colloteralWei}
          />
        );
      })}
    </GridLayout>
  );
};

export default CollectionGridWrap;
