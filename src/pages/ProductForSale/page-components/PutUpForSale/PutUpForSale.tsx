import { useState, useContext } from 'react'
import Context from '../../../../utils/Context'
import { ethers, providers } from 'ethers'

import { useWeb3React } from '@web3-react/core'
import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from '../../../../utils/addressHelpers'
import Marketplace from '../../../../abi/Marketplace.json'
import NFT from '../../../../abi/TestNFT.json'

import { TestNFT__factory, Marketplace__factory } from '../../../../typechain'

import Image from '../../../../images/card-item.png'

import { Button } from '../../../../globalStyles'

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
} from './PutUpForSale.styles'

const PutUpForSale = () => {
  const { connector } = useContext(Context)
  let { account } = useWeb3React()

  const [price, setPrice] = useState(35)
  const [commision, setCommision] = useState(0)

  const [isDropdownOpen, setDropdown] = useState(false)
  const [isMenuShown, setMenu] = useState(false)
  const [isButtonsActive, setButtons] = useState('disabled')

  const bid = async () => {
    if (!connector || isButtonsActive === 'disabled') return

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    )

    const signer = provider.getSigner(0)

    console.log(connector)
    console.log(signer)

    // const NFTContract = new ethers.Contract(NFT_ADDRESS, NFT['abi'], signer)

    const NFTContract = TestNFT__factory.connect(NFT_ADDRESS, signer)

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    )

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
    )

    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait()
    }

    const tx = await MarketplaceContract.bid(
      NFT_ADDRESS,
      0,
      ethers.utils.parseEther(price.toString()),
      { value: ethers.utils.parseEther('0.0001') }
    )

    await tx.wait()
  }

  const toogleDropdown = () => {
    setDropdown(!isDropdownOpen)
  }

  const toogleMenu = () => {
    if (!isMenuShown && isButtonsActive === 'disabled') {
      setMenu(!isMenuShown)
    } else if (isButtonsActive === 'disabled') {
      return
    } else {
      setMenu(!isMenuShown)
      setButtons('disabled')
    }
  }

  const toogleButtons = () => {
    if (isButtonsActive === 'disabled') {
      setButtons('active')
    } else {
      setButtons('disabled')
    }
  }

  const calculateCommission = () => {
    setCommision(price / 10)
  }

  return (
    <ForSaleWrapper>
      <ForSaleButton violet onClick={toogleDropdown}>
        Sell
      </ForSaleButton>
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
                toogleMenu()
                calculateCommission()
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
              <MenuLine>
                <span>Marketplace commission</span>{' '}
                <MenuPrice>{commision}</MenuPrice>
              </MenuLine>
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
  )
}

export default PutUpForSale
