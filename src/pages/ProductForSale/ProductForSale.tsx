import { useParams } from "react-router-dom";

import {
  SaleSection,
  PriceHistory,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from "./page-components";

import { getId } from "../../utils/getId";

import { Background } from "../../globalStyles";

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  BookmarkButton,
  ProductForSaleSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
  ItemInformation,
  ProductSubtitle,
  ProductTitle,
} from "./ProductForSale.styles";
import Image from "../../images/card-item.png";
import { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";
import { useMoralis } from "react-moralis";
import { operations } from "moralis/types/generated/web3Api";
import { useWeb3React } from "@web3-react/core";
import { id } from "ethers/lib/utils";

const ProductForSale = () => {
  let { id: pageId } = useParams();

  const { connector } = useContext(Context);
  const { Moralis } = useMoralis();
  let { account } = useWeb3React();

  const [NFT, setNFT] = useState<{
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
  }>();

  const getNFTList = async () => {
    if (!connector || !account) return;
    const listOfNFTS = await Moralis.Web3API.account.getNFTs({
      chain: "goerli",
      address: account,
    });
    return listOfNFTS;
  };

  const getListData = async () => {
    const response = await getNFTList();
    if (!response?.result) return;
    console.log(response);
    let nft = response?.result[+id];
    setNFT(nft);
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
    getListData();
  }, [connector, account]);

  return (
    <>
      <Background>
        <ProductForSaleSec>
          <ProductContainer>
            <LeftSide>
              <CardImageContainer>
                <ItemInformation mobile>
                  <ProductTitle>{}</ProductTitle>
                </ItemInformation>
                <CardImage src={Image} />
                <BookmarkButton>10</BookmarkButton>
              </CardImageContainer>
            </LeftSide>
            <RightSide>
              <ItemInformation>
                <ProductTitle>{}</ProductTitle>
              </ItemInformation>
              <SaleSection itemId={pageId!} />
              <Staking itemId={pageId!} />
            </RightSide>
          </ProductContainer>
        </ProductForSaleSec>
      </Background>
    </>
  );
};

export default ProductForSale;
