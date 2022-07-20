import { yupResolver } from "@hookform/resolvers/yup";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  AddImgBlock,
  ClearImageInput,
  CollectionImageInput,
  CollectionImagePreview,
  CollectionLogoLabel,
  CollectionFeaturedLabelWrapper,
  CollectionFeaturedLabel,
  CollectionBannerLabelWrapper,
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
import { CreateCollectionForm, SelectItemType, ImageFile } from "./types";
import { validationSchema } from "./validation";

import {
  CreateSelect,
  SelectItem,
} from "../../components/CreateSelect/CreateSelect";
import LoadingModal from "../../components/LoadingModal/LoadingModal";
import Error from "../../components/Modal/Error/Error";
import { Background, FormButtonsWrap } from "../../globalStyles";
import closeIcon from "../../icons/close.svg";
import ethIcon from "../../icons/tokens/eth-grey.svg";
import { UndasGeneralNFT__factory } from "../../typechain";
import { Category } from "../../types/category";
import { TransactionError } from "../../types/global";
import Context from "../../utils/Context";
import { getCategory } from "../../utils/getCategory";
import { PolygonIcon } from "../AllNFTs/imports";
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
import { bsc, solana, ton } from "../CreateNFT/imports";
import Switcher from "../CreateNFT/page-components/Switcher/Switcher";
const CategoryList: React.FC<{ setCategory: any }> = ({ setCategory }) => {
  return (
    <>
      <SelectItem
        setSelected={setCategory}
        categoryId={0}
        {...getCategory(Category.artwork)}
      />
      <SelectItem
        setSelected={setCategory}
        categoryId={1}
        {...getCategory(Category.sport)}
      />
      <SelectItem
        setSelected={setCategory}
        categoryId={2}
        {...getCategory(Category.photography)}
      />
      <SelectItem
        setSelected={setCategory}
        categoryId={3}
        {...getCategory(Category.gamefi)}
      />
      <SelectItem
        setSelected={setCategory}
        categoryId={4}
        {...getCategory(Category.celebrity)}
      />
      <SelectItem
        setSelected={setCategory}
        categoryId={5}
        {...getCategory(Category.rwaNFT)}
      />
      <SelectItem
        setSelected={setCategory}
        categoryId={6}
        {...getCategory(Category.plus18)}
      />
      <SelectItem
        setSelected={setCategory}
        categoryId={7}
        {...getCategory(Category.other)}
      />
    </>
  );
};

const BlockchainList: React.FC<{ setBlockchain: any }> = ({
  setBlockchain,
}) => {
  return (
    <>
      <SelectItem setSelected={setBlockchain} icon={ethIcon} label="Ethereum" />
      <SelectItem
        setSelected={setBlockchain}
        icon={PolygonIcon}
        label="Polygon"
      />
      <SelectItem setSelected={setBlockchain} icon={solana} label="Solana" />
      <SelectItem setSelected={setBlockchain} icon={bsc} label="BSC" />
      <SelectItem setSelected={setBlockchain} icon={ton} label="TON" />
    </>
  );
};

