import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  AddImgBlock,
  CollectionImageInput,
  CollectionImagePreview,
  CollectionLogoLabel,
  CollectionFeaturedLabel,
  CollectionBannerLabel,
  AddBannerBlock,
  InputList,
  InputItem,
  CategoryGroup,
  CategorySelectWrapper,
  CategoryDescript,
  EarningsInput,
  ValidationText,
  ValidationBlock,
} from "./CreateCollection.styles";
import { ImgIcon, ExplicitContentIco } from "./imports";
import { CreateSubmitForm, SelectItemType } from "./types";
import { validationSchema } from "./validation";

import {
  CreateSelect,
  SelectItem,
} from "../../components/CreateSelect/CreateSelect";
import { Background, FormButtonsWrap } from "../../globalStyles";
import ethIcon from "../../icons/tokens/eth-grey.svg";
import { Category } from "../../types/category";
import { getCategory } from "../../utils/getCategory";
import {
  CreateSec,
  CreateContainer,
  CreateTitle,
  CreateForm,
  CreateFormGroup,
  CreateLabel,
  CreateInput,
  BlockDescript,
  CreateTextArea,
  SwitcherBlock,
  SwitcherTitle,
  ButtonsBlock,
  CreateFormButton,
} from "../CreateNFT/CreateNFT.styles";
import Switcher from "../CreateNFT/page-components/Switcher/Switcher";
const CategoryList: React.FC<{ setCategory: any }> = ({ setCategory }) => {
  return (
    <>
      <SelectItem
        setSelected={setCategory}
        {...getCategory(Category.artwork)}
      />
      <SelectItem setSelected={setCategory} {...getCategory(Category.sport)} />
      <SelectItem
        setSelected={setCategory}
        {...getCategory(Category.photography)}
      />
      <SelectItem
        setSelected={setCategory}
        {...getCategory(Category.metaverses)}
      />
      <SelectItem
        setSelected={setCategory}
        {...getCategory(Category.celebrity)}
      />
      <SelectItem setSelected={setCategory} {...getCategory(Category.rwaNFT)} />
    </>
  );
};

const BlockchainList: React.FC<{ setBlockchain: any }> = ({
  setBlockchain,
}) => {
  return (
    <SelectItem setSelected={setBlockchain} icon={ethIcon} label="Ethereum" />
  );
};

