import React from "react";

import NFTGridCollection from "./CollectionGrid/NFTGridCollection";

import nft0 from "../../../images/temp-nft-examples/nft-exp-0.png";
import nft1 from "../../../images/temp-nft-examples/nft-exp-1.png";
import nft10 from "../../../images/temp-nft-examples/nft-exp-10.png";
import nft11 from "../../../images/temp-nft-examples/nft-exp-11.png";
import nft2 from "../../../images/temp-nft-examples/nft-exp-2.png";
import nft3 from "../../../images/temp-nft-examples/nft-exp-3.png";
import nft4 from "../../../images/temp-nft-examples/nft-exp-4.png";
import nft5 from "../../../images/temp-nft-examples/nft-exp-5.png";
import nft6 from "../../../images/temp-nft-examples/nft-exp-6.png";
import nft7 from "../../../images/temp-nft-examples/nft-exp-7.png";
import nft8 from "../../../images/temp-nft-examples/nft-exp-8.png";
import nft9 from "../../../images/temp-nft-examples/nft-exp-9.png";
import { GridLayout } from "../../AllNFTs/AllNFTs.styles";

const testNFTList = [
  {
    tokenId: 0,
    tokenURI: nft0,
    name: "Returne by ...",
  },
  {
    tokenId: 1,
    tokenURI: nft1,
    name: "Returne by ...",
  },
  {
    tokenId: 2,
    tokenURI: nft2,
    name: "Returne by ...",
  },
  {
    tokenId: 3,
    tokenURI: nft3,
    name: "Returne by ...",
  },
  {
    tokenId: 4,
    tokenURI: nft4,
    name: "Returne by ...",
  },
  {
    tokenId: 5,
    tokenURI: nft5,
    name: "Returne by ...",
  },
  {
    tokenId: 6,
    tokenURI: nft6,
    name: "Returne by ...",
  },
  {
    tokenId: 7,
    tokenURI: nft7,
    name: "Returne by ...",
  },
  {
    tokenId: 8,
    tokenURI: nft8,
    name: "Returne by ...",
  },
  {
    tokenId: 9,
    tokenURI: nft9,
    name: "Returne by ...",
  },
  {
    tokenId: 10,
    tokenURI: nft10,
    name: "Returne by ...",
  },
  {
    tokenId: 11,
    tokenURI: nft11,
    name: "Returne by ...",
  },
];

const CollectionGridWrap: React.FC = () => {
  return (
    <GridLayout>
      {testNFTList.map(
        (item: { tokenId: React.Key; tokenURI: string; name: string }) => {
          return (
            <NFTGridCollection
              key={item.tokenId}
              tokenId={+item.tokenId}
              URI={item.tokenURI!}
              name={item.name}
            />
          );
        },
      )}
    </GridLayout>
  );
};

export default CollectionGridWrap;
