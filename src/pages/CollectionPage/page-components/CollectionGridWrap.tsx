import React from "react";

import NFTGridCollection from "./CollectionGrid/NFTGridCollection";

import { GridLayout } from "../../AllNFTs/AllNFTs.styles";

const CollectionGridWrap: React.FC = () => {
  return (
    <GridLayout>
      <NFTGridCollection tokenId={123} URI={"img"} name={"Return"} />
      <NFTGridCollection tokenId={123} URI={"img"} name={"Return"} />
      <NFTGridCollection tokenId={123} URI={"img"} name={"Return"} />
      <NFTGridCollection tokenId={123} URI={"img"} name={"Return"} />
    </GridLayout>
  );
};

export default CollectionGridWrap;
