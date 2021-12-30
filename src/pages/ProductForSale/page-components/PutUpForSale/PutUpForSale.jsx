import { useState } from 'react'
import { ethers } from 'ethers'

import { useSelector } from 'react-redux'

import { CONTRACT_ADDRESS } from '../../../../utils/addressHelpers'
import Marketplace from '../../../../abi/Marketplace.json'

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
  const connector = useSelector((state) => state.wallet?.connector)

  const [isDropdownOpen, setDropdown] = useState(false)
  const [isMenuShown, setMenu] = useState(false)
  const [isButtonsActive, setButtons] = useState('disabled')

  const bid = async () => {
    if (!connector) return

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    )
    console.log(provider)
    const signer = provider.getSigner(0)
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      Marketplace['abi'],
      signer
    )

    const tx = await contract.bid(
      '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      1,
      ethers.utils.parseEther('35')
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

  return (
    <ForSaleWrapper>
      <ForSaleButton violet onClick={toogleDropdown}>
        Sell
      </ForSaleButton>
      {isDropdownOpen ? (
        <ForSaleDropdown>
          <DropdownLine>
            <DropdownPrice>Price</DropdownPrice>
            <DropdownInput type="number" placeholder="35" />
          </DropdownLine>
          <DropdownLine>
            <DropdownButton onClick={toogleMenu}>Sell</DropdownButton>
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
                Price <MenuPrice>35</MenuPrice>
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
