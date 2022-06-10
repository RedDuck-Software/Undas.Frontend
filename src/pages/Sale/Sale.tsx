import React,{ useContext, useState,useEffect } from "react";

import {
  BlockTitle,
  BlockWrap,
  DurationWrap,
  ButtonsBlock,
  DurationButton,
  DurationRow,
  BlockButton,
} from "./Sale.styles";

import { Background, Container, PageTitle } from "../../globalStyles";
import NFTCard from "../HomePage/page-components/NFTCard/NFTCard";
import { down, info, deleteNFT } from "../OfferRent/imports";
import {
  PageWrapper,
  NameRow,
  TextPrice,
  PriceRow,
  EthSelect,
  EthText,
  ImageDown,
  AmmountInput,
  CostSelect,
  DollarText,
  ImageInfo,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  InputDay,
  TextDay,
  CheckboxLabelCollateral,
  CheckboxInputCollateral,
  ContainerCheckboxCollateral,
  NFTInfoContainer,
  SelectedNFT,
  SelectedNFTCardBox,
  ImgDelete,
  AddNFT,
  AddNFTCard,
  AddNFTButton,
  AddNFTContainer,
} from "../OfferRent/OfferRent.styles";
import {
  LeftBlock,
  RightBlock,
  ContentWrapper,
  TopLinkWrapper,
  TopLink,
  BottomWrapper,
  CheckBoxWrapper,
  Button,
  ItemAmount,
} from "../Rent/Rent.styles";
import { useParams } from "react-router-dom";
import { OnlyOne__factory } from "../../typechain";
import Context from "../../utils/Context";
import { ethers } from "ethers";
import { Marketplace__factory } from "../../typechain";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import { date } from "yup";
import { createClient } from "urql";


