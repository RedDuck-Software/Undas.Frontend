import React from "react";

import NFTGridCollection from "./CollectionGrid/NFTGridCollection";
import { GridLayout } from "../../AllNFTs/AllNFTs.styles";

type GridItem = {
  id: number;
  URI: string;
  name: string;
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
          <NFTGridCollection
            key={item.id}
            tokenId={+item.id}
            URI={item.URI}
            name={item.name}
          />
        );
      })}
    </GridLayout>
  );
};

export default CollectionGridWrap;