const CreateCollection: React.FC = () => {
  const [showTransactionError, setShowTransactionError] =
    useState<boolean>(false);
  const [transactionError, setTransactionError] = useState<TransactionError>({
    code: -1,
    message: "",
  });

  const [logo, setLogo] = useState<string>("");
  const [featured, setFeatured] = useState<string>("");
  const [banner, setBanner] = useState<string>("");
  const [fileSizeError /* setFileSizeError */] = useState<{
    message: string;
    inputName: string;
  }>();
  const [name, setName] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [information, setInformation] = useState("");
  const [category, setCategory] = useState<SelectItemType>({
    icon: "",
    label: "Add Category",
  });
  const [categoryError, setCategoryError] = useState<any>("");
  const [creatorEarnings, setCreatorEarnings] = useState("");
  const [blockchain, setBlockchain] = useState<SelectItemType>({
    icon: ethIcon,
    label: "Ethereum",
  });
  const { connector } = useContext(Context);
  const [isSensetiveContent, setIsSensetiveContent] = useState(false);

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, formState, handleSubmit } =
    useForm<CreateCollectionForm>(formOptions);

  const [loading, setLoading] = useState<boolean>(false);
  const [autoRedirect, setAutoRedirect] = useState<boolean>(false);

  const web3ReactState = useWeb3React();
  const { account } = web3ReactState;
  const { errors } = formState;
  const navigate = useNavigate();

  const createCollection = async (
    collectionName: string,
    collectionUrl: string,
    collectionInfo: string,
    category: number,
  ) => {
    if (!connector || !account) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);

    const NFTContract = UndasGeneralNFT__factory.connect(
      "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d", //goerli contract addr
      signer,
    );
    try {
      const tx = await NFTContract.createCollection(
        collectionName,
        collectionUrl,
        featured,
        banner,
        collectionInfo,
        category
      );

      setLoading(true);
      await tx.wait();
      if (autoRedirect) {
        setAutoRedirect(false);
        navigate("/account");
      }
      setLoading(false);
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  };

  const handleCleanForm = () => {
    location.reload();
  };

  const onSubmit = () => {
    if (Object.keys(errors).length > 0) return;
    setAutoRedirect(true);
    createCollection(name, logo, information, category.categoryId!,);
  };

  /* const imageSizeValidation = (fileList: FileList, inputName: ImageFile) => {
    const file = fileList[0];
    if (file.size > 3145728) {
      setFileSizeError({
        message: `${inputName} is too large. Maximum file size is 3Mb.`,
        inputName,
      });
      setLogo("");
      return true;
    } else {
      setFileSizeError({ message: "", inputName: "" });
      return false;
    }
  };

  const logoHandler = (event: React.FormEvent) => {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
      if (imageSizeValidation(fileList, ImageFile.logo)) {
        return;
      }
      const file = URL.createObjectURL(fileList[0]);
      setLogo(file);
    }
    trigger("logoURI");
  };

  const featuredHandler = (event: React.FormEvent) => {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
      if (imageSizeValidation(fileList, ImageFile.featured)) {
        return;
      }
      const file = URL.createObjectURL(fileList[0]);
      setFeatured(file);
    }
    trigger("featuredURI");
  };

  const bannerHandler = (event: React.FormEvent) => {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
      if (imageSizeValidation(fileList, ImageFile.banner)) {
        return;
      }
      const file = URL.createObjectURL(fileList[0]);
      setBanner(file);
    }
    trigger("bannerURI");
  }; */

  useEffect(() => {
    if (category.categoryId) {
      setCategoryError("");
    }
  }, [category]);

  useEffect(() => {
    if (!connector) {
      navigate("/login");
    }
  }, [connector, account]);

  return (
    <Background>
      <CreateSec>
        <LoadingModal
          isLoading={loading}
          setAutoRedirect={setAutoRedirect}
          addMore={handleCleanForm}
        />
        {showTransactionError && transactionError.message.length > 0 && (
          <Error
            error={transactionError}
            show={showTransactionError}
            setShow={setShowTransactionError}
          />
        )}
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
                  disabled
                  {...register("logoURI")}
                  id="logo"
                  //onChange={logoHandler}
                  required
                />

                <BlockDescript>
                  This image will also be used for navigation
                  <br /> Recommended 350px X 350px
                </BlockDescript>
              </AddImgBlock>
              {fileSizeError && fileSizeError.inputName === ImageFile.logo && (
                <ValidationBlock>{fileSizeError.message}</ValidationBlock>
              )}
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>
                Logo URL-image<span className="require-asterisk">*</span>
              </CreateLabel>
              <CreateInput
                type="text"
                placeholder="Logo URL-image"
                id="logoURL"
                {...register("logoURL")}
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
              {errors.logoURL && (
                <ValidationBlock>{errors.logoURL.message}</ValidationBlock>
              )}
            </CreateFormGroup>
            <CreateFormGroup>
              <CollectionFeaturedLabelWrapper>
                <CreateLabel>Featured image</CreateLabel>
                {featured && (
                  <ClearImageInput onClick={() => setFeatured("")}>
                    <img
                      src={closeIcon}
                      alt="clear-logo"
                      width="15"
                      height="15"
                    />
                  </ClearImageInput>
                )}
              </CollectionFeaturedLabelWrapper>

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
                  disabled
                  id="featured"
                  //onChange={featuredHandler}
                />
                <BlockDescript>
                  This image will be used for featuring your collection on the
                  homepage, category pages or other promotional areas of UNDAS{" "}
                  <br /> Recommended 600px X 400px
                </BlockDescript>
              </AddImgBlock>
              {/* {fileSizeError &&
                fileSizeError.inputName === ImageFile.featured && (
                  <ValidationBlock>{fileSizeError.message}</ValidationBlock>
                )} */}
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>Featured URL-image</CreateLabel>
              <CreateInput
                type="text"
                placeholder="Featured URL-image"
                value={featured}
                onChange={(e) => setFeatured(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CollectionBannerLabelWrapper>
                <CreateLabel>Banner image</CreateLabel>
                {banner && (
                  <ClearImageInput onClick={() => setBanner("")}>
                    <img
                      src={closeIcon}
                      alt="clear-logo"
                      width="15"
                      height="15"
                    />
                  </ClearImageInput>
                )}
              </CollectionBannerLabelWrapper>
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
                <CollectionImageInput
                  disabled
                  id="banner" /* onChange={bannerHandler} */
                />
              </AddBannerBlock>
              {fileSizeError &&
                fileSizeError.inputName === ImageFile.banner && (
                  <ValidationBlock>{fileSizeError.message}</ValidationBlock>
                )}
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>Banner URL-image</CreateLabel>
              <CreateInput
                type="text"
                placeholder="Banner URL-image"
                value={banner}
                onChange={(e) => setBanner(e.target.value)}
              />
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
              {categoryError.length > 0 && (
                <ValidationText>{categoryError}</ValidationText>
              )}
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
                <InputItem
                  placeholder="Your Reddit Handle"
                  className="reddit"
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
            {errors.creatorEarnings && (
              <ValidationText>{errors.creatorEarnings.message}</ValidationText>
            )}
            <CreateFormGroup>
              <CreateLabel htmlFor="blockchain">Blockchain</CreateLabel>
              <BlockDescript className="blockchain-descript">
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
                  <ExplicitContentIco /> Explicit &amp; Sensitive Content
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
                <CreateFormButton
                  className="left-btn"
                  type="submit"
                  onClick={() =>
                    !category.categoryId
                      ? setCategoryError("Please, select category")
                      : ""
                  }
                >
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
