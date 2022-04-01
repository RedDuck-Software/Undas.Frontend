import { MdOutlineApps, MdOutlineGridView } from "react-icons/md";
import { RiPaintBrushFill } from "react-icons/ri";
import {
  BsHeart,
  BsEyeSlash,
  BsClockHistory,
  BsFillTagFill,
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import { CardItem } from "../../components";

import { card01, card02, card03, card04 } from "./imports";

import { Container, Background, Button } from "../../globalStyles";

import {
  AccoutBackground,
  AccountSec,
  AccountInformation,
  AccountImage,
  AccountName,
  AccountAddress,
  AccountJoined,
  AccountMenu,
  AccountMenuWrapper,
  AccountMenuItem,
  AccountPageContent,
  AccountPageContentHeader,
  AccountSearchWrapper,
  SearchIcon,
  SearchInput,
  AccountDropdown,
  ButtonsWrapper,
  ButtonView2x2,
  ButtonView3x3,
  AccountCardsWrapper,
} from "./AccountPage.styles";
import { useWeb3React } from "@web3-react/core";
import Cookies from "universal-cookie";
import { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";
import { operations } from "moralis/types/generated/web3Api";
import { CardLink } from "../../components/CardList/CardList.styles";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

const AccountPage = () => {
  const cookies = new Cookies();
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

  const getListData = async () => {
    const response = await getNFTList();
    if (!response?.result) return;

    //deleting duplicates because of moralis bug (see https://forum.moralis.io/t/api-returns-duplicate-when-using-getnftowners/5523)
    response.result = response.result.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.token_id === value.token_id)
    );
    console.log(response.result);
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
    <Background>
      <AccoutBackground />
      <AccountSec>
        <Container>
          <AccountInformation>
            <AccountAddress
              onClick={() => {
                navigator.clipboard.writeText(account as string);
              }}
            >
              {account}
            </AccountAddress>
            <Button onClick={() => disconnect()}>Sign out</Button>
          </AccountInformation>
        </Container>
        <Container>
          <AccountPageContent>
            <AccountPageContentHeader>
              {/* <AccountDropdown>
                Single items <IoIosArrowDown />
              </AccountDropdown>
              <AccountDropdown>
                Recently Received <IoIosArrowDown />
              </AccountDropdown>
              <ButtonsWrapper>
                <ButtonView2x2>
                  <MdOutlineGridView />
                </ButtonView2x2>
                <ButtonView3x3>
                  <MdOutlineApps />
                </ButtonView3x3>
              </ButtonsWrapper> */}
            </AccountPageContentHeader>
            <AccountCardsWrapper>
              {NFTList?.map((item) => {
                return (
                  <CardLink
                    key={item.token_id}
                    to={"/productforsale/" + item.token_id}
                  >
                    <CardItem
                      image={item.token_uri}
                      name={item.token_id}
                      price={1}
                    />
                  </CardLink>
                );
              })}
            </AccountCardsWrapper>
          </AccountPageContent>
        </Container>
      </AccountSec>
    </Background>
  );
};

export default AccountPage;
