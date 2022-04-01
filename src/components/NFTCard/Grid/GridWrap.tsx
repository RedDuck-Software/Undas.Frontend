import React, {FC} from 'react'
import {
    GridLayout
} from '../../../pages/AllNFTs/AllNFTs.styles'
import NFTGrid from "./NFTGrid";



const GridWrap = () => {
    return (
        <GridLayout>
            <NFTGrid/>
        </GridLayout>
    )
}


export default GridWrap