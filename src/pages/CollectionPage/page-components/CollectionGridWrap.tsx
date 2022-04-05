import React, {FC} from 'react'

import {
    GridLayout
} from '../../AllNFTs/AllNFTs.styles'
import NFTGrid from "../../../components/NFTCard/Grid/NFTGrid";

const CollectionGridWrap = () => {
    return (
        <GridLayout>
            <NFTGrid tokenId={123} URI={'img'} name={"Return"} />
        </GridLayout>
    )
}

export default CollectionGridWrap