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
    EthIco,
    RentIco, OffersIco, DetailsIco
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
    Image,
    Info,
    InfoElement,
    PurpleText,
    SaleBlock,
    TopBar,
    BuyBar,
    PriceText,
    ButtonWrap,
    InfoButton,
    PriceInUSD,
    RentElement,
    RentalPeriod
} from './NFTPage.styles'

import {Wrapper} from "../CategoriesPage/Categories.styles";
//Accordion components
import Accordion from "./page-components/Accordion/Accordion";
import Offers from "./page-components/Accordion/accordrion-components/Offers";
import Description from "./page-components/Accordion/accordrion-components/Description";
import Details from "./page-components/Accordion/accordrion-components/Details";
//Modules
import {useParams} from "react-router-dom";


const NFTPage: FC = () => {
    const params = useParams()
    const tokenId = params.id

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
                <Wrapper disp="flex" flexDirection="column" justifyContent="space-between">
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
                        <BuyBar>
                            <span>Current price</span>
                            <Wrapper disp="flex" alignItems="center" marg="10px 0 20px 0">
                                <EthIco/>
                                <PriceText>2,5</PriceText>
                                <PriceInUSD>($18 465,32)</PriceInUSD>
                            </Wrapper>
                            <ButtonWrap>
                                <InfoButton bg="#873DC1">
                                    Buy now
                                </InfoButton>
                                <InfoButton fc="#873DC1">
                                    Make offer
                                </InfoButton>
                            </ButtonWrap>
                        </BuyBar>
                    </SaleBlock>
                    <SaleBlock>
                        <TopBar>
                            <RentIco />
                            Rent
                        </TopBar>
                        <RentElement>
                            <span>Deposit</span>
                            <Wrapper disp="flex" alignItems="center">
                                <EthIco/>
                                <PriceText>2,5</PriceText>
                                <PriceInUSD>($18 465,32)</PriceInUSD>
                            </Wrapper>
                        </RentElement>
                        <RentElement>
                            <span>Price for 1 Day Rental</span>
                            <Wrapper disp="flex" alignItems="center">
                                <EthIco/>
                                <PriceText>0,005</PriceText>
                                <PriceInUSD>($36,93)</PriceInUSD>
                            </Wrapper>
                        </RentElement>
                        <RentElement>
                            <span>Period</span>
                            <RentalPeriod placeholder="7 for 90 days"/>
                        </RentElement>
                        <RentElement h="76px">
                                <InfoButton bg="#873DC1" flex="1 1 0">
                                    Rent
                                </InfoButton>
                                <InfoButton fc="#873DC1">
                                    Make offer
                                </InfoButton>
                        </RentElement>
                    </SaleBlock>
                </Wrapper>
            </MainInfoWrap>
            {/*Accordions*/}
            <Wrapper disp="flex" flexWrap="wrap" gap="10px">
                <Accordion name="Offers" ico={<OffersIco />}>
                    <Offers />
                </Accordion>
                <Accordion name="Description" flex="1 0 40%">
                    <Description />
                </Accordion>
                <Accordion name="Details" ico={<DetailsIco />} flex="1 1 40%">
                    <Details />
                </Accordion>
            </Wrapper>
        </NFTPageWrap>
    )
}

export default NFTPage