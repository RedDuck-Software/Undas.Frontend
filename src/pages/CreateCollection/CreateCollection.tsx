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
} from "./CreateCollection.styles";
import { ethers } from "ethers";
import { UndasGeneralNFT__factory } from "../../typechain";
import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from "../../utils/addressHelpers";
import { useWeb3React } from "@web3-react/core";

type CreateSubmitForm = {
  contentURL: string;
  name: string;
  description: string;
};

const CreateCollection = () => {
  const { connector } = useContext(Context);
  const web3ReactState = useWeb3React();
  let { account } = web3ReactState;

  const [contentURL, setContentURL] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const validationSchema = Yup.object().shape({
    contentURL: Yup.string().required("Content URL is required"),
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

    NFTContract.safeMintGeneral(account, description, name, contentURL);
  };

  return (
    <Background>
      <CreateSec>
        <CreateContainer>
          <CreateTitle>Create Collection</CreateTitle>
          <CreateForm>
            <CreateFormGroup>
              <CreateLabel htmlFor="content-url">Content URL</CreateLabel>
              <CreateInput
                type="text"
                id="text"
                {...register("contentURL")}
                value={contentURL}
                onChange={(e) => setContentURL(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="name">Name</CreateLabel>
              <CreateInput
                type="text"
                id="text"
                maxLength={25}
                required
                {...register("name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="description">Description</CreateLabel>
              <CreateInput
                type="text"
                id="text"
                maxLength={500}
                {...register("description")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
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

export default CreateCollection;
