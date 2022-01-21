import { useState, useEffect, useContext } from 'react';
import Context from '../../../../utils/Context';
import { ethers } from 'ethers';

import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from '../../../../utils/addressHelpers';

import { TestNFT__factory, Marketplace__factory } from '../../../../typechain';

import { useDispatch } from 'react-redux';
import { increment } from '../../../../utils/ReduxSlices/NFTsCounterSlice';

import { isBuyableFunction } from '../../../../utils/isBuyable';

import Image from '../../../../images/card-item.png';

import { Button } from '../../../../globalStyles';

import {
  ForSaleWrapper,
  ForSaleButton,
  ForSaleDropdown,
  ForSaleMenu,
  DropdownLine,
  DropdownPrice,
  DropdownInput,
  DropdownButton,
  MenuTop,
  ItemImage,
  AuctionDescription,
  MenuLine,
  MenuPrice,
  MenuAgreementLine,
  MenuInput,
  AgreementLink,
  MenuButtonsWrapper,
} from './PutUpForSale.styles';

const PutUpForSale = ({ itemId }: { itemId: string }) => {
  const { connector } = useContext(Context);

  const dispatch = useDispatch();

  const [price, setPrice] = useState(35);
  // const [commision, setCommision] = useState(0);

  const [isDropdownOpen, setDropdown] = useState(false);
  const [isMenuShown, setMenuShown] = useState(false);
  const [isButtonsActive, setButtons] = useState('disabled');
  const [isBuyable, setIsBuyable] = useState<boolean | undefined>(undefined);

  const bid = async () => {
    if (!connector || isButtonsActive === 'disabled') return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    console.log(connector);
    console.log(signer);

    const NFTContract = TestNFT__factory.connect(NFT_ADDRESS, signer);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      SIGNER_ADDRESS,
      MARKETPLACE_ADDRESS
    );

    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait();
    }

    const tx = await MarketplaceContract.bid(
      NFT_ADDRESS,
      itemId,
      ethers.utils.parseEther(price.toString()),
      { value: ethers.utils.parseEther('0.1') }
    );

    await tx.wait().then(
      () => {
        dispatch(increment());
        toogleMenu();
        toogleDropdown();
        setIsBuyable(true);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const Cancel = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.cancel(itemId);

    await tx.wait().then(
      () => {
        setIsBuyable(false);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const toogleDropdown = () => {
    setDropdown(!isDropdownOpen);
  };

  const toogleMenu = () => {
    if (!isMenuShown && isButtonsActive === 'disabled') {
      setMenuShown(!isMenuShown);
    } else if (isButtonsActive === 'disabled') {
      return;
    } else {
      setMenuShown(!isMenuShown);
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

  // const calculateCommission = () => {
  //   setCommision(price / 10);
  // };

  useEffect(() => {
    if (!connector) {
      return console.log('loading');
    }

    isBuyableFunction(+itemId, connector)
      .then((result) => {
        setIsBuyable(result);
      })
      .catch(() => setIsBuyable(false));
  }, [connector]);

  return (
    <ForSaleWrapper>
      {isBuyable ? (
        <ForSaleButton violet onClick={Cancel}>
          Cancel
        </ForSaleButton>
      ) : (
        <ForSaleButton violet onClick={toogleDropdown}>
          Sell
        </ForSaleButton>
      )}
      {isDropdownOpen ? (
        <ForSaleDropdown>
          <DropdownLine>
            <DropdownPrice>Price</DropdownPrice>
            <DropdownInput
              type="number"
              placeholder={price.toString()}
              onChange={(e) => setPrice(+e.target.value)}
            />
          </DropdownLine>
          <DropdownLine>
            <DropdownButton
              onClick={() => {
                toogleMenu();
                // calculateCommission();
              }}
            >
              Sell
            </DropdownButton>
          </DropdownLine>
        </ForSaleDropdown>
      ) : (
        <></>
      )}
      {isMenuShown ? (
        <ForSaleMenu>
          <MenuTop>
            <ItemImage src={Image} />
            <AuctionDescription>
              <MenuLine>
                Price <MenuPrice>{price}</MenuPrice>
              </MenuLine>
              {/* <MenuLine>
                <span>Marketplace commission</span>{' '}
                <MenuPrice>{commision}</MenuPrice>
              </MenuLine> */}
            </AuctionDescription>
          </MenuTop>
          <MenuAgreementLine>
            <MenuInput type="checkbox" onClick={toogleButtons} />I agree to the
            platform <AgreementLink>agreement</AgreementLink> ....
          </MenuAgreementLine>
          <MenuButtonsWrapper>
            <Button className={isButtonsActive} onClick={toogleMenu}>
              Cancle
            </Button>
            <Button className={isButtonsActive} onClick={bid} violet>
              Confirm
            </Button>
          </MenuButtonsWrapper>
        </ForSaleMenu>
      ) : (
        <></>
      )}
    </ForSaleWrapper>
  );
};

export default PutUpForSale;
