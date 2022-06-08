import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  WindowWrap,
  Title,
  Close,
  CheckoutWrap,
  NFTWrap,
  ImageWrap,
  PaymentInfo,
  PaymentElement,
  Info,
  TotalBlock,
  PrivacyPolicyBlock,
  ConfirmBtn,
  CheckboxInput,
  CheckboxLabel,
  TextPay,
  CheckboxBlock,
  ColoredTextAgreement,
} from "./BuyNFT.styles";

import { Wrapper } from "../../../pages/CategoriesPage/Categories.styles";
import { ColoredText } from "../../../pages/NFTPage/page-components/Accordion/Accordion.styles";
import { useName, usePrice, useToken, useUri } from "../../../store";
import { closeModal } from "../../../store/reducers/modalAction";
import { EthIco } from "../../ASideFilter/imports";
import { UNDIco } from "../imports";
import Context from "../../../utils/Context";
import { ethers } from "ethers";
import { Marketplace__factory } from "../../../typechain";
import { MARKETPLACE_ADDRESS } from "../../../utils/addressHelpers";
import { OnlyOne__factory } from "../../../typechain";

// // const fetchNFTs = async () => {

//

// };

// async function getNfts() {
//   const option = {chain: 'goerli',address:'0x45434191f03528726CAfd4Eebe0Fc5D33Be27720'}
//   const nfts = await Moralis.Web3.getNfts(option)

// }

const BuyNFT: React.FC = () => {
  const dispatch = useDispatch();
  const litsingId = useSelector(useToken);
  const tokenPrice = useSelector(usePrice);
  const tokenName = useSelector(useName);
  const tokenUri = useSelector(useUri);

  const { connector } = useContext(Context);

  async function buyNFT(tokenId: number, priceInNum?: number) {
    if (!connector) return;
    if (priceInNum == undefined) {
      return;
    }
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const userBalanceInWei = ethers.utils.formatUnits(
      await signer.getBalance(),
    );

    if (+userBalanceInWei < priceInNum) {
      alert("not enough funds");
      return;
    }
    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const ApprovalTokenAmount = (priceInNum * 2) / 100;

    const OnlyOneContract = OnlyOne__factory.connect(
      "0x2DC8B77b750657Bf3480b20693Bc4Dc0dce45105",
      signer,
    );

    OnlyOneContract.approve(
      "0x54FAf9EE113f2cd8D921D46C47c3A67a26E3A77F",  
      ethers.utils.parseUnits(ApprovalTokenAmount.toString(), 18),
    );

    const tx = await MarketplaceContract.buyToken(litsingId, {
      value: ethers.utils.parseUnits(priceInNum.toString(), "ether"),
    });
    await tx.wait();
  }

  return (
    <WindowWrap>
      <Title>
        <span>Complete checkout</span>
        <Close
          onClick={() => {
            dispatch(closeModal());
          }}
        />
      </Title>
      <CheckoutWrap>
        <Wrapper
          disp="flex"
          justifyContent="space-between"
          alignItems="center"
          marg="0 0 20px 0"
        >
          <ColoredText color="#232428" fw="500" fs="18px">
            Item
          </ColoredText>
          <ColoredText color="#232428" fw="500" fs="18px">
            Subtotal
          </ColoredText>
        </Wrapper>
        <ColoredText color="#873DC1" fw="400" fs="14px">
          {tokenName}
        </ColoredText>
        <NFTWrap marg="15px 0 20px 0">
          <Wrapper disp="flex" gap="20px" alignItems="center">
            <ImageWrap>
              <img src={tokenUri} alt="nft-image" />
            </ImageWrap>
            <span>Price NFT</span>
          </Wrapper>
          <Wrapper>
            <Wrapper
              disp="flex"
              alignItems="center"
              gap="6px"
              justifyContent="flex-end"
            >
              <EthIco />
              <span>{tokenPrice}</span>
            </Wrapper>
            <ColoredText fs="12px" fw="400" color="#7C7C7C">
              $123 278,00
            </ColoredText>
          </Wrapper>
        </NFTWrap>
        <PaymentInfo>
          <PaymentElement>
            <Wrapper disp="flex" flexDirection="column">
              <span>Marketplace fee 3%</span>
              <Wrapper
                disp="flex"
                alignItems="center"
                gap="15px"
                marg="10px 0 0 0"
              >
                <CheckboxBlock>
                  <CheckboxInput
                    type="checkbox"
                    id="poject"
                    name="PayInUnd"
                    className="custom-checkbox"
                  />
                  <CheckboxLabel htmlFor="poject">
                    <TextPay>
                      Pay in <UNDIco /> with a 50% discount
                    </TextPay>
                  </CheckboxLabel>
                </CheckboxBlock>
                <Info />
              </Wrapper>
            </Wrapper>
            <Wrapper disp="flex" alignItems="center" gap="5px">
              <UNDIco />
              <ColoredText fs="16px" color="#5D3F92">
                2
              </ColoredText>
            </Wrapper>
          </PaymentElement>
        </PaymentInfo>
        <TotalBlock>
          <span>Total</span>
          <Wrapper>
            <Wrapper
              disp="flex"
              alignItems="center"
              gap="6px"
              justifyContent="flex-end"
            >
              <EthIco />
              <ColoredText fs="18px" fw="500" color="#5D3F92">
                {tokenPrice}+ <UNDIco /> 2
              </ColoredText>
            </Wrapper>
            <ColoredText fs="12px" fw="400" color="#7C7C7C">
              $123 278,00
            </ColoredText>
          </Wrapper>
        </TotalBlock>
        <PrivacyPolicyBlock>
          <CheckboxBlock>
            <CheckboxInput
              type="checkbox"
              id="purchases"
              name="PayInUndAg"
              className="custom-checkbox"
            />
            <CheckboxLabel htmlFor="purchases">
              {" "}
              I agree to the platform{" "}
              <ColoredTextAgreement cursor="pointer" color="#893AC2">
                agreement ....
              </ColoredTextAgreement>
            </CheckboxLabel>
          </CheckboxBlock>
        </PrivacyPolicyBlock>
        <ConfirmBtn onClick={() => buyNFT(litsingId, tokenPrice)}>
          Confirm
        </ConfirmBtn>
      </CheckoutWrap>
    </WindowWrap>
  );
};

export default BuyNFT;
