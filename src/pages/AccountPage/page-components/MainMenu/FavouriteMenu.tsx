import React, {FC, useState, useContext, useEffect} from 'react'
import {
    Arrow,
    Filter,
    FilterItem, FilterMenu, FilterTitle, Input, MenuItem, MenuSearchWrap, MenuWrap, SearchIco,
    SettingsBlock,
    SettingsElement,
    ViewButton,
    ViewOption,
    ResultsTotal,
    GridLayout,
} from "../../../AllNFTs/AllNFTs.styles";
import {GridIco, ListIco} from "../../../AllNFTs/imports";
import {FavouriteButton, FavouriteSelect} from "./Menu.styles";
import NFTGrid from "../../../../components/NFTCard/Grid/NFTGrid";
import { FavouriteWrap } from '../../AccountPage.styles';
import Context from "../../../../utils/Context";
import {useMoralis} from "react-moralis";
import {Navigate} from "react-router-dom";
import {useWeb3React} from "@web3-react/core";
import CardLineNFT from "../../../AllNFTs/page-components/CardLineNFT/CardLineNFT";
import FavouriteTable from './FavouriteTable/FavouriteTable';

const FavouriteMenu: FC = () => {
    const [active, setActive] = useState<any>({
        price: false,
        event: false,
    });

    let { account, deactivate } = useWeb3React();
    const { connector } = useContext(Context);
    const { Moralis } = useMoralis();

    const [NFTList, setNFTList] = useState<
        {
            token_address: string;
            token_id: string;
            contract_type: string;
            owner_of: string;
            block_number: string;
            block_number_minted: string;
            token_uri?: string | undefined;
            metadata?: string | undefined;
            synced_at?: string | undefined;
            amount?: string | undefined;
            name: string;
            symbol: string;
        }[]
        >();

    const getNFTList = async () => {
        if (!connector || !account) return;
        const listOfNFTS = await Moralis.Web3API.account.getNFTs({
            chain: "goerli",
            address: account,
        });
        return listOfNFTS;
    };

    const getAccountData = async () => {};
    const getListData = async () => {
        const response = await getNFTList();
        if (!response?.result) return;

        //deleting duplicates because of moralis bug (see https://forum.moralis.io/t/api-returns-duplicate-when-using-getnftowners/5523)
        response.result = response.result.filter(
            (value, index, self) =>
                index === self.findIndex((t) => t.token_id === value.token_id)
        );
        setNFTList(response.result);
    };

    useEffect(() => {
        if (!connector || !account) {
            return console.log("loading");
        }
        getListData();
    }, [connector, account]);

    if (!account) {
        return <Navigate to={"/login"} replace={true} />;
    }

    function disconnect() {
        localStorage.removeItem("connector");
        deactivate();
    }

    return (
        <FavouriteWrap>
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

        <GridLayout>
            <NFTGrid
             tokenId={2}
             URI={'assdf'}
             name={'item.name1'}
            />
               {NFTList?.map((item) => {
               })}

            <NFTGrid
             tokenId={2}
             URI={'assdf'}
             name={'item.name2'}
            />
               {NFTList?.map((item) => {
               })}

            <NFTGrid
             tokenId={2}
             URI={'assdf'}
             name={'item.name3'}
            />
               {NFTList?.map((item) => {
               })}

            <NFTGrid
             tokenId={2}
             URI={'assdf'}
             name={'item.name4'}
            />
               {NFTList?.map((item) => {
               })}

            <NFTGrid
             tokenId={2}
             URI={'assdf'}
             name={'item.name5'}
            />
               {NFTList?.map((item) => {
               })}

            <NFTGrid
             tokenId={2}
             URI={'assdf'}
             name={'item.name6'}
            />
               {NFTList?.map((item) => {
               })}

            <NFTGrid
             tokenId={2}
             URI={'assdf'}
             name={'item.name7'}
            />
               {NFTList?.map((item) => {
               })}

            <NFTGrid
             tokenId={2}
             URI={'assdf'}
             name={'item.name8'}
            />
               {NFTList?.map((item) => {
               })}
        </GridLayout>
        <CardLineNFT/>
        <CardLineNFT/>
        <CardLineNFT/>
        <FavouriteTable/>
        
    </FavouriteWrap>
    )
}

export default FavouriteMenu