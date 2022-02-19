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

import GreyBackground from "../../images/image-account/account01.png";
import ProfileImage from "../../images/image-account/profile-image.png";

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

  const [NFTList, setNFTList] =
    useState<
      operations["getNFTs"]["responses"]["200"]["content"]["application/json"]
    >();

  cookies.set("account", account, {
    path: "/",
    maxAge: 3600,
    sameSite: "lax",
    // secure: true,
  });

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
    console.log(response);
    setNFTList(response);
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
      <AccoutBackground src={GreyBackground} />
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
              {NFTList?.result?.map((item) => {
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
