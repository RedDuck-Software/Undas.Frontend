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
} from './Categories.styles'
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
import Collection from "./page-components/Collection";

const Categories:FC = () => {
    return (
        <>
            <Banner>
                <img src={CollectionBanner} alt="CollectionBanner"/>
            </Banner>
            <Container>
                <Info>
                    <div>
                        <Title>Real World Asset NFT</Title>
                        <Subtitle>Categories</Subtitle>
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
                    <Collection />
                    <Collection />
                    <Collection />
                    <Collection />
                </div>
            </Container>
        </>
    )
}

export default Categories