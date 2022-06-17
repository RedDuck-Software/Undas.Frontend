import React from "react";
import { Link } from "react-router-dom";

import {
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
} from "./imports";
import {
  InfoSec,
  InfoRow,
  LeftColumn,
  RightColumn,
  TextWrapper,
  Tagline,
  ButtonsWrapper,
  ImageGallery,
  Image,
} from "./InfoSection.styles";

import { Container, Button } from "../../../../globalStyles";

const InfoSection: React.FC = () => {
  return (
    <InfoSec>
      <Container>
        <InfoRow>
          <LeftColumn>
            <TextWrapper>
              <Tagline big>Uniqueness</Tagline>
              <Tagline icon>f the new generation</Tagline>
            </TextWrapper>
            <ButtonsWrapper>
              <Link to="/all">
                <Button violet>Explore</Button>
              </Link>
              <Link to="/create-nft">
                <Button>Create</Button>
              </Link>
            </ButtonsWrapper>
          </LeftColumn>
          <RightColumn>
            <ImageGallery>
              <Image src={gallery01} />
              <Image src={gallery02} />
              <Image src={gallery03} />
              <Image src={gallery04} />
              <Image src={gallery05} />
              <Image src={gallery06} />
            </ImageGallery>
          </RightColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
