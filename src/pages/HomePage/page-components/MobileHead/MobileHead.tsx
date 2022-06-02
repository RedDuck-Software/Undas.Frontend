import React from "react";

import { MobileHeadWrap,
    MobileTextGet,
    MobileTextUndas,
    MobileTextStacking,
    MobileSliderButtonsBlock,
    MobileExploreButton,
    MobileCreateButton,
} from "./MobileHead.styles";

import { Container } from "../../../../globalStyles"

const MobileHead: React.FC = () => {
  return <>
  <Container>
    <MobileHeadWrap>
            <MobileTextGet>Get passive income from your NFT with <MobileTextUndas>UNDAS</MobileTextUndas></MobileTextGet>
            <MobileTextStacking>
                Stacking, Renting, Creating, Trading and Exchanging NFT
            </MobileTextStacking>
            <MobileSliderButtonsBlock>
                <MobileExploreButton>Explore</MobileExploreButton>
                <MobileCreateButton>Create</MobileCreateButton>
                </MobileSliderButtonsBlock>
    </MobileHeadWrap>
  </Container>
  </>;
};

export default MobileHead;
