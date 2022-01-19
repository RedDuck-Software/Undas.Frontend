import React, { useEffect, useState, useContext } from "react";
import Context from "../../utils/Context";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { BigNumber, BigNumberish, ethers } from "ethers";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import { Marketplace__factory } from "../../typechain";

import { getId } from "../../utils/Functions/getId";
import useStakings from "../../utils/useStakings";

import { CardItem, FilterButtons } from "..";

import { card01, card02, card03 } from "./imports";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineApps,
  MdOutlineGridView,
  MdOutlineSignalWifiStatusbarConnectedNoInternet4,
} from "react-icons/md";
import {
  CardListWrapper,
  CardListHeading,
  CardListResults,
  CardListFilters,
  MenuItem,
  AllItemsDropdown,
  AllItemsButton,
  AllItemsMenu,
  SortByDropdown,
  SortByButton,
  SortByMenu,
  ToggleMarkupContainer,
  ButtonView2x2,
  ButtonView3x3,
  CardsWrapper,
  CardLink,
} from "./CardList.styles";
import { text } from "stream/consumers";

interface CardListProps {
  newFilter?: boolean;
}

interface ItemsProps {
  priceInNum: number;
  id: string;
}

const CardList: React.FC<CardListProps> = ({ newFilter }) => {
  const { connector } = useContext(Context);
  const count = useSelector((state: RootState) => state.NFTsCounter.value);
  console.log(count);

  const items: ItemsProps[] = [];

  const [list, setList] = useState<ItemsProps[]>([]);
  const [itemsMenuShow, setItemsMenuShow] = useState("");
  const [sortByMenuShow, setSortByMenuShow] = useState("");

  const toggleItemsMenuShow = () => {
    if (itemsMenuShow) {
      setItemsMenuShow("");
    } else {
      setItemsMenuShow("active");
    }
  };

  const toggleSortByMenuShow = () => {
    if (sortByMenuShow) {
      setSortByMenuShow("");
    } else {
      setSortByMenuShow("active");
    }
  };

  // let usedStakings = useStakings();
  // let lastIndexData: BigNumberish = 0;
  // const lastIndex = async () => {await usedStakings.then((res) => lastIndexData = res.lastIndex)}

  // const stakings = [];
  // for (let i = 0; i<lastIndexData; i++) {
  const usedStaking = useStakings(0); //for now only 1 staking is showed as Kostia is yet developing suitable _stakings list
  let stakingData:
    | [
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber
      ]
    | undefined = undefined;
  const staking = async () => {
    await usedStaking.then((res) => (stakingData = res.tx));
  };
  // }

  const getListing = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.getListing(itemId);

    return tx;
  };

  const getCards = async () => {
    for (let i = 0; i < count; i++) {
      const CardProps = await getListing(i);

      if (!CardProps) {
        continue;
      }

      const { price } = CardProps;
      const priceInNum = Number(ethers.utils.formatUnits(price, 18));

      let id = getId(i + 1);

      items.push({ priceInNum, id });
    }

    return items;
  };

  useEffect(() => {
    async function getCardsData() {
      const response = await getCards();
      setList(response);
    }

    getCardsData();
  }, []);

  return (
    <CardListWrapper>
      <CardListHeading>
        <CardListResults>{count} results</CardListResults>
        <CardListFilters>
          <AllItemsDropdown>
            <AllItemsButton onClick={toggleItemsMenuShow}>
              All items {itemsMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </AllItemsButton>
            <AllItemsMenu className={itemsMenuShow}>
              <MenuItem>Single Items</MenuItem>
              <MenuItem>Bunbles</MenuItem>
            </AllItemsMenu>
          </AllItemsDropdown>
          <SortByDropdown>
            <SortByButton onClick={toggleSortByMenuShow}>
              Sort by {sortByMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </SortByButton>
            <SortByMenu className={sortByMenuShow}>
              <MenuItem>Recently Created</MenuItem>
              <MenuItem>Recently Sold</MenuItem>
              <MenuItem>Recently Received</MenuItem>
              <MenuItem>Rent NFT</MenuItem>
              <MenuItem>Ending Soon</MenuItem>
              <MenuItem>Price: Low to High</MenuItem>
              <MenuItem>Price: High to Low</MenuItem>
              <MenuItem>Highest Last Sale</MenuItem>
              <MenuItem>Most Viewed</MenuItem>
              <MenuItem>Most Favorited</MenuItem>
              <MenuItem>Oldest</MenuItem>
            </SortByMenu>
          </SortByDropdown>
          <ToggleMarkupContainer>
            <ButtonView2x2>
              <MdOutlineGridView />
            </ButtonView2x2>
            <ButtonView3x3>
              <MdOutlineApps />
            </ButtonView3x3>
          </ToggleMarkupContainer>
        </CardListFilters>
      </CardListHeading>

      {newFilter ? <FilterButtons /> : <></>}

      <CardsWrapper>
        {count ? (
          list.map((item, index) => {
            return (
              <>
                <CardLink to={"/product/" + ++index}>
                  <CardItem
                    key={index}
                    image={card01}
                    price={item.priceInNum}
                    id={item.id}
                  />
                </CardLink>
                <CardLink to={"/product/rent"}>
                  <CardItem
                    key={++index}
                    image={card01}
                    price={stakingData?.[0]!}
                    id={stakingData?.[9].toString()}
                  />
                </CardLink>
              </>
            );
          })
        ) : (
          <span>There is no NFTs on the marketplace</span>
        )}
      </CardsWrapper>
    </CardListWrapper>
  );
};

export default CardList;
