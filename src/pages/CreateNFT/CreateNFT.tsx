import { yupResolver } from "@hookform/resolvers/yup";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { useForm } from "react-hook-form";
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
  NFTItemLabel,
  AddFileBlock,
  NFTItemPreview,
  NFTItemInput,
} from "./CreateNFT.styles";
import { ImgIcon, UnlockableContentIco, ExplicitContentIco } from "./imports";

import Switcher from "./page-components/Switcher/Switcher";
import { Background } from "../../globalStyles";
import { UndasGeneralNFT__factory } from "../../typechain/factories/UndasGeneralNFT__factory";
import { FormButtonsWrap } from "../Settings/SettingsTabs/Profile/ProfileSettings.styles";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import Context from "../../utils/Context";
import { validationSchema } from "./validation";
import { CreateNFTForm, Level, Property, SelectItemType, Stat } from "./types";
import Properties from "./page-components/Properties/Properties";
import {
  useLevels,
  useProperties,
  useStats,
} from "../../store/reducers/createNFT/helpers";
import { useSelector } from "react-redux";
import Levels from "./page-components/Levels/Levels";
import Stats from "./page-components/Stats/Stats";
import { CreateSelect, SelectItem } from "../../components";
import { ValidationBlock } from "../CreateCollection/CreateCollection.styles";

const SelectCollectionList: React.FC<{
  setCollection: Dispatch<SetStateAction<SelectItemType>>;
}> = ({ setCollection }) => {
  return (
    <>
      <SelectItem setSelected={setCollection} label={"Single NFT"} />
      <SelectItem setSelected={setCollection} label={"Returne"} />
      <SelectItem setSelected={setCollection} label={"Azuki"} />
      <SelectItem setSelected={setCollection} label={"Bored Ape Yacht Club."} />
    </>
  );
};

