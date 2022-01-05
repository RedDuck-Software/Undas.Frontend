import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import Image from '../../../../images/card-item.png';

import { Button } from '../../../../globalStyles';

import {
  PlaceAuctionWrapper,
  PlaceAuctionButton,
  PlaceAuctionDropdown,
  DropdownLine,
  DropdownPrice,
  DropdownInput,
  DropdownButton,
  PlaceAuctionMenu,
  MenuTop,
  ItemImage,
  AuctionDescription,
  MenuLine,
  MenuPrice,
  MenuAuctionFinish,
  MenuTerm,
  MenuAgreementLine,
  MenuInput,
  AgreementLink,
  MenuButtonsWrapper,
} from './PlaceAuction.styles';

const PlaceAuction = () => {
  const [isDropdownOpen, setDropdown] = useState(false);
  const [isMenuShown, setMenu] = useState(false);
  const [isButtonsActive, setButtons] = useState('disabled');

  const toogleDropdown = () => {
    setDropdown(!isDropdownOpen);
  };

  const toogleMenu = () => {
    if (!isMenuShown && isButtonsActive === 'disabled') {
      setMenu(!isMenuShown);
    } else if (isButtonsActive === 'disabled') {
      return;
    } else {
      setMenu(!isMenuShown);
      setButtons('disabled');
    }
  };

  const toogleButtons = () => {
    if (isButtonsActive === 'disabled') {
      setButtons('active');
    } else {
      setButtons('disabled');
    }
  };

  return (
    <PlaceAuctionWrapper>
      <PlaceAuctionButton onClick={toogleDropdown}>
        Put up for auction{' '}
        {isDropdownOpen ? (
          <IoIosArrowDown size={20} />
        ) : (
          <IoIosArrowUp size={20} />
        )}
      </PlaceAuctionButton>
      {isDropdownOpen ? (
        <PlaceAuctionDropdown>
          <DropdownLine>
            <DropdownPrice>Starting price</DropdownPrice>
            <DropdownInput type="number" placeholder="35" />
          </DropdownLine>
          <DropdownLine>
            Term <DropdownInput type="number" placeholder="10" />
          </DropdownLine>
          <DropdownLine>
            <DropdownButton onClick={toogleMenu}>Auction sell</DropdownButton>
          </DropdownLine>
        </PlaceAuctionDropdown>
      ) : (
        <></>
      )}
      {isMenuShown ? (
        <PlaceAuctionMenu>
          <MenuTop>
            <ItemImage src={Image} />
            <AuctionDescription>
              <MenuLine>
                Starting price <MenuPrice>35</MenuPrice>
              </MenuLine>
              <MenuLine>
                Term <MenuTerm>10 days</MenuTerm>
              </MenuLine>
              <MenuLine>
                <MenuAuctionFinish>
                  Auction has finished 31.12.2021
                </MenuAuctionFinish>
              </MenuLine>
              <MenuLine>
                <span>Marketplace commission</span> <MenuPrice>3,5</MenuPrice>
              </MenuLine>
            </AuctionDescription>
          </MenuTop>
          <MenuAgreementLine>
            <MenuInput type="checkbox" onClick={toogleButtons} />I agree to the
            platform <AgreementLink>agreement</AgreementLink> ....
          </MenuAgreementLine>
          <MenuButtonsWrapper>
            <Button className={isButtonsActive} onClick={toogleMenu}>
              Cancel
            </Button>
            <Button className={isButtonsActive} onClick={toogleMenu} violet>
              Confirm
            </Button>
          </MenuButtonsWrapper>
        </PlaceAuctionMenu>
      ) : (
        <></>
      )}
    </PlaceAuctionWrapper>
  );
};

export default PlaceAuction;
