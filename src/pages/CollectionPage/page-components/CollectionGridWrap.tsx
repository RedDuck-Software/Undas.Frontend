import React from 'react';

import NFTGrid from '../../../components/NFTCard/Grid/NFTGrid';
import { GridLayout } from '../../AllNFTs/AllNFTs.styles';

const CollectionGridWrap: React.FC = () => {
  return (
    <GridLayout>
      <NFTGrid tokenId={123} URI={'img'} name={'Return'} />
    </GridLayout>
  );
};

export default CollectionGridWrap;
