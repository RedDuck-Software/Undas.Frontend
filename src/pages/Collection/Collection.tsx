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
    AuthorPicWrap,
    CollectionText,
    Platform,
    Wrapper, NFTCards,
} from './Collection.styles'
//Assets
import {
    CollectionBanner,
    Email,
    Telegram,
    Verified
} from "./imports";
import { Container } from "../../globalStyles";

const Collection:FC = () => {
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
                        <AuthorWrap>
                            <AuthorPicWrap>
                            </AuthorPicWrap>
                            {/*Collection name*/}
                            <div>
                                <Wrapper disp="flex" alignItems="center" gap="10px">
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
                            <NFTCards></NFTCards>
                            <NFTCards></NFTCards>
                            <NFTCards></NFTCards>
                        </Wrapper>
                    </CollectionCard>
                </div>
            </Container>
        </>
    )
}

export default Collection