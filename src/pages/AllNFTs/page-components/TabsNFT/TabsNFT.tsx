import { useState } from 'react';
import { Tab, Tabs, Modal, Button,} from 'react-bootstrap';
import "./tabs-nft.css"
import { useDispatch } from "react-redux";
import {openModal, setComponent} from "../../../../store/reducers/modalAction";

import "./TabsNFTModal.css";
import {  
  NFTModal,
  collection, 
  imageNft,
  btnLeft,
  btnRight,
} from './imports';

import {
  InputTypeYourBid,
  ReturneText,
  ButtonRent,
  ButtonOffer,
  SpanSale,
  ButtonBid,
  ButtonRentSale,
  RowDown,
  DivDeposit,
  DepositText,
  EthereumText,
  DivPrice,
  DivPeriod,
  PeriodText,
  DivLastSales,
  FormButton,
  MakeOfferText,
  ItemText,
  NameNFT,
  NumberText,
  NFTImg,
  NFTImgCol,
  NFTImgCol1,
  NFTImgCol2,
  NFTImgCol3,
  NFTImgCol4,
  AllNftUser,
  ButtonAddNFT,
  Plus,
  TextAllNFT,
  ButtonClear,
  CollectionNFT,
  CollectionNFTImg,
  CollectionNftText,
  UNDText,
  Name,
  CollectionNFTTwo,
  CollectionNftTextRight,
  UNDTextRight,
  NameRight,
  Slider,
  BtnRight,
  BtnLeft,
  SliderLine,
  OfferDiv,
  PriceText,
  BlockBtnAmmount,
  EthText,
} from "./TabsNFT.styles";

const TabsNFT = () => {
  const [showCategory] = useState(false);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Tabs defaultActiveKey="second">
      <Tab eventKey="profile" title={<span><i className="profile-icon tab-icon"/></span>}>
        <ReturneText>Returne #204</ReturneText>
        <SpanSale>Sale ends April 4, 2022 at 6:02pm EET</SpanSale>
        <InputTypeYourBid placeholder="Type Your Bid"></InputTypeYourBid>
        <ButtonRentSale>Buy now</ButtonRentSale>
        <ButtonBid>Make a Bid</ButtonBid>
        <RowDown>
            <DivDeposit>
              <DepositText>Price</DepositText>
              <EthereumText>3,000082</EthereumText>
            </DivDeposit>
            <DivPrice>
              <DepositText>Current Bid</DepositText>
              <EthereumText>3,000082</EthereumText>
            </DivPrice>
            <DivPeriod>
              <DepositText>Bid Unit</DepositText>
              <EthereumText>3,000082</EthereumText>
            </DivPeriod>
            <DivLastSales>
              <DepositText>Last Sales</DepositText>
              <EthereumText>3</EthereumText>
            </DivLastSales>
          </RowDown>
      </Tab>
      <Tab eventKey="second" title={<span><i className="profile-icon-shop tab-icon"/></span>}>
        <ReturneText>Returne #204</ReturneText>
        <ButtonRent onClick={(e) => {
                            e.stopPropagation()
                            dispatch(setComponent('buy', 1));
                        }}
                    >Buy now</ButtonRent>
       
        <ButtonOffer onClick={handleShow}
                    >Make offer</ButtonOffer>
                      <Modal className="modal-make-offer" show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                     <MakeOfferText>Make an Offer</MakeOfferText> 
                      </Modal.Header>
                      <Modal.Body>
                         <ItemText>Item</ItemText>   <NumberText>Number of NFTs Selected</NumberText> 5 <br></br>
                         <NameNFT>Name NFT</NameNFT><br></br>
                         <NFTImg src={NFTModal} alt="NFT-image" /> <br></br>   
                         <NFTImgCol src={collection} alt="NFT-image" />
                         <NFTImgCol1 src={collection} alt="NFT-image" /> 
                         <NFTImgCol2 src={collection} alt="NFT-image" /> 
                         <NFTImgCol3 src={collection} alt="NFT-image" /> 
                         <NFTImgCol4 src={collection} alt="NFT-image" />
                         <AllNftUser>All nft user</AllNftUser>
                         <ButtonAddNFT><Plus>+</Plus><TextAllNFT>Add NFTs</TextAllNFT></ButtonAddNFT>
                         <ButtonClear>Clear all</ButtonClear>
                         <CollectionNFT>
                         <CollectionNFTImg src={imageNft} alt="NFT-image" />
                         <CollectionNftText>Collection NFT</CollectionNftText>
                         <UNDText>UND</UNDText>
                         <Name>Name NFT</Name>
                         </CollectionNFT>
                         <CollectionNFTTwo>
                         <CollectionNFTImg src={imageNft} alt="NFT-image" />
                         <CollectionNftTextRight>Collection NFT</CollectionNftTextRight>
                         <UNDTextRight>UND</UNDTextRight>
                         <NameRight>Name NFT</NameRight>
                         </CollectionNFTTwo>
                         <Slider>
                          <BtnRight src={btnLeft} alt="button left" />
                          <SliderLine></SliderLine>
                          <BtnLeft src={btnRight} alt="button right" />
                         </Slider>
                         <OfferDiv>
                           <PriceText>Price</PriceText>
                           <BlockBtnAmmount>
                           <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <EthText>ETH</EthText>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#">-</a>
                              <a className="dropdown-item" href="#">-</a>
                              <a className="dropdown-item" href="#">-</a>
                            </div>
                          </div>
                           </BlockBtnAmmount>
                         </OfferDiv>
                         
                      </Modal.Body>
                      <Modal.Footer>
                          <FormButton onClick={handleClose}>
                          Add  More
                          </FormButton>
                          <FormButton onClick={handleClose}>
                          Save 
                          </FormButton>
                      </Modal.Footer>
            </Modal>
        <RowDown>
            <DivDeposit>
              <DepositText>Price</DepositText>
              <EthereumText>3,000082</EthereumText>
            </DivDeposit>
            <DivPrice>
              <DepositText>Top Offer</DepositText>
              <EthereumText>3,000082</EthereumText>
            </DivPrice>
            <DivPeriod>
              <DepositText></DepositText>
            </DivPeriod>
            <DivLastSales>
              <DepositText>Last Sales</DepositText>
              <EthereumText>3</EthereumText>
            </DivLastSales>
          </RowDown>
      </Tab>
   
      <Tab eventKey="third" title={<span><i className="profile-icon-handshake tab-icon"/></span>}>
        <ReturneText>Returne #204</ReturneText>
        <ButtonRent>Rent</ButtonRent>
        <ButtonOffer>Make offer</ButtonOffer>
        <RowDown>
            <DivDeposit>
              <DepositText>Deposit</DepositText>
              <EthereumText>3,000082</EthereumText>
            </DivDeposit>
            <DivPrice>
              <DepositText>Price a Day</DepositText>
              <EthereumText>3,000082</EthereumText>
            </DivPrice>
            <DivPeriod>
              <DepositText>Period</DepositText>
              <PeriodText>7 d- 30 d</PeriodText>
            </DivPeriod>
            <DivLastSales>
              <DepositText>Last Sales</DepositText>
              <EthereumText>3</EthereumText>
            </DivLastSales>
          </RowDown>
      </Tab>
    </Tabs>
  );
};

export default TabsNFT;
