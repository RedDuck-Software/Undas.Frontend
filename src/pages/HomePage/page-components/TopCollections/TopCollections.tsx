import { useState } from 'react';

import { Container, ComingSoonImage } from '../../../../globalStyles';
import {
  CollectionsSec,
  CollectionsTitle,
  CollectionsTitleViolet,
  CollectionsWrapper,
  CollectionsItem,
  LeftSide,
  RightSide,
  Name,
  Number,
  Picture,
  TextWrapper,
} from './TopCollections.styles';

import man from '../../../../icons/man.png';
import comingSoon from '../../../../images/coming-soon.png';

const TopCollections = () => {
  const [showCollections] = useState(false);

  return (
    <CollectionsSec>
      <Container>
        <CollectionsTitle>
          Top collections over
          <CollectionsTitleViolet>last 7 days</CollectionsTitleViolet>
          <ComingSoonImage src={comingSoon} />
        </CollectionsTitle>
        {showCollections ? (
          <CollectionsWrapper>
            <CollectionsItem>
              <LeftSide>
                <Number big>1</Number>
                <Picture src={man} />
                <TextWrapper>
                  <Name>Men one</Name>
                  <Number rhombus>16 864,07</Number>
                </TextWrapper>
              </LeftSide>
              <RightSide>
                <Number big>+38,73%</Number>
              </RightSide>
            </CollectionsItem>
            <CollectionsItem>
              <LeftSide>
                <Number big>4</Number>
                <Picture src={man} />
                <TextWrapper>
                  <Name>Men one</Name>
                  <Number rhombus>16 864,07</Number>
                </TextWrapper>
              </LeftSide>
              <RightSide>
                <Number big>+38,73%</Number>
              </RightSide>
            </CollectionsItem>
            <CollectionsItem>
              <LeftSide>
                <Number big>2</Number>
                <Picture src={man} />
                <TextWrapper>
                  <Name>Men one</Name>
                  <Number rhombus>16 864,07</Number>
                </TextWrapper>
              </LeftSide>
              <RightSide>
                <Number big color="green">
                  +38,73%
                </Number>
              </RightSide>
            </CollectionsItem>
            <CollectionsItem>
              <LeftSide>
                <Number big>5</Number>
                <Picture src={man} />
                <TextWrapper>
                  <Name>Men one</Name>
                  <Number rhombus>16 864,07</Number>
                </TextWrapper>
              </LeftSide>
              <RightSide>
                <Number big color="green">
                  +38,73%
                </Number>
              </RightSide>
            </CollectionsItem>
            <CollectionsItem>
              <LeftSide>
                <Number big>3</Number>
                <Picture src={man} />
                <TextWrapper>
                  <Name>Men one</Name>
                  <Number rhombus>16 864,07</Number>
                </TextWrapper>
              </LeftSide>
              <RightSide>
                <Number big color="red">
                  +38,73%
                </Number>
              </RightSide>
            </CollectionsItem>
            <CollectionsItem>
              <LeftSide>
                <Number big>6</Number>
                <Picture src={man} />
                <TextWrapper>
                  <Name>Men one</Name>
                  <Number rhombus>16 864,07</Number>
                </TextWrapper>
              </LeftSide>
              <RightSide>
                <Number big color="red">
                  +38,73%
                </Number>
              </RightSide>
            </CollectionsItem>
          </CollectionsWrapper>
        ) : (
          <></>
        )}
      </Container>
    </CollectionsSec>
  );
};

export default TopCollections;
