// import { ethers } from "ethers";
import React, { useState } from "react";
// import { useLocation,  } from "react-router-dom";
// import { createClient } from "urql";

import {
  TitleText,
  Back,
  BackText,
  MainContainer,
  ContentItem,
  ContentItemName,
  InputBlock,
  RentalPeriod,
  ContentItemPriceWrap,
  ContentItemPriceEth,
  ContentItemPriceUsd,
  CollectionName,
  FirstCollumn,
  SecondCollumn,
  NameRow,
  AgreeRow,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  Button,
  ButtonsBlock,
  NFTInfoContainer,
  CheckBoxCenter,
  ContentWrap,
} from "./InteractionRent.styles";

// import LoadingModal from "../../components/LoadingModal/LoadingModal";
import NFTCard from "../../components/NFTCardOffers/NFTCard";
import { Container } from "../../globalStyles";
// import { Marketplace__factory } from "../../typechain";
// import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
// import Context from "../../utils/Context";

const InteractionRent: React.FC = () => {
  //   const [, setAutoRedirect] = useState<boolean>(false);
  //   const [loading, setLoading] = useState<boolean>(false);
  //   const { connector } = useContext(Context);

  //   const state: any = useLocation();
  //   const [tokenName, setTokenName] = useState<string>();
  //   const [tokenURI, setTokenURI] = useState<string>();
  //   const [listingId, setListingId] = useState<string>();
  //   const [offeredPrice, ] = useState<string>();
  //   const navigate = useNavigate();

  //   async function makeSaleOffer() {
  //     if (!connector) {
  //       navigate("/login");
  //       return;
  //     }
  //     if (!offeredPrice) return alert("no offeredPrice");
  //     if (listingId == undefined) return alert("!listingid");

  //     const provider = new ethers.providers.Web3Provider(
  //       await connector.getProvider(),
  //     );
  //     const signer = provider.getSigner(0);

  //     const MarketplaceContract = Marketplace__factory.connect(
  //       MARKETPLACE_ADDRESS,
  //       signer,
  //     );

  //     const tx = await MarketplaceContract.listingOffer(listingId, {
  //       value: ethers.utils.parseUnits(offeredPrice.toString(), "ether"),
  //     });

  //     setLoading(true);
  //     await tx.wait();
  //     if (autoRedirect) {
  //       setAutoRedirect(false);
  //       navigate("/account");
  //     }
  //     setLoading(false);
  //   }
  //   useEffect(() => {
  //     if (connector) {
  //       getTokenData();
  //     }
  //   }, [connector, listingId]);

  //   const getTokenData = async () => {
  //     const tokensQuery = await fetchData();
  //     console.log(tokensQuery);
  //     if (
  //       tokensQuery.data.listings[0] &&
  //       tokensQuery.data.listings[0].listingStatus == "ACTIVE"
  //     ) {
  //       setTokenName(tokensQuery.data.listings[0].tokenName);
  //       setTokenURI(tokensQuery.data.listings[0].tokenURI);
  //       setListingId(tokensQuery.data.listings[0].id);

  //       return;
  //     }
  //   };

  //   const APIURL =
  //     "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";
  //   console.log(state.state.tokenId);
  //   const tokensQuery = `
  //   {
  //     listings(where:{tokenId:"${state.state.state.tokenId}" token:"${state.state.state.tokenAddress}"}){
  //       id
  //        tokenId
  //       tokenURI
  //       price
  //       tokenName
  //       token
  //       tokenDescription
  //       seller
  //       listingStatus
  //     }
  //   }
  //    `;
  //   const client = createClient({
  //     url: APIURL,
  //   });

  //   async function fetchData() {
  //     const data = await client.query(tokensQuery).toPromise();

  //     return data;
  //   }

  //   const handleCleanForm = () => {
  //     setLoading(false);
  //   };
  const [, setRentalDays] = useState<number | string>();

  const handleRentalDays = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setRentalDays(value);
  };

  return (
    <MainContainer>
      {/* <LoadingModal
        isLoading={loading}
        setAutoRedirect={setAutoRedirect}
        addMore={handleCleanForm}
      /> */}
      <Back onClick={() => history.back()}>
        <BackText>Back</BackText>
      </Back>
      <Container>
        <TitleText>Interaction with Rent</TitleText>
        <ContentWrap>
        <FirstCollumn>
          <ContentItem>
            <ContentItemName className="width">
              Extend rental
              <InputBlock>
                <RentalPeriod
                  id="period"
                  placeholder="7 for 90 days"
                  onChange={handleRentalDays}
                />
              </InputBlock>
              days
            </ContentItemName>
            <ContentItemPriceWrap className="column">
              <ContentItemPriceEth>0,035</ContentItemPriceEth>
              <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
            </ContentItemPriceWrap>
          </ContentItem>
        </FirstCollumn>
        <SecondCollumn>
          <NameRow>
            <CollectionName>Owner item</CollectionName>
          </NameRow>
          <NFTInfoContainer className="max-width">
            <NFTCard uri="string" name="string" />
          </NFTInfoContainer>
        </SecondCollumn>
        </ContentWrap>
      <AgreeRow>
        <CheckBoxCenter>
          <CheckboxInputAgreement
            type="checkbox"
            id="agreement"
            className="custom-checkbox"
          />
          <CheckboxLabelAgreement htmlFor="agreement">
            I agree to the platform {"\u00A0"}
            <AgreementLink>agreement...</AgreementLink>
          </CheckboxLabelAgreement>
        </CheckBoxCenter>
      </AgreeRow>
      <ButtonsBlock>
        <Button>Extend rental</Button>
        <Button>Return the leased NFT</Button>
      </ButtonsBlock>
      </Container>
    </MainContainer>
  );
};

export default InteractionRent;
