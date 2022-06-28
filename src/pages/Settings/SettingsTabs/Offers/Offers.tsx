import React from "react";
import { useNavigate } from "react-router-dom";

import {
  OffersWrap,
  OffersTitleWrap,
  InformationButton,
  DescriptionTextWrap,
  OffersHeadWrap,
  OffersContentWrap,
  OffersContentText,
} from "./Offers.styles";

import { PageTitle } from "../../../../globalStyles";
import { DescriptionText, Button } from "../SettingsTabs.styles";

const Offers: React.FC = () => {
  const navigate = useNavigate();
  return (
    <OffersWrap>
      <OffersHeadWrap>
        <OffersTitleWrap>
          <PageTitle>Section in development</PageTitle>
          <PageTitle>Offer Settings</PageTitle>
          <DescriptionTextWrap>
            <DescriptionText>
              Set a minimum offer for collections to ignore low offers
            </DescriptionText>
            <InformationButton />
          </DescriptionTextWrap>
        </OffersTitleWrap>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/account");
          }}
        >
          View my offers
        </Button>
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
