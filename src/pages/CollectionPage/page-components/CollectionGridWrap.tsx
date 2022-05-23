import React from "react";

import NFTGridItem from "../../../components/NFTCard/Grid/NFTGridItem";
import { GridLayout } from "../../AllNFTs/AllNFTs.styles";

const CollectionGridWrap: React.FC = () => {
  return (
    <GridLayout>
      <NFTGridItem tokenId={123} URI={"img"} name={"Return"} />
    </GridLayout>
  );
};

export default CollectionGridWrap;
