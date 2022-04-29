import React from "react";

import { Background, 
    Container, 
    PageTitle,
    ArticleHead,
    ArticleText,
} from "../../globalStyles";

import {
    AboutWrap,
    AboutContent,
    AboutTopContent,
    AboutGallery,
    AboutContentText,
    AboutBottomContent,
    AboutContentImage,
    OurTeam,
    Roadmap

} from "./AboutUs.styles";

import AboutSlider from "./Slider/Slider";

const AboutUs = () => {
    return (
        <AboutWrap>
            <Background>
                <Container>
                    <PageTitle>About US</PageTitle>
                    <AboutContent>
                        <AboutTopContent>
                            <AboutGallery>
                                <AboutSlider />
                            </AboutGallery>
                            <AboutContentText>
                                <ArticleHead>Our Story</ArticleHead>
                                <ArticleText>
                                    In 2017 the world witnessed the birth of CryptoKitties. For the first time, the world experienced a decentralized application built on blockchains but targetted towards a mainstream audience.

                                    While CryptoKitties felt like a toy to many, it represented a dramatic shift in how we interact with items in the digital world. While previous digital items lived on company servers, blockchain-native items lived on shared, public blockchains owned by no single party. They could be viewed anywhere, exchanged openly, and truly owned in a way that was never before possible in the digital world.

                                    Today, we’re proud to remain the largest general marketplace for user-owned digital items, supporting multiple blockchains, with the broadest set of categories and the best prices for new emerging digital item classes.and the best prices for new emerging digital item 
                                </ArticleText>
                            </AboutContentText>
                        </AboutTopContent>
                        <AboutBottomContent>
                            <AboutContentText>
                                
                            </AboutContentText>
                            <AboutContentImage />
                        </AboutBottomContent>
                    </AboutContent>
                    <OurTeam>
                        
                    </OurTeam>
                    <Roadmap>

                    </Roadmap>
                </Container>
            </Background>
        </AboutWrap>
    )
}

export default AboutUs