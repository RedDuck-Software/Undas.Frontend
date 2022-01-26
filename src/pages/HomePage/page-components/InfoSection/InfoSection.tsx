import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from '../../../../globalStyles';
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
} from './InfoSection.styles';

import {
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
} from './imports';

const InfoSection = () => {
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
              <Link to="/assets">
                <Button violet>Explore</Button>
              </Link>
              <Link to="/">
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
