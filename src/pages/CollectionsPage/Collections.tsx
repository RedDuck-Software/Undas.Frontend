import React, { FC } from 'react'
import {
    Banner,
    Title,
    Info,
    Subtitle,
    InfoCard,
    InfoText,
    Contact,
    ContactText,
    ContactImage,
    CollectionCard,
    AuthorWrap,
    CollectionPicWrap,
    CollectionText,
    Platform,
    Wrapper, NFTCards, CollectionBackground,
} from './Collections.styles'
//Assets
import {
    CollectionBanner,
    Email,
    Telegram,
    Verified,
    NFT1, NFT2, NFT3,
    CollectionBG,
    CollectionPic
} from "./imports";
import { Container } from "../../globalStyles";

const Collections:FC = () => {
    return (
        <>
            <Banner>
                <img src={CollectionBanner} alt="CollectionBanner"/>
            </Banner>
            <Container>
                <Info>
                    <div>
                        <Title>Real World Asset NFT</Title>
                        <Subtitle>Collections</Subtitle>
                    </div>
                    <InfoCard>
                        <InfoText>
                            You can exchange your NFT for an item, e.g. selling the tickets through our marketplace
                        </InfoText>
                        <Contact>
                            <ContactImage src={Email} alt="email-ico"/>
                            <ContactImage src={Telegram} alt="telegram-ico"/>
                            <ContactText>cooperate with dreams</ContactText>
                        </Contact>
                    </InfoCard>
                </Info>
                <div>
                    <CollectionCard>
                        <CollectionBackground src={CollectionBG} alt="collection-bg"/>
                        <AuthorWrap>
                            <CollectionPicWrap>
                                <img src={CollectionPic} alt="collection-pic"/>
                            </CollectionPicWrap>
                            {/*CollectionsPage name*/}
                            <div>
                                <Wrapper disp="flex" alignItems="center" gap="10px" marg="0 20px 0 0">
                                    <CollectionText fs="14px">Borya Borya</CollectionText>
                                    <img src={Verified} alt="verified-ico"/>
                                    <Platform>UND</Platform>
                                </Wrapper>
                                <CollectionText>by Borya Borya</CollectionText>
                            </div>
                            <Wrapper disp="flex" mw="206px" marg="0 0 0 auto">
                                <CollectionText lh="15px" padd="5px 0">
                                    If you believe in the future of DeFi, then you believein the future of rekt.news. Each auction winner will also be sent ...
                                </CollectionText>
                            </Wrapper>
                        </AuthorWrap>
                        <Wrapper disp="flex" gap="15px">
                            <NFTCards>
                                <img src={NFT1} alt="nft-card"/>
                            </NFTCards>
                            <NFTCards>
                                <img src={NFT2} alt="nft-card"/>
                            </NFTCards>
                            <NFTCards>
                                <img src={NFT3} alt="nft-card"/>
                            </NFTCards>
                        </Wrapper>
                    </CollectionCard>
                </div>
            </Container>
        </>
    )
}

export default Collections