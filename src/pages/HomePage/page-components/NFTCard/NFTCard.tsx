import React, {FC} from 'react'
import NFTImage from '../../../../images/image-home/NFT1.png'
import CollectionPrev from '../../../../images/image-home/colleciton-small.png'
import {
    NFTWrap,
    Image,
    NFTAbout,
    Name,
    BtnNone,
    CollectionImageWrap
} from "./NFTCard.styles";
import {CollectionText, Platform, Wrapper} from "../../../CategoriesPage/Categories.styles";
import {Verified} from "../../../CategoriesPage/imports";
import {ReactComponent as FavoriteIco} from '../../../../icons/NFT-favorite.svg'

const NFTCard = () => {
    return (
        <NFTWrap>
            <Image src={NFTImage} alt="nft-image"/>
            <NFTAbout>
                <Wrapper disp="flex" justifyContent="space-between">
                    <Wrapper disp="flex" alignItems="center" gap="10px" marg="0 20px 0 0">
                        <Name>NFT Name</Name>
                        <img src={Verified} alt="verified-ico"/>
                        <Platform>UND</Platform>
                    </Wrapper>
                    <BtnNone>
                        <FavoriteIco />
                    </BtnNone>
                </Wrapper>
                <Wrapper disp="flex" gap="10px" alignItems="center">
                    <CollectionImageWrap>
                        <img src={CollectionPrev} alt="collection-prev"/>
                    </CollectionImageWrap>
                    <CollectionText fs="18px">Collection</CollectionText>
                    <img src={Verified} alt="verified-ico"/>
                    <Platform>UND</Platform>
                </Wrapper>
            </NFTAbout>
        </NFTWrap>
    )
}

export default NFTCard