const CreateNFT: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const properties = useSelector(useProperties);
  const levels = useSelector(useLevels);
  const stats = useSelector(useStats);

  const { connector } = useContext(Context);
  const web3ReactState = useWeb3React();
  const { account } = web3ReactState;

  const [file, setFile] = useState<string>();
  const [fileSizeError, setFileSizeError] = useState<{
    message: string;
    inputName: string;
  }>();
  const [name, setName] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [description, setDescription] = useState("");
  const [collection, setCollection] = useState<SelectItemType>({
    label: "Select collection",
    icon: "",
  });
  const [propertyList, setPropertyList] = useState<Property[]>(properties);
  const [levelList, setLevelList] = useState<Level[]>(levels);
  const [statList, setStatList] = useState<Stat[]>(stats);
  const [isOnlockableContent, setIsOnlockableContent] =
    useState<boolean>(false);
  const [isSensetiveContent, setIsSensetiveContent] = useState<boolean>(false);
  const [supply, setSupply] = useState("1");
  const [freezeMetadata, setFreezeMetadata] = useState("");

  const formOptions: { resolver: any } = {
    resolver: yupResolver(validationSchema),
  };
  const { register, formState, handleSubmit } =
    useForm<CreateNFTForm>(formOptions);
  const { errors } = formState;

  const mintNFT = async () => {
    if (!connector || !account) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const NFTContract = UndasGeneralNFT__factory.connect(
      "0x08eC8Fe503218573e28899B08C9Fa0316b5Ef8d3", //goerli contract addr
      signer,
    );

    const tx = await NFTContract.safeMintGeneral(
      account,
      description,
      name,
      externalLink,
    );

    setLoading(true);
    await tx.wait();
    setLoading(false);
  };

  const onSubmit = () => {
    console.log(errors);
    mintNFT();
  };

  const fileSizeValidation = (fileList: FileList, inputName: string) => {
    const file = fileList[0];
    if (file.size > 104857600) {
      setFileSizeError({
        message: `${inputName} is too large. Maximum file size is 3Mb.`,
        inputName,
      });
      setFile("");
      return true;
    } else {
      setFileSizeError({ message: "", inputName: "" });
      return false;
    }
  };

  const fileHandler = (event: React.FormEvent) => {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
      if (fileSizeValidation(fileList, "File")) {
        return;
      }
      const file = URL.createObjectURL(fileList[0]);
      setFile(file);
    }
  };
  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const externalLinkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExternalLink(event.target.value);
  };

  const descriptionHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(event.target.value);
  };

  const unlockacleHandler = () => {
    setIsOnlockableContent(!isOnlockableContent);
  };
  const sensetiveHandler = () => {
    setIsSensetiveContent(!isSensetiveContent);
  };

  const supplyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSupply(event.target.value);
  };

  const freezeMetadataHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFreezeMetadata(event.target.value);
  };

  return (
    <Background>
      <CreateSec>
        {loading ? (
          <CreateTitle>LOADING PENDING...</CreateTitle>
        ) : (
          <CreateContainer>
            <CreateTitle>Create NFT</CreateTitle>

            <CreateForm onSubmit={handleSubmit(onSubmit)}>
              <BlockDescript>
                <span className="require-asterisk">*</span>Required fields
              </BlockDescript>
              <CreateFormGroup>
                <CreateLabel>
                  Image, Video, Audio, or 3D Model
                  <span className="require-asterisk">*</span>
                </CreateLabel>
                <BlockDescript>
                  File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                  OGG, GLB, GLTF <br />
                  Max size: 100MB
                </BlockDescript>
                <AddFileBlock>
                  <NFTItemLabel htmlFor="NFT">
                    {file ? (
                      <NFTItemPreview src={file} />
                    ) : (
                      <img src={ImgIcon} alt="image-icon" />
                    )}
                  </NFTItemLabel>
                  <NFTItemInput id="NFT" onChange={fileHandler} required />
                </AddFileBlock>
                {fileSizeError && fileSizeError.inputName === "File" && (
                  <ValidationBlock>{fileSizeError.message}</ValidationBlock>
                )}
              </CreateFormGroup>
              <CreateFormGroup>
                <CreateLabel htmlFor="name">
                  Name<span className="require-asterisk">*</span>
                </CreateLabel>
                <CreateInput
                  type="text"
                  id="name"
                  placeholder="NFT name"
                  {...register("name")}
                  value={name}
                  onChange={nameHandler}
                />
                {errors.name && (
                  <ValidationBlock>{errors.name.message}</ValidationBlock>
                )}
              </CreateFormGroup>
              <CreateFormGroup>
                <CreateLabel htmlFor="external-link">External link</CreateLabel>
                <BlockDescript>
                  UNDAS will include a link to this URL on this item&#39;s
                  detail page, so that users can click to learn more about it.
                  You are welcome to link to your own webpage with more details
                </BlockDescript>
                <CreateInput
                  type="text"
                  id="externalLink"
                  placeholder="https://yoursite.io/item/123"
                  {...register("externalLink")}
                  value={externalLink}
                  onChange={externalLinkHandler}
                />
                {errors.externalLink && (
                  <ValidationBlock>
                    {errors.externalLink.message}
                  </ValidationBlock>
                )}
              </CreateFormGroup>
              <CreateFormGroup>
                <CreateLabel htmlFor="description">Description</CreateLabel>
                <BlockDescript>
                  The description will be included on the item&#39;s detail page
                  underneath its image. Markdown syntax is supported
                </BlockDescript>
                <CreateTextArea
                  placeholder="Provide a detailed description of your item"
                  id="description"
                  maxLength={1000}
                  {...register("description")}
                  value={description}
                  onChange={descriptionHandler}
                />
                {errors.description && (
                  <ValidationBlock>
                    {errors.description.message}
                  </ValidationBlock>
                )}
              </CreateFormGroup>
              <CreateFormGroup className="collection">
                <CreateLabel htmlFor="collection" className="collection-label">
                  Collection
                </CreateLabel>
                <CreateSelect
                  maxWidth="350px"
                  padding="7px 20px"
                  itemList={
                    <SelectCollectionList setCollection={setCollection} />
                  }
                  item={collection}
                />
                <BlockDescript style={{ marginLeft: "20px" }}>
                  This is the collection where your item will appear
                </BlockDescript>
              </CreateFormGroup>

              <Properties
                propertyList={propertyList}
                setPropertyList={setPropertyList}
              />
              <Levels levelList={levelList} setLevelList={setLevelList} />
              <Stats statList={statList} setStatList={setStatList} />

              <CreateFormGroup>
                <SwitcherBlock>
                  <SwitcherTitle>
                    <UnlockableContentIco /> Unlockable Content
                  </SwitcherTitle>
                  <Switcher onClick={unlockacleHandler} />
                </SwitcherBlock>
                <BlockDescript>
                  Include unlockable content that can only be revealed by the
                  owner of the item
                </BlockDescript>
              </CreateFormGroup>
              <CreateFormGroup>
                <SwitcherBlock>
                  <SwitcherTitle>
                    <ExplicitContentIco /> Explicit &amp; Sensitive Content
                  </SwitcherTitle>
                  <Switcher onClick={sensetiveHandler} />
                </SwitcherBlock>
                <BlockDescript>
                  Set this item as explicit and sensitive content
                </BlockDescript>
              </CreateFormGroup>
              <CreateFormGroup>
                <CreateLabel htmlFor="supply">Supply</CreateLabel>
                <BlockDescript>
                  The number of items that can be minted. No gas cost to you!{" "}
                </BlockDescript>
                <CreateInput
                  type="number"
                  id="supply"
                  min="1"
                  placeholder="1"
                  {...register("supply")}
                  value={supply}
                  onChange={supplyHandler}
                />
                {errors.supply && (
                  <ValidationBlock>{errors.supply.message}</ValidationBlock>
                )}
              </CreateFormGroup>
              <CreateFormGroup>
                <CreateLabel htmlFor="freeze-metadata">
                  Freeze metadata
                </CreateLabel>
                <BlockDescript>
                  Freezing your metadata will allow you to permanently lock and
                  store all of this item&#39;s content in decentralized file
                  storage.
                </BlockDescript>
                <CreateInput
                  type="text"
                  id="freezeMetadata"
                  placeholder="To freeze your metadata, you must create your item first"
                  {...register("freezeMetadata")}
                  value={freezeMetadata}
                  onChange={freezeMetadataHandler}
                />
                {errors.freezeMetadata && (
                  <ValidationBlock>
                    {errors.freezeMetadata.message}
                  </ValidationBlock>
                )}
              </CreateFormGroup>
              <ButtonsBlock>
                <FormButtonsWrap>
                  <CreateFormButton type="submit" className="left-btn">
                    Create
                  </CreateFormButton>
                  <CreateFormButton>Back</CreateFormButton>
                </FormButtonsWrap>
              </ButtonsBlock>
            </CreateForm>
          </CreateContainer>
        )}
      </CreateSec>
    </Background>
  );
};

export default CreateNFT;
