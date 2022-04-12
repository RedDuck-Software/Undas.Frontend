import React, {FC} from 'react';

//Styles
import {
    DetailsWrap
} from "../Accordion.styles";
import {Wrapper} from "../../../../CategoriesPage/Categories.styles";
import {
    ImageWrap,
    AboutSocial,
    SocialElement
} from "../Accordion.styles";

//Assets
import NFTImage from '../../../assets/about-nft-image.png'
import {
    TwitterIco,
    TelegramIco,
    DiscordIco,
    InstagramIco,
} from '../../../imports'

const About: FC = () => {
    return (
        <DetailsWrap>
            <Wrapper disp="flex" gap="14px" marg="0 0 10px 0">
                <ImageWrap>
                    <img src={NFTImage} alt="about-image"/>
                </ImageWrap>
                <span>
                    A brand for the metaverse. Built by the community.
                    View the collection at azuki.com/gallery.
                   Azuki starts with a collection of 10,000 avatars
                    that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized fu...
                </span>
            </Wrapper>
            <AboutSocial>
                <SocialElement to="/">
                    <TwitterIco />
                </SocialElement>
                <SocialElement to="/">
                    <TelegramIco />
                </SocialElement>
                <SocialElement to="/">
                    <DiscordIco />
                </SocialElement>
                <SocialElement to="/">
                    <InstagramIco />
                </SocialElement>
            </AboutSocial>
        </DetailsWrap>
    )
}

export default About