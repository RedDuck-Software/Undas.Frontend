import React, {FC} from 'react'

import {
    OfferMenuWrap,
    OfferFilterWrap,
    FilterButton
} from "./Menu.styles";

import {
    OffResaivedIco,
    OffMadeIco,
} from '../../imports'

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
        </OfferMenuWrap>
    )
}

export default OffersMenu