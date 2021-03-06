import React from "react";
import { useState, useEffect } from "react";

import {
  MakeOfferText,
  ModalNftDiv,
  AddNFTButton,
  AddNFT,
  BodyHead,
  BodyContent,
  SelectedItem,
  MenuSearchWrap,
  Filter,
  FilterItem,
  FilterTitle,
  Arrow,
  FilterMenu,
  MenuItem,
  FilterCollection,
  FilterTitleCollection,
  CheckboxInputAgreement,
  CheckboxLabelAgreement,
  CollectionImage,
  UNDText,
  VerifyImage,
  CollectionBox,
  NFTSelect,
  NFTCard,
  FirstCollumNFT,
  SecondCollumNFT,
  LastCollumNFT,
  NFTImage,
  PriceText,
  CollectionNameNFT,
  NameNFTBox,
  NameNFTText,
  TotalPriceBox,
  EthPrice,
  DollarPrice,
  Add,
  ModalHeader,
  ModalBody,
  ModalContainer,
  ModalFooter,
  FormButtonModal,
  FilterWrapper,
  SortWrap,
} from "./ModalsNFT.styles";

import { collectionImage, verifyImage, nftImage } from "../../imports";

const ModalsNFT: React.FC = () => {
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });
  useEffect(() => {
    console.log(priceFilter);
  }, [active, priceFilter]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <ModalNftDiv>
      <AddNFTButton onClick={handleShow}>
        <AddNFT className="add-btn">+</AddNFT>
      </AddNFTButton>
      <ModalContainer show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <MakeOfferText>All NFTs</MakeOfferText>
        </ModalHeader>
        <ModalBody>
          <BodyHead>
            <SelectedItem>NFTs Selected 10</SelectedItem>
            <FilterWrapper>
              <MenuSearchWrap placeholder="Search" />
              <SortWrap>
                <FilterCollection
                  className={active.event && "collection-active"}
                >
                  <FilterItem
                    onClick={() => {
                      if (!active.event) {
                        setActive({ event: true });
                      } else setActive({ event: false });
                    }}
                  >
                    <FilterTitleCollection>Collection</FilterTitleCollection>
                    <Arrow className={active.event && "collection-active"} />
                  </FilterItem>
                  <FilterMenu className={active.event && "collection-active"}>
                    <MenuItem hover={true}>
                      <CheckboxInputAgreement
                        type="checkbox"
                        id="agreement"
                        className="custom-checkbox"
                      />
                      <CheckboxLabelAgreement htmlFor="agreement">
                        <CollectionBox>
                          <CollectionImage
                            src={collectionImage}
                            alt="collection-image"
                          />
                          Borya Fo...
                          <UNDText>UND</UNDText>
                          <VerifyImage src={verifyImage} alt="verify-image" />
                        </CollectionBox>
                      </CheckboxLabelAgreement>
                    </MenuItem>
                    <MenuItem hover={true}>
                      <CheckboxInputAgreement
                        type="checkbox"
                        id="agreement"
                        className="custom-checkbox"
                      />
                      <CheckboxLabelAgreement htmlFor="agreement">
                        <CollectionBox>
                          <CollectionImage
                            src={collectionImage}
                            alt="collection-image"
                          />
                          Borya Fo...
                          <UNDText>UND</UNDText>
                          <VerifyImage src={verifyImage} alt="verify-image" />
                        </CollectionBox>
                      </CheckboxLabelAgreement>
                    </MenuItem>
                    <MenuItem hover={true}>
                      <CheckboxInputAgreement
                        type="checkbox"
                        id="agreement"
                        className="custom-checkbox"
                      />
                      <CheckboxLabelAgreement htmlFor="agreement">
                        <CollectionBox>
                          <CollectionImage
                            src={collectionImage}
                            alt="collection-image"
                          />
                          Borya Fo...
                          <UNDText>UND</UNDText>
                          <VerifyImage src={verifyImage} alt="verify-image" />
                        </CollectionBox>
                      </CheckboxLabelAgreement>
                    </MenuItem>
                    <MenuItem hover={true}>
                      <CheckboxInputAgreement
                        type="checkbox"
                        id="agreement"
                        className="custom-checkbox"
                      />
                      <CheckboxLabelAgreement htmlFor="agreement">
                        <CollectionBox>
                          <CollectionImage
                            src={collectionImage}
                            alt="collection-image"
                          />
                          Borya Fo...
                          <UNDText>UND</UNDText>
                          <VerifyImage src={verifyImage} alt="verify-image" />
                        </CollectionBox>
                      </CheckboxLabelAgreement>
                    </MenuItem>
                  </FilterMenu>
                </FilterCollection>
                <Filter className={active.price && "sort-active"}>
                  <FilterItem
                    onClick={() => {
                      if (!active.price) {
                        setActive({ price: true });
                      } else setActive({ price: false });
                    }}
                  >
                    <FilterTitle>Sort by</FilterTitle>
                    <Arrow className={active.price && "sort-active"} />
                  </FilterItem>
                  <FilterMenu className={active.price && "sort-active"}>
                    <MenuItem
                      hover={true}
                      onClick={() => {
                        setPriceFilter("low-to-high");
                      }}
                    >
                      <span>Floor price</span>
                    </MenuItem>
                    <MenuItem
                      hover={true}
                      onClick={() => {
                        setPriceFilter("high-to-low");
                      }}
                    >
                      <span>Last activity</span>
                    </MenuItem>
                    <MenuItem
                      hover={true}
                      onClick={() => {
                        setPriceFilter("high-to-low");
                      }}
                    >
                      <span>A - Z</span>
                    </MenuItem>
                    <MenuItem
                      hover={true}
                      onClick={() => {
                        setPriceFilter("high-to-low");
                      }}
                    >
                      <span>Z - A</span>
                    </MenuItem>
                  </FilterMenu>
                </Filter>
              </SortWrap>
            </FilterWrapper>
          </BodyHead>
          <BodyContent>
            <NFTSelect>
              <NFTCard>
                <FirstCollumNFT>
                  <NFTImage src={nftImage} alt="nft-image" />
                  <PriceText>Price</PriceText>
                </FirstCollumNFT>
                <SecondCollumNFT>
                  <CollectionNameNFT>Collection NFT</CollectionNameNFT>
                  <NameNFTBox>
                    <NameNFTText>Name NFT</NameNFTText>
                    <VerifyImage src={verifyImage} alt="verify-image" />
                    <UNDText>UND</UNDText>
                  </NameNFTBox>
                  <TotalPriceBox>
                    <EthPrice>40</EthPrice>
                    <DollarPrice>123 278,00</DollarPrice>
                  </TotalPriceBox>
                </SecondCollumNFT>
                <LastCollumNFT>
                  <Add>+</Add>
                </LastCollumNFT>
              </NFTCard>
              <NFTCard className="selected">
                <FirstCollumNFT>
                  <NFTImage src={nftImage} alt="nft-image" />
                  <PriceText>Price</PriceText>
                </FirstCollumNFT>
                <SecondCollumNFT>
                  <CollectionNameNFT>Collection NFT</CollectionNameNFT>
                  <NameNFTBox>
                    <NameNFTText>Name NFT</NameNFTText>
                    <VerifyImage src={verifyImage} alt="verify-image" />
                    <UNDText>UND</UNDText>
                  </NameNFTBox>
                  <TotalPriceBox>
                    <EthPrice>40</EthPrice>
                    <DollarPrice>123 278,00</DollarPrice>
                  </TotalPriceBox>
                </SecondCollumNFT>
                <LastCollumNFT>
                  <Add className="minus" />
                </LastCollumNFT>
              </NFTCard>
              <NFTCard>
                <FirstCollumNFT>
                  <NFTImage src={nftImage} alt="nft-image" />
                  <PriceText>Price</PriceText>
                </FirstCollumNFT>
                <SecondCollumNFT>
                  <CollectionNameNFT>Collection NFT</CollectionNameNFT>
                  <NameNFTBox>
                    <NameNFTText>Name NFT</NameNFTText>
                    <VerifyImage src={verifyImage} alt="verify-image" />
                    <UNDText>UND</UNDText>
                  </NameNFTBox>
                  <TotalPriceBox>
                    <EthPrice>40</EthPrice>
                    <DollarPrice>123 278,00</DollarPrice>
                  </TotalPriceBox>
                </SecondCollumNFT>
                <LastCollumNFT>
                  <Add>+</Add>
                </LastCollumNFT>
              </NFTCard>
              <NFTCard>
                <FirstCollumNFT>
                  <NFTImage src={nftImage} alt="nft-image" />
                  <PriceText>Price</PriceText>
                </FirstCollumNFT>
                <SecondCollumNFT>
                  <CollectionNameNFT>Collection NFT</CollectionNameNFT>
                  <NameNFTBox>
                    <NameNFTText>Name NFT</NameNFTText>
                    <VerifyImage src={verifyImage} alt="verify-image" />
                    <UNDText>UND</UNDText>
                  </NameNFTBox>
                  <TotalPriceBox>
                    <EthPrice>40</EthPrice>
                    <DollarPrice>123 278,00</DollarPrice>
                  </TotalPriceBox>
                </SecondCollumNFT>
                <LastCollumNFT>
                  <Add>+</Add>
                </LastCollumNFT>
              </NFTCard>
              <NFTCard>
                <FirstCollumNFT>
                  <NFTImage src={nftImage} alt="nft-image" />
                  <PriceText>Price</PriceText>
                </FirstCollumNFT>
                <SecondCollumNFT>
                  <CollectionNameNFT>Collection NFT</CollectionNameNFT>
                  <NameNFTBox>
                    <NameNFTText>Name NFT</NameNFTText>
                    <VerifyImage src={verifyImage} alt="verify-image" />
                    <UNDText>UND</UNDText>
                  </NameNFTBox>
                  <TotalPriceBox>
                    <EthPrice>40</EthPrice>
                    <DollarPrice>123 278,00</DollarPrice>
                  </TotalPriceBox>
                </SecondCollumNFT>
                <LastCollumNFT>
                  <Add>+</Add>
                </LastCollumNFT>
              </NFTCard>
              <NFTCard>
                <FirstCollumNFT>
                  <NFTImage src={nftImage} alt="nft-image" />
                  <PriceText>Price</PriceText>
                </FirstCollumNFT>
                <SecondCollumNFT>
                  <CollectionNameNFT>Collection NFT</CollectionNameNFT>
                  <NameNFTBox>
                    <NameNFTText>Name NFT</NameNFTText>
                    <VerifyImage src={verifyImage} alt="verify-image" />
                    <UNDText>UND</UNDText>
                  </NameNFTBox>
                  <TotalPriceBox>
                    <EthPrice>40</EthPrice>
                    <DollarPrice>123 278,00</DollarPrice>
                  </TotalPriceBox>
                </SecondCollumNFT>
                <LastCollumNFT>
                  <Add>+</Add>
                </LastCollumNFT>
              </NFTCard>
            </NFTSelect>
          </BodyContent>
        </ModalBody>
        <ModalFooter>
          <FormButtonModal className="btn-apply" onClick={handleClose}>
            Apply
          </FormButtonModal>
          <FormButtonModal className="btn-clear" onClick={handleClose}>
            Clear all
          </FormButtonModal>
        </ModalFooter>
      </ModalContainer>
    </ModalNftDiv>
  );
};

export default ModalsNFT;
