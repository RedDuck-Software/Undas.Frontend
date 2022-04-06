import React, {FC, useState} from 'react'
import {
    Arrow,
    Filter, FilterItem, FilterMenu, FilterTitle, Input, MenuItem, MenuSearchWrap,
    MenuWrap, SearchIco,
    SettingsBlock,
    SettingsElement,
    ViewButton,
    ViewOption,
    ResultsTotal
} from "../../../AllNFTs/AllNFTs.styles";
import {
    FavouriteSelect,
    FavouriteButton
} from './Menu.styles'
import {GridIco, ListIco} from "../../../AllNFTs/imports";

const MainMenu:FC = () => {
    const [active, setActive] = useState<any>({
        price: false,
        event: false,
    });
    return (
        <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
            <SettingsBlock>
                <SettingsElement>
                    <ViewOption>
                        <ViewButton className="grid-active">
                            <GridIco />
                        </ViewButton>
                        <ViewButton>
                            <ListIco />
                        </ViewButton>
                    </ViewOption>
                </SettingsElement>
                <Filter className={active.price && "price-active"}>
                    <FilterItem
                        onClick={() => {
                            if (!active.price) {
                                setActive({ price: true });
                            } else setActive({ price: false });
                        }}
                    >
                        <FilterTitle>Sort by Price</FilterTitle>
                        <Arrow className={active.price && "price-active"} />
                    </FilterItem>
                    <FilterMenu className={active.price && "price-active"}>
                        <MenuItem hover={true}>
                            <span>Price: Low to High</span>
                        </MenuItem>
                        <MenuItem hover={true}>
                            <span>Price: High to Low</span>
                        </MenuItem>
                    </FilterMenu>
                </Filter>
                <Filter className={active.event && "event-active"}>
                    <FilterItem
                        onClick={() => {
                            if (!active.event) {
                                setActive({ event: true });
                            } else setActive({ event: false });
                        }}
                    >
                        <FilterTitle>Sort by Event</FilterTitle>
                        <Arrow className={active.event && "event-active"} />
                    </FilterItem>
                    <FilterMenu className={active.event && "event-active"}>
                        <MenuItem hover={true}>
                            <span>Newly Created</span>
                        </MenuItem>
                        <MenuItem hover={true}>
                            <span>Recently Sold</span>
                        </MenuItem>
                        <MenuItem hover={true}>
                            <span>Recently Posted</span>
                        </MenuItem>
                        <MenuItem hover={true}>
                            <span>Recently Staking</span>
                        </MenuItem>
                    </FilterMenu>
                </Filter>
            </SettingsBlock>
            <MenuSearchWrap>
                <SearchIco />
                <Input />
            </MenuSearchWrap>
            <ResultsTotal>4</ResultsTotal>
        </MenuWrap>
    )
}

export default MainMenu