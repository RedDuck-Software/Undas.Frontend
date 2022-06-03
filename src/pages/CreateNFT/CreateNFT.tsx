import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";
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
  AddImgButton,
  CreateTextArea,
  CreateSelect,
  ModalTitle,
  ModalBlockDescript,
  ModalBlock,
  SwitcherBlock,
  SwitcherTitle,
  ButtonsBlock,
  WithPropertiesBlock,
  CreateFormButton,
} from "./CreateNFT.styles";
import {
  ImgIcon,
  LevelsIco,
  StatsIco,
  UnlockableContentIco,
  ExplicitContentIco,
} from "./imports";
import Levels from "./page-components/Levels";
import LevelsModal from "./page-components/SettingsModal/LevelsModal";
import StatsModal from "./page-components/SettingsModal/StatsModal";
import Stats from "./page-components/Stats";
import Switcher from "./page-components/Switcher/Switcher";
import { Background } from "../../globalStyles";
import { UndasGeneralNFT__factory } from "../../typechain/factories/UndasGeneralNFT__factory";
import { FormButtonsWrap } from "../Settings/SettingsTabs/Profile/ProfileSettings.styles";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import Context from "../../utils/Context";
import { validationSchema } from "./validation";
import { CreateNFTForm, Property } from "./types";
import Properties from "./page-components/Properties/Properties";
const undasGeneralNFTAbi = UndasGeneralNFT__factory.abi;

const CreateNFT: React.FC = () => {
  const { connector } = useContext(Context);
  const web3ReactState = useWeb3React();
  const { account } = web3ReactState;
  console.log(undasGeneralNFTAbi);

  //const [file, setFile] = useState<string>();
  const [name, setName] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [description, setDescription] = useState("");
  //const [collection, setCollection] = useState<string>();
  const [propertyList, setPropertyList] = useState<Property[]>([
    { type: "test1", name: "test-name1" },
    { type: "test2", name: "test-name2" },
    { type: "test3", name: "test-name3" },
    { type: "test4", name: "test-name4" },
  ]);
  const [supply, setSupply] = useState("");
  const [freezeMetadata, setFreezeMetadata] = useState("");

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit } = useForm<CreateNFTForm>(formOptions);

  const mintNFT = async () => {
    console.log("bid");
    console.log("connector" + connector);
    console.log("acc" + account);
    if (!connector || !account) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    console.log(provider);
    const signer = provider.getSigner(0);
    console.log(signer);
    // const SIGNER_ADDRESS = await signer.getAddress();
    // console.log("signer addr" + SIGNER_ADDRESS);

    const NFTContract = UndasGeneralNFT__factory.connect(
      "0x674002Df32E372E3D2E2CfC253471d0A5912fb9A", //goerli contract addr
      signer,
    );

    NFTContract.safeMintGeneral(account, description, name, externalLink);
  };

  const onSubmit = (formValues: any) => {
    alert(JSON.stringify(formValues));
  };
  return (
    <Background>
      <CreateSec>
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
              <AddImgButton>
                <img src={ImgIcon} alt="image-icon" />
              </AddImgButton>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="name">
                Name<span className="require-asterisk">*</span>
              </CreateLabel>
              <CreateInput
                type="text"
                id="name"
                placeholder="Item name"
                maxLength={25}
                required
                {...register("name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="external-link">External link</CreateLabel>
              <BlockDescript>
                UNDAS will include a link to this URL on this item&#39;s detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details
              </BlockDescript>
              <CreateInput
                type="text"
                id="external-link"
                placeholder="https://yoursite.io/item/123"
                {...register("externalLink")}
                value={externalLink}
                onChange={(e) => setExternalLink(e.target.value)}
              />
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
                maxLength={500}
                {...register("description")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup className="collection">
              <CreateLabel htmlFor="collection" className="collection-label">
                Collection
              </CreateLabel>
              <CreateSelect aria-label="" id="collection">
                <option>Select collection</option>
                <option value="1">OneOne</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CreateSelect>
              <BlockDescript>
                This is the collection where your item will appear
              </BlockDescript>
            </CreateFormGroup>
            <Properties
              propertyList={propertyList}
              setPropertyList={setPropertyList}
            />
            <CreateFormGroup>
              <ModalTitle>
                <LevelsIco /> Levels
              </ModalTitle>
              <ModalBlock>
                <ModalBlockDescript>
                  Numerical traits that show as a progress bar
                </ModalBlockDescript>
                <LevelsModal />
              </ModalBlock>
              <WithPropertiesBlock>
                <Levels />
              </WithPropertiesBlock>
            </CreateFormGroup>
            <CreateFormGroup>
              <ModalTitle>
                <StatsIco /> Stats
              </ModalTitle>
              <ModalBlock>
                <ModalBlockDescript>
                  Numerical traits that just show as numbers
                </ModalBlockDescript>
                <StatsModal />
              </ModalBlock>
              <WithPropertiesBlock>
                <Stats />
              </WithPropertiesBlock>
            </CreateFormGroup>
            <CreateFormGroup>
              <SwitcherBlock>
                <SwitcherTitle>
                  <UnlockableContentIco /> Unlockable Content
                </SwitcherTitle>
                <Switcher onClick={() => console.log("switch")} />
              </SwitcherBlock>
              <BlockDescript>
                Include unlockable content that can only be revealed by the
                owner of the item
              </BlockDescript>
            </CreateFormGroup>
            <CreateFormGroup>
              <SwitcherBlock>
                <SwitcherTitle>
                  <ExplicitContentIco /> Explicit & Sensitive Content
                </SwitcherTitle>
                <Switcher onClick={() => console.log("switch")} />
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
                type="text"
                id="supply"
                placeholder="1"
                {...register("supply")}
                value={supply}
                onChange={(e) => setSupply(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="freeze-metadata">
                Freeze metadata
              </CreateLabel>
              <BlockDescript>
                Freezing your metadata will allow you to permanently lock and
                store all of this item&#39;s content in decentralized file
                storage
              </BlockDescript>
              <CreateInput
                type="text"
                id="freeze-metadata"
                placeholder="To freeze your metadata, you must create your item first"
                {...register("freezeMetadata")}
                value={freezeMetadata}
                onChange={(e) => setFreezeMetadata(e.target.value)}
              />
            </CreateFormGroup>
            <ButtonsBlock>
              <FormButtonsWrap>
                <CreateFormButton
                  type="submit"
                  className="left-btn"
                  onClick={() => mintNFT()}
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

export default CreateNFT;