const Sale: React.FC = () => {
  const {id}= useParams()
  const { connector } = useContext(Context);

  const [priceForSale,setPriceForSale] = useState(0)
  const [colloteral,setColloteral] = useState(0)
  const [premium,setPremium] = useState(0)
  const [durationInDay,setDurationInDay] = useState(0)


  async function sellToken() {
    if (!connector) return;
    if(!id) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );


    const expectedValue = (priceForSale * 2) /100;

    const formattedPrice =  ethers.utils.parseUnits(priceForSale.toString(), "ether")
                                      //undsa contract  
    const tx = await MarketplaceContract.bidExternal("0x674002Df32E372E3D2E2CfC253471d0A5912fb9A",id,
    formattedPrice,
    false,
     {
      value: ethers.utils.parseUnits(expectedValue.toString(), "ether"),
    });
    await tx.wait();
  }

  async function stakeToken() {
    if (!connector) return;
    if(!id) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );
    
    const utcTimestamp = new Date().getTime();
    
    const deadlineUTC = (utcTimestamp + durationInDay *86400)
    const formattedColloteral =  ethers.utils.parseUnits(colloteral.toString(), "ether")
    const formattedPremium =  ethers.utils.parseUnits(premium.toString(), "ether")

    const amountToPay = (colloteral*2)/100;

    const tx = await MarketplaceContract.quoteForStakingExternal("0x674002Df32E372E3D2E2CfC253471d0A5912fb9A",id,
    formattedColloteral,
    formattedPremium,
      deadlineUTC,
      false,{
        value: ethers.utils.parseUnits(amountToPay.toString(), "ether"),

      }
      )
    await tx.wait();
  }


  const [name, setName] = useState<string>();
  const [tokenURI, setTokenURI] = useState<string>();
  const [priceInNum, setPriceInNum] = useState(0);

  const [description, setDescription] = useState<string>();
  const [listingId, setListingId] = useState(0);
  const [stakingId, setStakingId] = useState(0);
  const [seller,setSeller] = useState<string>();

  useEffect(() => {
    if (connector) {

     getTokenData()
    

    }
  }, [connector,listingId,stakingId,tokenURI]);

  const getTokenData = async () => {

    const tokensQuery = await fetchData()
      
    if(tokensQuery.data.listings[0]){

        setName(tokensQuery.data.listings[0].tokenName)
        setTokenURI( tokensQuery.data.listings[0].tokenURI)
        setPriceInNum(tokensQuery.data.listings[0].price) 
        setDescription(tokensQuery.data.listings[0].tokenDescription) 
        setListingId(tokensQuery.data.listings[0].id) 
        setSeller(tokensQuery.data.listings[0].seller)

          
    }
    console.log(tokenURI)

    if(tokensQuery.data.stakingListings[0]){
        console.log('ZXCQ',tokensQuery.data.stakingListings[0].premium)
        setName(tokensQuery.data.stakingListings[0].tokenName)
        setTokenURI(tokensQuery.data.stakingListings[0].tokenURI)
        setDescription(tokensQuery.data.stakingListings[0].tokenDescription) 
        setStakingId(tokensQuery.data.stakingListings[0].id) 
        setSeller(tokensQuery.data.stakingListings[0].seller)
        setColloteral(tokensQuery.data.stakingListings[0].colloteralWei)
        setPremium(tokensQuery.data.stakingListings[0].premiumWei)
         
     }
     console.log('dasds')
 
  }

  const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const tokensQuery = `
{
  listings(where:{tokenId:${id}}){
    id
 		tokenId
    tokenURI
    price
    tokenName
    tokenDescription
    seller
  }
  stakingListings(where:{tokenId:${id}}){
    id
    seller
 		tokenId
    tokenURI
    tokenName
    tokenDescription
    colloteralWei
    premiumWei
    deadlineUTC
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
    <Background>
      <TopLinkWrapper>
        <Container>
          <TopLink to="/">Back</TopLink>
        </Container>
      </TopLinkWrapper>
      <Container>
        <PageWrapper>
          <PageTitle>List on market</PageTitle>
          <ContainerCheckboxCollateral>
            <CheckboxInputCollateral
              type="checkbox"
              id="collateral"
              className="custom-checkbox"
            />
            <CheckboxLabelCollateral htmlFor="collateral">
              Make a Bundle
            </CheckboxLabelCollateral>
            <ImageInfo src={info} alt="info-image" />
          </ContainerCheckboxCollateral>
          <ContentWrapper>
            <LeftBlock>
              <BlockWrap>
                <BlockTitle>List item to sale</BlockTitle>
                <NameRow>
                  <TextPrice >Price</TextPrice>
                </NameRow>
                <PriceRow>
                  <EthSelect>
                    <EthText>ETH</EthText>
                    <ImageDown src={down} alt="down-image" />
                  </EthSelect>
                  <AmmountInput type="number" placeholder="Amount" onChange={(e)=>setPriceForSale(+e.target.value)}/>
                  <CostSelect>
                    <DollarText>0.00</DollarText>
                  </CostSelect>
                </PriceRow>
                <DurationWrap>
                  <TextPrice>Duration</TextPrice>
                  <DurationRow>
                    <TextDay>Day</TextDay>
                    <InputDay placeholder="Custom date" />
                    <ButtonsBlock>
                      <DurationButton>7</DurationButton>
                      <DurationButton>30</DurationButton>
                      <DurationButton>60</DurationButton>
                      <DurationButton>90</DurationButton>
                      <DurationButton>180</DurationButton>
                    </ButtonsBlock>
                  </DurationRow>
                </DurationWrap>
                <BlockButton onClick={()=>sellToken()}>Confirm</BlockButton>
              </BlockWrap>
              <BlockWrap>
                <BlockTitle>List item to rent</BlockTitle>
                <NameRow>
                  <TextPrice>
                    Deposit
                    <ImageInfo src={info} alt="info-image" />
                  </TextPrice>
                </NameRow>
                <PriceRow>
                  <EthSelect>
                    <EthText>ETH</EthText>
                    <ImageDown src={down} alt="down-image" />
                  </EthSelect>
                  <AmmountInput type="text" placeholder="Amount" onChange={(e)=>setColloteral(+e.target.value)} />
                  <CostSelect>
                    <DollarText>0.00</DollarText>
                  </CostSelect>
                </PriceRow>
                <NameRow>
                  <TextPrice className="сost-per-day">Cost per Day</TextPrice>
                </NameRow>
                <PriceRow>
                  <EthSelect>
                    <EthText>ETH</EthText>
                    <ImageDown src={down} alt="down-image" />
                  </EthSelect>
                  <AmmountInput type="text" placeholder="Amount" onChange={(e)=>setPremium(+e.target.value)} />
                  <CostSelect>
                    <DollarText>0.00</DollarText>
                  </CostSelect>
                </PriceRow>
                <NameRow>
                  <TextPrice className="сost-per-day">Rental Period</TextPrice>
                </NameRow>
                <NameRow className="margin-top">
                  <TextDay>Day</TextDay>
                  <InputDay placeholder="Min" />
                  <InputDay placeholder="Max" />
                </NameRow>
                <DurationWrap>
                  <TextPrice>Duration</TextPrice>
                  <DurationRow>
                    <TextDay>Day</TextDay>
                    <InputDay placeholder="Custom date" onChange={(e)=>setDurationInDay(+e.target.value)}/>
                    <ButtonsBlock>
                      <DurationButton>7</DurationButton>
                      <DurationButton>30</DurationButton>
                      <DurationButton>60</DurationButton>
                      <DurationButton>90</DurationButton>
                      <DurationButton>180</DurationButton>
                    </ButtonsBlock>
                  </DurationRow>
                </DurationWrap>
                <BlockButton onClick={()=>stakeToken()}>Confirm</BlockButton>
              </BlockWrap>
            </LeftBlock>
            <RightBlock>
              <NameRow>
                <ItemAmount>NFT item</ItemAmount>
              </NameRow>
              <NFTInfoContainer>
                {tokenURI && <NFTCard uri={tokenURI} name="NFTCard" />}
              </NFTInfoContainer>
            </RightBlock>
          </ContentWrapper>
          <NameRow>
            <SelectedNFT>NFT item’s selected{"\u00A0"}</SelectedNFT>
            <SelectedNFT>2</SelectedNFT>
          </NameRow>
          <SelectedNFTCardBox>
            <NFTInfoContainer>
              <NFTCard uri="nft1" name="NFTCard" />
              <ImgDelete src={tokenURI} alt="delete-nft-image" />
            </NFTInfoContainer>
            <NFTInfoContainer>
              <NFTCard uri="nft1" name="NFTCard" />
              <ImgDelete src={deleteNFT} alt="delete-nft-image" />
            </NFTInfoContainer>
            <NFTInfoContainer>
              <NFTCard uri="nft1" name="NFTCard" />
              <ImgDelete src={deleteNFT} alt="delete-nft-image" />
            </NFTInfoContainer>
            <AddNFTContainer>
              <AddNFTCard>
                <AddNFTButton>
                  <AddNFT className="add-btn">+</AddNFT>
                </AddNFTButton>
              </AddNFTCard>
            </AddNFTContainer>
          </SelectedNFTCardBox>
          <BottomWrapper>
            <CheckBoxWrapper>
              <CheckboxInputAgreement
                type="checkbox"
                id="agreement"
                className="custom-checkbox"
              />
              <CheckboxLabelAgreement htmlFor="agreement">
                I agree to the platform {"\u00A0"}
                <AgreementLink to="/">agreement...</AgreementLink>
              </CheckboxLabelAgreement>
            </CheckBoxWrapper>
            <Button>Complete listing</Button>
          </BottomWrapper>
        </PageWrapper>
      </Container>
    </Background>
  );
};

export default Sale;
