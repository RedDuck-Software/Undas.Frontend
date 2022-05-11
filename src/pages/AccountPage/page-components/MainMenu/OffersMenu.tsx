import React, {FC} from 'react'

import {
    OfferMenuWrap,
    OfferFilterWrap,
    FilterButton,
    OffersWrapTable,
    ItemIcon,
    ItemName,
    OffersTooltip,
    OffersTooltipWrap,
    OffersTdText,
    AcceptBTN,
    MakeOfferBTN,
    DenyBTN,
    WethText,
    PriceTextETH,
    SelectedFilters,
    Filter,
    FilterImg,
    FilterName,
    FilterClose,
    ClearAll,
} from "./Menu.styles";

import {
    OffResaivedIco,
    OffMadeIco,
    ItemImg,
    ItemVerifyIco,
    filter,
    close,
} from '../../imports'
import {
    OffersTr,
    OffersTd,
    OffersHeadTr,
    OffersText,
    EtherIcon
} from "../../../NFTPage/page-components/Accordion/Accordion.styles";

import {CartIco, EthIco, HandShakeIco} from "../../../NFTPage/imports";

import {
    PriceText
} from '../../../NFTPage/NFTPage.styles';

const OffersMenu:FC = () => {
    return (
        <OfferMenuWrap>
            <OfferFilterWrap>
                <FilterButton className="offers-active">
                    <OffResaivedIco />
                    Offers Resaived
                </FilterButton>
                <FilterButton>
                    Offers Made
                    <OffMadeIco />
                </FilterButton>
            </OfferFilterWrap>
            <SelectedFilters>
                <Filter>
                <FilterImg src={filter} alt="filter-image"/>
                <FilterName>Borya Fo...</FilterName>
                <FilterClose src={close} alt="close"/>
                </Filter>
               <ClearAll>Clear All</ClearAll> 
            </SelectedFilters>
            <OffersWrapTable >
                <OffersHeadTr className='offers-menu-head'>
                    <OffersTd className='first-column'></OffersTd>
                    <OffersTd>Item</OffersTd>
                    <OffersTd>Price</OffersTd>
                    <OffersTd>Expiration</OffersTd>
                    <OffersTd>Fromа</OffersTd>
                    <OffersTd></OffersTd>
                    <OffersTd></OffersTd>
                    <OffersTd></OffersTd>
                </OffersHeadTr>
                <OffersTr className='offers-menu-row'>
                    <OffersTdText className='first-column'>
                        <HandShakeIco />
                        <OffersTooltipWrap className='offers-tooltip'>
                        <OffersTooltip>Rent</OffersTooltip>
                        </OffersTooltipWrap>
                    </OffersTdText>
                    <OffersTdText className='offers-table-item'>
                        <ItemIcon>
                            <img src={ItemImg} alt="item image" className='offers-item-image'/>
                        </ItemIcon>
                        <ItemName>Name</ItemName>
                        <ItemVerifyIco />
                    </OffersTdText>
                    <OffersTdText>
                        <PriceTextETH>1,2</PriceTextETH>
                        <WethText>WETH</WethText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText>In 20 hours</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <AcceptBTN>Accept</AcceptBTN>
                    </OffersTdText>
                    <OffersTdText>
                        <MakeOfferBTN>Make offer</MakeOfferBTN>
                    </OffersTdText>
                    <OffersTdText>
                        <DenyBTN>Deny</DenyBTN>
                    </OffersTdText>
                </OffersTr>
                <OffersTr className='offers-menu-row'>
                    <OffersTdText className='first-column'>
                        <CartIco />
                        <OffersTooltipWrap className='offers-tooltip'>
                        <OffersTooltip>Rent</OffersTooltip>
                        </OffersTooltipWrap>
                    </OffersTdText>
                    <OffersTdText className='offers-table-item'>
                        <ItemIcon>
                            <img src={ItemImg} alt="item icon" />
                        </ItemIcon>
                        <ItemName>Name</ItemName>
                    </OffersTdText>
                    <OffersTdText>
                        <PriceTextETH>1,2</PriceTextETH>
                        <WethText>WETH</WethText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText>In 20 hours</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <AcceptBTN>Accept</AcceptBTN>
                    </OffersTdText>
                    <OffersTdText>
                        <MakeOfferBTN>Make offer</MakeOfferBTN>
                    </OffersTdText>
                    <OffersTdText>
                        <DenyBTN>Deny</DenyBTN>
                    </OffersTdText>
                </OffersTr>
                <OffersTr className='offers-menu-row'>
                    <OffersTdText className='first-column'>
                        <HandShakeIco />
                        <OffersTooltipWrap className='offers-tooltip'>
                        <OffersTooltip>Rent</OffersTooltip>
                        </OffersTooltipWrap>
                    </OffersTdText>
                    <OffersTdText className='offers-table-item'> 
                        <ItemIcon>
                            <img src={ItemImg} alt="item icon" />
                        </ItemIcon>
                        <ItemName>Name</ItemName>
                    </OffersTdText>
                    <OffersTdText>
                        <PriceTextETH>1,2</PriceTextETH>
                        <WethText>WETH</WethText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText>In 20 hours</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <OffersText color="#5D3F92">65BA4F</OffersText>
                    </OffersTdText>
                    <OffersTdText>
                        <AcceptBTN>Accept</AcceptBTN>
                    </OffersTdText>
                    <OffersTdText>
                        <MakeOfferBTN>Make offer</MakeOfferBTN>
                    </OffersTdText>
                    <OffersTdText>
                        <DenyBTN>Deny</DenyBTN>
                    </OffersTdText>
                </OffersTr>
            </OffersWrapTable>
        </OfferMenuWrap>
        
    )
}

export default OffersMenu