const CreateCollection: React.FC = () => {
  // const web3ReactState = useWeb3React();
  const [logo, setLogo] = useState<string>("");
  const [featured, setFeatured] = useState<string>("");
  const [banner, setBanner] = useState<string>("");
  const [name, setName] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [information, setInformation] = useState("");
  const [category, setCategory] = useState<SelectItemType>({
    icon: "",
    label: "Add Category",
  });
  const [creatorEarnings, setCreatorEarnings] = useState("");
  const [blockchain, setBlockchain] = useState<SelectItemType>({
    icon: ethIcon,
    label: "Ethereum",
  });
  const [isSensetiveContent, setIsSensetiveContent] = useState(false);
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, formState, handleSubmit } =
    useForm<CreateSubmitForm>(formOptions);
  const { errors } = formState;
  /* const bid = async () => {
    if (!connector || !account) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = UndasGeneralNFT__factory.connect(
      '0xB073DeaC0dc753d27cC41a0f443000579d017361',
      signer,
    );

    NFTContract.safeMintGeneral(account, information, name, customURL);
  }; */

  const onSubmit = (formValues: any) => {
    alert(JSON.stringify(formValues));
  };

  const logoHandler = (event: React.FormEvent) => {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
      const file = URL.createObjectURL(fileList[0]);
      setLogo(file);
    }
  };

  const featuredHandler = (event: React.FormEvent) => {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
      const file = URL.createObjectURL(fileList[0]);
      setFeatured(file);
    }
  };

  const bannerHandler = (event: React.FormEvent) => {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
      const file = URL.createObjectURL(fileList[0]);
      setBanner(file);
    }
  };

  return (
    <Background>
      <CreateSec>
        <CreateContainer>
          <CreateTitle>Create Collection</CreateTitle>
          <CreateForm onSubmit={handleSubmit(onSubmit)}>
            <BlockDescript>
              <span className="require-asterisk">*</span>Required fields
            </BlockDescript>
            <CreateFormGroup>
              <CreateLabel>
                Logo image<span className="require-asterisk">*</span>
              </CreateLabel>
              <AddImgBlock>
                <CollectionLogoLabel htmlFor="logo">
                  {logo ? (
                    <CollectionImagePreview src={logo} alt="collection-logo" />
                  ) : (
                    <img src={ImgIcon} alt="image-icon" />
                  )}
                </CollectionLogoLabel>
                <CollectionImageInput
                  {...register("logoURI")}
                  id="logo"
                  onChange={logoHandler}
                />
                {errors.logoURI && (
                  <ValidationBlock>{errors.logoURI.message}</ValidationBlock>
                )}
                <BlockDescript>
                  This image will also be used for navigation
                  <br /> Recommended 350px X 350px
                </BlockDescript>
              </AddImgBlock>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>Featured image</CreateLabel>
              <AddImgBlock className="featured">
                <CollectionFeaturedLabel htmlFor="featured">
                  {featured ? (
                    <CollectionImagePreview
                      src={featured}
                      alt="collection-featured"
                    />
                  ) : (
                    <img src={ImgIcon} alt="image-icon" />
                  )}
                </CollectionFeaturedLabel>
                <CollectionImageInput
                  id="featured"
                  onChange={featuredHandler}
                />
                <BlockDescript>
                  This image will be used for featuring your collection on the
                  homepage, category pages or other promotional areas of UNDAS{" "}
                  <br /> Recommended 600px X 400pxx
                </BlockDescript>
              </AddImgBlock>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>Banner image</CreateLabel>
              <AddBannerBlock>
                <BlockDescript>
                  This image will appear at the top of your collection page.
                  Avoid including too much text in this banner image, as the
                  dimensions change on different devices <br /> Recommended
                  1400px X 400px
                </BlockDescript>
                <CollectionBannerLabel htmlFor="banner">
                  {banner ? (
                    <CollectionImagePreview
                      src={banner}
                      alt="collection-featured"
                    />
                  ) : (
                    <img src={ImgIcon} alt="image-icon" />
                  )}
                </CollectionBannerLabel>
                <CollectionImageInput id="banner" onChange={bannerHandler} />
              </AddBannerBlock>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="name">
                Name<span className="require-asterisk">*</span>
              </CreateLabel>
              <CreateInput
                type="text"
                id="name"
                {...register("name")}
                placeholder="Example: Pride Lands"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <ValidationBlock>{errors.name.message}</ValidationBlock>
              )}
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="url">URL</CreateLabel>
              <BlockDescript>
                Customize your URL on UNDAS. Must only contain lowercase
                letters, numbers and hyphens
              </BlockDescript>
              <CreateInput
                type="text"
                id="url"
                placeholder="https://UNDAS.io/collection/pride-lands"
                {...register("customURL")}
                value={customURL}
                onChange={(e) => setCustomURL(e.target.value)}
              />
              {errors.customURL && (
                <ValidationBlock>{errors.customURL.message}</ValidationBlock>
              )}
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="information">Information</CreateLabel>
              <BlockDescript className="words-counter">
                <ValidationText>{information.length}</ValidationText> of 1000
                characters used
              </BlockDescript>
              <CreateTextArea
                id="information"
                maxLength={1000}
                {...register("information")}
                value={information}
                onChange={(e) => setInformation(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CategoryGroup>
                <CreateLabel htmlFor="category" className="category-label">
                  Category
                </CreateLabel>
                <CategorySelectWrapper>
                  <CreateSelect
                    itemList={<CategoryList setCategory={setCategory} />}
                    item={{ ...category }}
                  />
                  <CategoryDescript>
                    You can select a maximum of one category
                  </CategoryDescript>
                </CategorySelectWrapper>
              </CategoryGroup>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>Links</CreateLabel>
              <InputList>
                <InputItem
                  placeholder="Your Twitter Handle"
                  className="twitter"
                  {...register("twitter")}
                />
                {errors.twitter?.message && (
                  <ValidationBlock>{errors.twitter.message}</ValidationBlock>
                )}
                <InputItem
                  placeholder="Your Discord Handle"
                  className="discord"
                />
                {errors.discord?.message && (
                  <ValidationBlock>{errors.discord.message}</ValidationBlock>
                )}
                <InputItem
                  placeholder="Your Instagram Handle"
                  className="instagram"
                />
                {errors.instagram?.message && (
                  <ValidationBlock>{errors.instagram.message}</ValidationBlock>
                )}
                <InputItem placeholder="Yoursite.io" className="yoursite" />
                {errors.yourSite?.message && (
                  <ValidationBlock>{errors.yourSite.message}</ValidationBlock>
                )}
              </InputList>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="earnings">Creator Earnings</CreateLabel>
              <BlockDescript>
                Collect a fee when a user re-sells an item you originally
                created. This is deducted from the final sale price and paid
                monthly to a payout address of your choosing
              </BlockDescript>
              <EarningsInput
                type="text"
                id="earnings"
                placeholder="Percentage fee: e.g. 1.5"
                {...register("creatorEarnings")}
                value={creatorEarnings}
                onChange={(e) => setCreatorEarnings(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="blockchain">Blockchain</CreateLabel>
              <BlockDescript>
                Select the blockchain where you&#39;d like new items from this
                collection to be added by default
              </BlockDescript>
              <CreateSelect
                itemList={<BlockchainList setBlockchain={setBlockchain} />}
                item={blockchain}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <SwitcherBlock>
                <SwitcherTitle>
                  <ExplicitContentIco /> Explicit & Sensitive Content
                </SwitcherTitle>
                <Switcher
                  onClick={() => setIsSensetiveContent(!isSensetiveContent)}
                />
              </SwitcherBlock>
              <BlockDescript>
                Set this item as explicit and sensitive content
              </BlockDescript>
            </CreateFormGroup>
            <ButtonsBlock>
              <FormButtonsWrap>
                <CreateFormButton className="left-btn" type="submit">
                  Create
                </CreateFormButton>
                <CreateFormButton>Back</CreateFormButton>
              </FormButtonsWrap>
            </ButtonsBlock>
          </CreateForm>
        </CreateContainer>
      </CreateSec>
    </Background>
  );
};

export default CreateCollection;
