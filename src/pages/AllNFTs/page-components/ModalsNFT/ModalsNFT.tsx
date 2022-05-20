import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";

import "./TabsNFTModal.css";
import { NFTModal, collection, imageNft, btnLeft, btnRight } from "./imports";
import {
  ButtonOffer,
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
  AmmountInput,
  SumUSD,
  USDText,
  DayText,
  PmAmText,
  TimeText,
  CheckboxInput,
  CheckboxLabel,
  LinkAgreement,
  ModalNftDiv,
} from "./ModalsNFT.styles";

const ModalsNFT: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <ModalNftDiv>
      <ButtonOffer onClick={handleShow}>Make offer</ButtonOffer>
      <Modal className="modal-make-offer" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <MakeOfferText>Make an Offer</MakeOfferText>
        </Modal.Header>
        <Modal.Body>
          <ItemText>Item</ItemText>
          <NumberText>Number of NFTs Selected</NumberText> 5 <br></br>
          <NameNFT>Name NFT</NameNFT>
          <br></br>
          <NFTImg src={NFTModal} alt="NFT-image" /> <br></br>
          <NFTImgCol src={collection} alt="NFT-image" />
          <NFTImgCol1 src={collection} alt="NFT-image" />
          <NFTImgCol2 src={collection} alt="NFT-image" />
          <NFTImgCol3 src={collection} alt="NFT-image" />
          <NFTImgCol4 src={collection} alt="NFT-image" />
          <AllNftUser>All nft user</AllNftUser>
          <ButtonAddNFT>
            <Plus>+</Plus>
            <TextAllNFT>Add NFTs</TextAllNFT>
          </ButtonAddNFT>
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
                <button
                  className="btn btn-secondary dropdown-toggle btn-dropdown"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <EthText>ETH</EthText>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    -
                  </a>
                  <a className="dropdown-item" href="#">
                    -
                  </a>
                  <a className="dropdown-item" href="#">
                    -
                  </a>
                </div>
              </div>
              <AmmountInput placeholder="Ammount"></AmmountInput>
              <SumUSD>
                <USDText>0.00</USDText>
              </SumUSD>
            </BlockBtnAmmount>
            <PriceText>Offer Exriration</PriceText>
            <BlockBtnAmmount>
              <div className="dropdown-day dropdown ">
                <button
                  className="dropdown-toggle-day btn btn-secondary dropdown-toggle btn-dropdown"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <DayText>3 day</DayText>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    1 days
                  </a>
                  <a className="dropdown-item" href="#">
                    3 days
                  </a>
                  <a className="dropdown-item" href="#">
                    7 days
                  </a>
                  <a className="dropdown-item" href="#">
                    1 month
                  </a>
                  <a className="dropdown-item" href="#">
                    Custom date
                  </a>
                </div>
              </div>
              <SumUSD>
                <TimeText>06 : 35</TimeText>
                <PmAmText>PM</PmAmText>
              </SumUSD>
            </BlockBtnAmmount>
            <CheckboxInput
              type="checkbox"
              id="poject"
              className="custom-checkbox"
            />
            <CheckboxLabel htmlFor="poject">
              I agree to the platform{" "}
              <LinkAgreement> agreement ...</LinkAgreement>
            </CheckboxLabel>
          </OfferDiv>
        </Modal.Body>
        <Modal.Footer>
          <FormButton className="btn-make-offer" onClick={handleClose}>
            Make Offer
          </FormButton>
          <FormButton className="btn-convert" onClick={handleClose}>
            Convert ETH
          </FormButton>
        </Modal.Footer>
      </Modal>
    </ModalNftDiv>
  );
};

export default ModalsNFT;
