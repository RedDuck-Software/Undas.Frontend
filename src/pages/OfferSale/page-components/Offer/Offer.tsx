import React,{useContext, useEffect,useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useParams,useLocation } from "react-router-dom";

import {
  OfferContainer,
  CollectionName,
  FirstCollum,
  SecondCollum,
  NameRow,
  TextPrice,
  PriceRow,
  EthSelect,
  EthText,
  ImageDown,
  AmmountInput,
  CostSelect,
  DollarText,
  TextOffer,
  DaySelect,
  ImageDownOffer,
  TimeSelect,
  TextPmAm,
  TextTime,
  UNDPrice,
  CheckboxInput,
  CheckboxLabel,
  UNDLabel,
  ImageInfo,
  DollarPrice,
  AgreeRow,
  PayRow,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  ButtonMakeOffer,
  AgreeRowButton,
  NFTInfoContainer,
  CheckBoxCenter,
  ButtonInfo,
  OverlayPopUp,
  FAQLink,
} from "./Offer.styles";

import NFTCard from "../../../HomePage/page-components/NFTCard/NFTCard";
import { MARKETPLACE_ADDRESS } from "../../../../utils/addressHelpers";
import { Marketplace__factory } from "../../../../typechain";

import { ethers, Signer } from "ethers";
import { down, info } from "../../imports";
import Context from "../../../../utils/Context";
import { createClient } from "urql";

const Offer: React.FC = () => {
  const { connector } = useContext(Context);

  const state:any = useLocation()
  
  const [tokenName, setTokenName] = useState<string>();
  const [tokenURI, setTokenURI] = useState<string>();
  const [listingId,setListingId] = useState<string>();
  const [offeredPrice,setOfferedPrice] = useState<string>();

  async function makeSaleOffer() {

    if (!connector) return alert('no connector');
    if(!offeredPrice) return alert('no offeredPrice');
    if(listingId==undefined) return alert('!listingid');

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

      const tx = await MarketplaceContract.listingOffer(
        listingId,
        {
          value: ethers.utils.parseUnits(offeredPrice.toString(), "ether")
        },
      );

      await tx.wait();
  }
  useEffect(() => {
    if (connector) {
      getTokenData()
 
    }
  }, [connector,listingId]);

  const getTokenData = async () => {

    const tokensQuery = await fetchData()

    if(tokensQuery.data.listings[0] && tokensQuery.data.listings[0].listingStatus == "ACTIVE"){
      setTokenName(tokensQuery.data.listings[0].tokenName);
      setTokenURI(tokensQuery.data.listings[0].tokenURI);
      setListingId(tokensQuery.data.listings[0].id);

     return
    }


  }

const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const tokensQuery = `
{
  listings(where:{tokenId:"${state.state.tokenId}" token:"${state.state.tokenAddress}"}){
    id
 		tokenId
    tokenURI
    price
    tokenName
    token
    tokenDescription
    seller
    listingStatus
  }
}
 `;
 const client = createClient({
  url: APIURL,
});

async function fetchData() {
  const data = await client.query(tokensQuery).toPromise();

  return data;
}

  return (
    <OfferContainer>
      <FirstCollum>
        <NameRow>
          <TextPrice>Price</TextPrice>
        </NameRow>
        <PriceRow>
          <EthSelect>
            <EthText>ETH</EthText>
            <ImageDown src={down} alt="down-image" />
          </EthSelect>
          <AmmountInput type="number" placeholder="Amount" onChange={(e)=>setOfferedPrice(e.target.value)}/>
          <CostSelect>
            <DollarText>0.00</DollarText>
          </CostSelect>
        </PriceRow>
        <NameRow className="margin-top">
          <TextOffer>Offer Expiration</TextOffer>
        </NameRow>
        <PriceRow>
          <DaySelect>
            3 day
            <ImageDownOffer src={down} alt="down-image" />
          </DaySelect>
          <TimeSelect>
            <TextTime>06 : 35</TextTime>
            <TextPmAm>PM</TextPmAm>
          </TimeSelect>
        </PriceRow>
        <NameRow className="margin-top-20">
          <TextOffer>Marketplace fee 3%</TextOffer>
          <UNDPrice>UND 2</UNDPrice>
        </NameRow>
        <PayRow>
          <CheckboxInput
            type="checkbox"
            id="purchases"
            className="custom-checkbox"
          />
          <CheckboxLabel htmlFor="purchases">
            Pay in {"\u00A0"}
            <UNDLabel>UND</UNDLabel>
            {"\u00A0"} with a 50% discount
            <OverlayTrigger
              delay={{ show: 250, hide: 3000 }}
              placement="top"
              overlay={
                <OverlayPopUp>
                  Speech bubble that will fall out when you click on the
                  information on the icon <FAQLink href="/faq">FAQ</FAQLink>
                </OverlayPopUp>
              }
            >
              <ButtonInfo>
                <ImageInfo src={info} alt="info-image" />
              </ButtonInfo>
            </OverlayTrigger>
          </CheckboxLabel>
          <DollarPrice className="margin-0">258,25</DollarPrice>
        </PayRow>
      </FirstCollum>
      <SecondCollum>
        <NameRow>
          <CollectionName>Owner item</CollectionName>
        </NameRow>
        <NFTInfoContainer>
          <NFTCard uri={tokenURI?tokenURI:'loading...'} name={tokenName?tokenName:'loading...'} />
        </NFTInfoContainer>
      </SecondCollum>
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
      <AgreeRowButton>
        <ButtonMakeOffer onClick={makeSaleOffer}>Make Offer</ButtonMakeOffer>
      </AgreeRowButton>
    </OfferContainer>
  );
};

export default Offer;
