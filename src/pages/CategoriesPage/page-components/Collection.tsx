import React, {FC} from 'react'
import {
    CollectionCard,
    AuthorWrap,
    CollectionBackground,
    CollectionPicWrap,
    CollectionText, NFTCards,
    Platform,
    Wrapper
} from "../Categories.styles";
import {CollectionBG, CollectionPic, NFT1, NFT2, NFT3, Verified} from "../imports";


const Collection:FC = () => {
    return (
        <CollectionCard>
            <CollectionBackground src={CollectionBG} alt="collection-bg"/>
            <AuthorWrap>
                <CollectionPicWrap>
                    <img src={CollectionPic} alt="collection-pic"/>
                </CollectionPicWrap>
                {/*CategoriesPage name*/}
                <div>
                    <Wrapper disp="flex" alignItems="center" gap="10px" marg="0 20px 0 0">
                        <CollectionText fs="14px">Borya Borya</CollectionText>
                        <img src={Verified} alt="verified-ico"/>
                        <Platform>UND</Platform>
                    </Wrapper>
                    <CollectionText>by Borya Borya</CollectionText>
                </div>
                <Wrapper disp="flex" mw="320px" marg="0 0 0 auto">
                    <CollectionText lh="15px" padd="5px 0">
                        If you believe in the future of DeFi, then you believein the future of rekt.news. Each auction winner will also be sent ...
                    </CollectionText>
                </Wrapper>
            </AuthorWrap>
            <Wrapper disp="flex" gap="15px">
                <NFTCards>
                    <img src={NFT1} alt="nft-card"/>
                </NFTCards>
                <NFTCards>
                    <img src={NFT2} alt="nft-card"/>
                </NFTCards>
                <NFTCards>
                    <img src={NFT3} alt="nft-card"/>
                </NFTCards>
            </Wrapper>
        </CollectionCard>
    )
}

export default Collection