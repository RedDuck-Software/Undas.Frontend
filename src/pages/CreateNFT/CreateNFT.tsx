import { useState, useContext } from "react";
import Context from "../../utils/Context";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Background, Button } from "../../globalStyles";

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
  CreateSelect
} from "./CreateNFT.styles";
import { ethers } from "ethers";
import { UndasGeneralNFT__factory } from "../../typechain";
import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from "../../utils/addressHelpers";
import { useWeb3React } from "@web3-react/core";
import { ImgIcon } from "./imports"; 

type CreateSubmitForm = {
  externalLink: string;
  name: string;
  description: string;
};

const CreateNFT = () => {
  const { connector } = useContext(Context);
  const web3ReactState = useWeb3React();
  let { account } = web3ReactState;

  const [externalLink, setExternalLink] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const validationSchema = Yup.object().shape({
    contentURL: Yup.string().required("External Link is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const bid = async () => {
    if (!connector || !account) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = UndasGeneralNFT__factory.connect(
      "0xB073DeaC0dc753d27cC41a0f443000579d017361",
      signer
    );

    NFTContract.safeMintGeneral(account, description, name, externalLink);
  };

  return (
    <Background>
      <CreateSec>
        <CreateContainer>
          <CreateTitle>Create NFT</CreateTitle>
          
          <CreateForm>
            <BlockDescript><span className="require-asterisk">*</span>Required fields</BlockDescript>
            <CreateFormGroup>
              <CreateLabel>Image, Video, Audio, or 3D Model<span className="require-asterisk">*</span></CreateLabel>
              <BlockDescript>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF <br/>Max size: 100MB</BlockDescript>
              <AddImgButton>
                <img src={ImgIcon} alt="image-icon"/>
              </AddImgButton>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="name">Name<span className="require-asterisk">*</span></CreateLabel>
              <CreateInput
                type="text"
                id="text"
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
              <BlockDescript>UNDAS will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details</BlockDescript>
              <CreateInput
                type="text"
                id="text"
                placeholder="https://yoursite.io/item/123"
                {...register("externalLink")}
                value={externalLink}
                onChange={(e) => setExternalLink(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="description">Description</CreateLabel>
              <BlockDescript>The description will be included on the item's detail page underneath its image. Markdown syntax is supported</BlockDescript>
              <CreateTextArea
                placeholder="Provide a detailed description of your item"
                id="text"
                maxLength={500}
                {...register("description")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateSelect aria-label="">
                <option>Select collection</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CreateSelect>
            </CreateFormGroup>
          </CreateForm>
          <Button violet onClick={bid}>
            Mint
          </Button>
        </CreateContainer>
      </CreateSec>
    </Background>
  );
};

export default CreateNFT;
