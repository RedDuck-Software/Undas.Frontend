import React from 'react';

import NFTImage from '../../../assets/about-nft-image.png';
import {
  TwitterIco,
  TelegramIco,
  DiscordIco,
  InstagramIco,
} from '../../../imports';
import {
  ImageWrap,
  AboutSocial,
  SocialElement,
  AccordionText,
  WrapperAbout,
  AboutWrap,
} from '../Accordion.styles';

const About: React.FC = () => {
  return (
    <AboutWrap>
      <WrapperAbout>
        <ImageWrap>
          <img src={NFTImage} alt="about-image" />
        </ImageWrap>
        <AccordionText>
          A brand for the metaverse. Built by the community. View the collection
          at azuki.com/gallery. Azuki starts with a collection of 10,000 avatars
          that give you membership access to The Garden: a corner of the
          internet where artists, builders, and web3 enthusiasts meet to create
          a decentralized fu...
        </AccordionText>
      </WrapperAbout>
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
    </AboutWrap>
  );
};

export default About;
