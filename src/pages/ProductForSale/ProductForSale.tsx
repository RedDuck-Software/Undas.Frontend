import { useWeb3React } from '@web3-react/core';
import { id } from 'ethers/lib/utils';
import React, { useContext, useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useParams } from 'react-router-dom';

import { SaleSection, Staking } from './page-components';
import {
  LeftSide,
  CardImageContainer,
  CardImage,
  BookmarkButton,
  ProductForSaleSec,
  ProductContainer,
  RightSide,
  ItemInformation,
  ProductTitle,
} from './ProductForSale.styles';

import { Background } from '../../globalStyles';
import Image from '../../images/card-item.png';
import Context from '../../utils/Context';

const ProductForSale: React.FC = () => {
  const { id: pageId } = useParams();

  const { connector } = useContext(Context);
  const { Moralis } = useMoralis();
  const { account } = useWeb3React();

  const [, setNFT] = useState<{
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
      chain: 'goerli',
      address: account,
    });
    return listOfNFTS;
  };

  const getListData = async () => {
    const response = await getNFTList();
    if (!response?.result) return;
    console.log(response);
    const nft = response?.result[+id];
    setNFT(nft);
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log('loading');
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
