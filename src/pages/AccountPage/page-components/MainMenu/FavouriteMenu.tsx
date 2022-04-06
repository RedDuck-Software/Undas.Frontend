import React, {FC, useState} from 'react'
import {
    Arrow,
    Filter,
    FilterItem, FilterMenu, FilterTitle, Input, MenuItem, MenuSearchWrap, MenuWrap, SearchIco,
    SettingsBlock,
    SettingsElement,
    ViewButton,
    ViewOption,
    ResultsTotal
} from "../../../AllNFTs/AllNFTs.styles";
import {GridIco, ListIco} from "../../../AllNFTs/imports";
import {FavouriteButton, FavouriteSelect} from "./Menu.styles";

const FavouriteMenu: FC = () => {
    const [active, setActive] = useState<any>({
        price: false,
        event: false,
    });
    return (
        <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
            <SettingsBlock>
                <FavouriteSelect>
                    <FavouriteButton className="favourite-active">Favourite NFTs</FavouriteButton>
                    <FavouriteButton>Favourite Collections</FavouriteButton>
                </FavouriteSelect>
                <SettingsElement>
                </SettingsElement>
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
            </SettingsBlock>
            <MenuSearchWrap mw="530px" marginLeft="0">
                <SearchIco />
                <Input />
            </MenuSearchWrap>
            <ResultsTotal>4</ResultsTotal>
        </MenuWrap>
    )
}

export default FavouriteMenu