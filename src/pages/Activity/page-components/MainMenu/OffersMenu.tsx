import React, {FC} from 'react'

import {
    OfferMenuWrap,
    OffersWrapTable,
    ItemIcon,
    ItemName,
    OffersTdText,
    ActionText,
    CollectionName,
    UNDText,
    UND,
    USDPrise,
    QuantityText,
    TimeText,
    PriceTextW,
} from "./Menu.styles";

import {
    ItemImg,
    ItemVerifyIco
} from '../../imports'
import {
    OffersTr,
    OffersTd,
    OffersHeadTr,
    OffersText,
    EtherIcon
} from "../../../NFTPage/page-components/Accordion/Accordion.styles";

import {
    PriceText
} from '../../../NFTPage/NFTPage.styles';

const OffersMenu:FC = () => {
    return (
        <OfferMenuWrap>
     
            <OffersWrapTable >
                <OffersHeadTr className='offers-menu-head'>
                    <OffersTd className='first-column'></OffersTd>
                    <OffersTd>Item</OffersTd>
                    <OffersTd><PriceTextW>Price</PriceTextW></OffersTd>
                    <OffersTd><QuantityText>Quantity</QuantityText></OffersTd>
                    <OffersTd>From</OffersTd>
                    <OffersTd>To</OffersTd>
                    <OffersTd><TimeText>Time</TimeText></OffersTd>
                </OffersHeadTr>
                <OffersTr className='offers-menu-row'>
                    <OffersTdText className='first-column'>
                        <ActionText>Offer</ActionText>
                    </OffersTdText>
                    <OffersTdText className='offers-table-item'>
                        <ItemIcon>
                            <img src={ItemImg} alt="item image" className='offers-item-image'/>
                        </ItemIcon>
                        <ItemName>Name NFT</ItemName>
                        <CollectionName>Name Collection...</CollectionName>
                        <UNDText><ItemVerifyIco /><UND>UND</UND></UNDText>
                    </OffersTdText>
                    <OffersTdText>
                        <PriceTextW> 
                            <EtherIcon />
                            <PriceText>13,0</PriceText>
                            <USDPrise>44 456,04</USDPrise>
                        </PriceTextW>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><QuantityText>1</QuantityText></OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><TimeText>24 seconds ago</TimeText></OffersText>
                    </OffersTdText>
                </OffersTr>
                <OffersTr className='offers-menu-row'>
                    <OffersTdText className='first-column'>
                        <ActionText>List</ActionText>
                    </OffersTdText>
                    <OffersTdText className='offers-table-item'>
                    <ItemIcon>
                            <img src={ItemImg} alt="item image" className='offers-item-image'/>
                        </ItemIcon>
                        <ItemName>Name NFT</ItemName>
                        <CollectionName>Name Collection...</CollectionName>
                        <UNDText><ItemVerifyIco /><UND>UND</UND></UNDText>
                    </OffersTdText>
                    <OffersTdText>
                        <PriceTextW> 
                            <EtherIcon />
                            <PriceText>13,0</PriceText>
                            <USDPrise>44 456,04</USDPrise>
                        </PriceTextW>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><QuantityText>1</QuantityText></OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><TimeText>24 seconds ago</TimeText></OffersText>
                    </OffersTdText>
                </OffersTr>
                <OffersTr className='offers-menu-row'>
                    <OffersTdText className='first-column'>
                        <ActionText>Rent</ActionText>
                    </OffersTdText>
                    <OffersTdText className='offers-table-item'> 
                    <ItemIcon>
                            <img src={ItemImg} alt="item image" className='offers-item-image'/>
                        </ItemIcon>
                        <ItemName>Name NFT</ItemName>
                        <CollectionName>Name Collection...</CollectionName>
                        <UNDText><ItemVerifyIco /><UND>UND</UND></UNDText>
                    </OffersTdText>
                    <OffersTdText>
                        <PriceTextW> 
                            <EtherIcon />
                            <PriceText>13,0</PriceText>
                            <USDPrise>44 456,04</USDPrise>
                        </PriceTextW>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><QuantityText>1</QuantityText></OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><TimeText>24 seconds ago</TimeText></OffersText>
                    </OffersTdText>
                </OffersTr>
                <OffersTr className='offers-menu-row'>
                    <OffersTdText className='first-column'>
                        <ActionText>Sale</ActionText>
                    </OffersTdText>
                    <OffersTdText className='offers-table-item'> 
                    <ItemIcon>
                        <img src={ItemImg} alt="item image" className='offers-item-image'/>
                        </ItemIcon>
                        <ItemName>Name NFT</ItemName>
                        <CollectionName>Name Collection...</CollectionName>
                        <UNDText><ItemVerifyIco /><UND>UND</UND></UNDText>
                    </OffersTdText>
                    <OffersTdText>
                        <PriceTextW> 
                            <EtherIcon />
                            <PriceText>13,0</PriceText>
                            <USDPrise>44 456,04</USDPrise>
                        </PriceTextW>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><QuantityText>1</QuantityText></OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><TimeText>24 seconds ago</TimeText></OffersText>
                    </OffersTdText>
                </OffersTr>
                <OffersTr className='offers-menu-row'>
                    <OffersTdText className='first-column'>
                        <ActionText>Minted</ActionText>
                    </OffersTdText>
                    <OffersTdText className='offers-table-item'> 
                    <ItemIcon>
                        <img src={ItemImg} alt="item image" className='offers-item-image'/>
                        </ItemIcon>
                        <ItemName>Name NFT</ItemName>
                        <CollectionName>Name Collection...</CollectionName>
                        <UNDText><ItemVerifyIco /><UND>UND</UND></UNDText>
                    </OffersTdText>
                    <OffersTdText>
                        <PriceTextW> 
                            <EtherIcon />
                            <PriceText>13,0</PriceText>
                            <USDPrise>44 456,04</USDPrise>
                        </PriceTextW>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><QuantityText>1</QuantityText></OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText><TimeText>24 seconds ago</TimeText></OffersText>
                    </OffersTdText>
                </OffersTr>
            </OffersWrapTable>
        </OfferMenuWrap>
        
    )
}

export default OffersMenu