import React, {FC} from 'react'

import {
    MoneyIco,
    HandIco,
    NFTIco,
    SaleIco,
} from './imports'

import {
    InfoBlock,
    InfoWrap,
    InfoList,
    InfoText
} from './Info.styles'

const Info:FC = () => {
    return (
        <InfoBlock>
            <InfoWrap>
                <InfoList>
                    <MoneyIco />
                    <InfoText>
                        earn passive income via NFT Stacking
                    </InfoText>
                </InfoList>
                <InfoList>
                    <HandIco />
                    <InfoText>
                        rent or have your NFT rented
                    </InfoText>
                </InfoList>
                <InfoList>
                    <NFTIco />
                    <InfoText>
                        recieve bonuses from NFT tranding
                    </InfoText>
                </InfoList>
                <InfoList>
                    <SaleIco />
                    <InfoText>
                        save 50 % on commission
                    </InfoText>
                </InfoList>
            </InfoWrap>
        </InfoBlock>
    )
}

export default Info

