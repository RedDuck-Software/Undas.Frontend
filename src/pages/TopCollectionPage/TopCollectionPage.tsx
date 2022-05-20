import { useWeb3React } from '@web3-react/core';
import React, { useContext, useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';

import OffersMenu from './page-components/MainMenu/OffersMenu';
import { AccountContainer, StatisticsText } from './TopCollectionPage.styles';

import ASideFilter from '../../components/ASideFilter/ASideFilter';
import Context from '../../utils/Context';
import { Wrapper } from '../CategoriesPage/Categories.styles';

const TopCollectionPage: React.FC = () => {
  const { account } = useWeb3React();

  const { connector } = useContext(Context);
  const { Moralis } = useMoralis();

  const [, setNFTList] = useState<
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
      chain: 'goerli',
      address: account,
    });
    return listOfNFTS;
  };

  const getListData = async () => {
    const response = await getNFTList();
    if (!response?.result) return;

    // deleting duplicates because of moralis bug (see https://forum.moralis.io/t/api-returns-duplicate-when-using-getnftowners/5523)
    response.result = response.result.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.token_id === value.token_id),
    );
    setNFTList(response.result);
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log('loading');
    }
    getListData();
  }, [connector, account]);

  return (
    <>
      <Wrapper w="100%">
        <AccountContainer>
          <ASideFilter marginTop="140px" />
          <Wrapper w="100%">
            <Wrapper w="100%" marg="15px 0 0 0">
              <StatisticsText>Top Collection</StatisticsText>
              <OffersMenu />
            </Wrapper>
          </Wrapper>
        </AccountContainer>
      </Wrapper>
    </>
  );
};

export default TopCollectionPage;
