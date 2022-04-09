import React, {FC} from 'react'
//Assets
import {
    NFTImage,
    LikeIco,
    CartIco,
    ViewsIco,
    FavouriteIco,
    UnlockIco,
    RefreshIco,
    FlaggedIco,
    ThreeCircleIco,
    OpenInIco,
} from './imports'

//Styles
import {
    NFTPageWrap,
    NavigationWrap,
    Name,
    NavMenu,
    NavElement,
    MainInfoWrap,
    ImageWrap,
    Info,
    InfoElement,
    PurpleText,
    SaleBlock,
    TopBar
} from './NFTPage.styles'



import {
    Image
} from '../../components/NFTCard/Grid/NFTGrid.styles'
const NFTPage: FC = () => {
    return (
        <NFTPageWrap>
            <NavigationWrap>
                <Name>Returne #274</Name>
                <NavMenu>
                    <NavElement>
                        <RefreshIco />
                    </NavElement>
                    <NavElement>
                        <FlaggedIco />
                    </NavElement>
                    <NavElement>
                        <ThreeCircleIco />
                    </NavElement>
                    <NavElement>
                        <OpenInIco />
                    </NavElement>
                </NavMenu>
            </NavigationWrap>
            <MainInfoWrap>
                <ImageWrap>
                    <Image src={NFTImage} alt="nft-image"/>
                </ImageWrap>
                <div>
                    <Info>
                        <InfoElement>
                            <span>Owned by <PurpleText>Hype-eth</PurpleText></span>
                        </InfoElement>
                        <InfoElement>
                            <ViewsIco />
                            <span>91 views</span>
                        </InfoElement>
                        <InfoElement>
                            <FavouriteIco />
                            <span>10 favourites</span>
                        </InfoElement>
                        <InfoElement>
                            <UnlockIco />
                            <span>Unlockable Content</span>
                        </InfoElement>
                    </Info>
                    <SaleBlock>
                        <TopBar>
                            <CartIco />
                            Sale
                        </TopBar>
                    </SaleBlock>
                </div>
            </MainInfoWrap>
        </NFTPageWrap>
    )
}

export default NFTPage