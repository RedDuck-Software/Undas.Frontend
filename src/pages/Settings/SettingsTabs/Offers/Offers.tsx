import React from 'react';

import {
  OffersWrap,
  OffersTitleWrap,
  InformationButton,
  DescriptionTextWrap,
  ViewButton,
  OffersHeadWrap,
  OffersContentWrap,
  OffersContentText,
} from './Offers.styles';

import { PageTitle } from '../../../../globalStyles';
import { DescriptionText } from '../SettingsTabs.styles';

const Offers: React.FC = () => {
  return (
    <OffersWrap>
      <OffersHeadWrap>
        <OffersTitleWrap>
          <PageTitle>Offer Settings</PageTitle>
          <DescriptionTextWrap>
            <DescriptionText>
              Set a minimum offer for collections to ignore low offers
            </DescriptionText>
            <InformationButton />
          </DescriptionTextWrap>
        </OffersTitleWrap>
        <ViewButton>View my offers</ViewButton>
      </OffersHeadWrap>
      <OffersContentWrap>
        <OffersContentText>No collections to manage offers</OffersContentText>
        <DescriptionText>
          You currently don’t have any collections and items to manage offers
        </DescriptionText>
      </OffersContentWrap>
    </OffersWrap>
  );
};

export default Offers;
