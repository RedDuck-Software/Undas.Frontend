import { yupResolver } from "@hookform/resolvers/yup";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createClient } from "urql";

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
  MenuItem,
  FilterMenu,
  Arrow,
  FilterTitle,
  FilterItem,
  Filter,
  BlockchainIMG,
} from "./CreateNFT.styles";
import {
  ImgIcon,
  UnlockableContentIco,
  ExplicitContentIco,
  ton,
  bsc,
  solana,
} from "./imports";
import Levels from "./page-components/Levels/Levels";
import Properties from "./page-components/Properties/Properties";
import Stats from "./page-components/Stats/Stats";
import Switcher from "./page-components/Switcher/Switcher";
import {
  CreateNFTForm,
  Level,
  Property,
  SelectItemType,
  Stat,
  CollectionType,
} from "./types";
import { validationSchema } from "./validation";

import { CreateSelect, SelectItem } from "../../components";
import LoadingModal from "../../components/LoadingModal/LoadingModal";
import Error from "../../components/Modal/Error/Error";
import { Background } from "../../globalStyles";
import ethIcon from "../../icons/tokens/eth-grey.svg";
import {
  useLevels,
  useProperties,
  useStats,
} from "../../store/reducers/createNFT/helpers";
import { UndasGeneralNFT__factory } from "../../typechain/factories/UndasGeneralNFT__factory";
import { TransactionError } from "../../types/global";
import Context from "../../utils/Context";
import { PolygonIcon } from "../AllNFTs/imports";
import { ValidationBlock } from "../CreateCollection/CreateCollection.styles";
import { FormButtonsWrap } from "../Settings/SettingsTabs/Profile/ProfileSettings.styles";

const SelectCollectionList: React.FC<{
  setCollection: Dispatch<SetStateAction<SelectItemType>>;
  items: any;
}> = ({ setCollection, items }) => {
  console.log('dsadas',items)
  return (
    <>
      {items.map((item: any) => {
        return (
          <SelectItem
            key={item.collectionId}
            setSelected={setCollection}
            label={item.collectionName}
            collectionId={item.id}
          />
        );
      })}
    </>
  );
};

interface IState {
  name: string;
  urlImage: string;
  externalLink: string;
  description: string;
  supply: string;
  freezeMetadata: string;
}

interface IAction {
  type: string;
  value: string;
}

const initialState: IState = {
  name: "",
  urlImage: "",
  externalLink: "",
  description: "",
  supply: "1",
  freezeMetadata: "",
};

const reducer = (state: IState, action: IAction) => {
  if (action.type === "reset") {
    return initialState;
  }
  const result = { ...state };
  result[action.type as keyof typeof initialState] = action.value;
  return result;
};

const CreateNFT: React.FC = () => {
  const [showTransactionError, setShowTransactionError] =
    useState<boolean>(false);
  const [transactionError, setTransactionError] = useState<TransactionError>({
    code: -1,
    message: "",
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, urlImage, externalLink, description, supply, freezeMetadata } =
    state;
  const { connector } = useContext(Context);
  const web3ReactState = useWeb3React();
  const { account } = web3ReactState;
  const [, /* file */ setFile] = useState<string>();
  /*  const [fileSizeError,  setFileSizeError] = useState<{
    message: string;
    inputName: string;
  }>(); */
  const [collection, setCollection] = useState<SelectItemType>({
    label: "Select collection",
    icon: "",
  });
  const [collectionError, setCollectionError] = useState<any>("");
  const [propertyList, setPropertyList] = useState<Property[]>(
    useSelector(useProperties),
  );
  const [levelList, setLevelList] = useState<Level[]>(useSelector(useLevels));
  const [statList, setStatList] = useState<Stat[]>(useSelector(useStats));
  const [isOnlockableContent, setIsOnlockableContent] =
    useState<boolean>(false);
  const [isSensetiveContent, setIsSensetiveContent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [autoRedirect, setAutoRedirect] = useState<boolean>(false);
  const navigate = useNavigate();
  const [collectionList, setCollectionsList] = useState<CollectionType[]>([
    {
      collectionId: "",
      collectionName: "",
    },
  ]);

  useEffect(() => {
    if (!connector) {
      navigate("/login");
    }
    getTokenData();
  }, [connector, account]);
  console.log(collection)

  const formOptions: { resolver: any } = {
    resolver: yupResolver(validationSchema),
  };
  const { register, formState, handleSubmit } =
    useForm<CreateNFTForm>(formOptions);
  const { errors } = formState;
  console.log('ID',collection.collectionId)

  const mintNFT = async () => {
    if (!connector || !account) return;
    if (collection.collectionId == "") {
      alert("Choose collection or create if it doesn`t exist ");
      return;
    }
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const NFTContract = UndasGeneralNFT__factory.connect(
      "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d", //goerli contract addr
      signer,
    );

    try {
      const tx = await NFTContract.safeMintGeneral(
        account,
        description,
        name,
        urlImage,
        collection.collectionId!,
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

  const onSubmit = () => {
    if (Object.keys(errors).length > 0) return;
    setAutoRedirect(true);
    mintNFT();
  };
  /* const fileSizeValidation = (fileList: FileList, inputName: string) => {
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
  }; */

  /*  const fileHandler = (event: React.FormEvent) => {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
      if (fileSizeValidation(fileList, "File")) {
        return;
      }
      const file = URL.createObjectURL(fileList[0]);
      setFile(file);
    }
  }; */

  const unlockacleHandler = () => {
    setIsOnlockableContent(!isOnlockableContent);
  };

  const sensetiveHandler = () => {
    setIsSensetiveContent(!isSensetiveContent);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    dispatch({ type: name, value });
  };

  const handleCleanForm = () => {
    setFile("");
    setIsOnlockableContent(false);
    setIsSensetiveContent(false);
    setLoading(false);
    setAutoRedirect(false);
    dispatch({ type: "reset", value: "" });
  };

  const getTokenData = async () => {
    const tokensQuery = await fetchData();
    const data = tokensQuery.data.collections
    data.push({collectionName:'All Nfts',collectionId:0})
    setCollectionsList(tokensQuery.data.collections);

  };
  console.log()
  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const tokensQuery = `
  {
      collections(where:{owner:"${account}"}){
        collectionName
        id
      }

  }
 `;
  const client = createClient({
    url: APIURL,
  });

  async function fetchData() {
    const data = await client.query(tokensQuery).toPromise();
    return data;
  }

  const [, /* blockchainFilter */ setbBlockchainFilter] = useState<string>("");

  const [active, setActive] = useState<any>({
    blockchain: false,
  });

  useEffect(() => {
    if (collection.collectionId) {
      setCollectionError("");
    }
  }, [collection]);

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
                  {urlImage ? (
                    <NFTItemPreview src={urlImage} />
                  ) : (
                    <img src={ImgIcon} alt="image-icon" />
                  )}
                </NFTItemLabel>
                <NFTItemInput
                  disabled
                  id="NFT"
                  /* onChange={fileHandler} */
                  required
                />
              </AddFileBlock>
              {/* {fileSizeError && fileSizeError.inputName === "File" && (
                <ValidationBlock>{fileSizeError.message}</ValidationBlock>
              )} */}
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>
                URL-image<span className="require-asterisk">*</span>
              </CreateLabel>
              <CreateInput
                type="text"
                id="urlImage"
                {...register("urlImage")}
                name="urlImage"
                placeholder="URL-image"
                value={urlImage}
                onChange={onChange}
              />
              {errors.urlImage && (
                <ValidationBlock>{errors.urlImage.message}</ValidationBlock>
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
                onChange={onChange}
              />
              {errors.name && (
                <ValidationBlock>{errors.name.message}</ValidationBlock>
              )}
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
                id="externalLink"
                placeholder="https://yoursite.io/item/123"
                {...register("externalLink")}
                value={externalLink}
                onChange={onChange}
              />
              {errors.externalLink && (
                <ValidationBlock>{errors.externalLink.message}</ValidationBlock>
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
                onChange={onChange}
              />
              {errors.description && (
                <ValidationBlock>{errors.description.message}</ValidationBlock>
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
                  <SelectCollectionList
                    setCollection={setCollection}
                    items={collectionList}
                  />
                }
                item={collection}
              />
              <BlockDescript className="collection-descript">
                This is the collection where your item will appear
              </BlockDescript>
            </CreateFormGroup>
            {collectionError.length > 0 && (
              <ValidationBlock>{collectionError}</ValidationBlock>
            )}
            <CreateFormGroup>
              <CreateLabel htmlFor="blockchain">Blockchain</CreateLabel>
              <BlockDescript>
                Select the blockchain where you&#39;d like new items from this
                collection to be added by default
              </BlockDescript>
              <Filter className={active.blockchain && "sort-active"}>
                <FilterItem
                  onClick={() => {
                    if (!active.blockchain) {
                      setActive({ blockchain: true });
                    } else setActive({ blockchain: false });
                  }}
                >
                  <FilterTitle>
                    <BlockchainIMG src={ethIcon} alt="blockchain-image" />
                    Ethereum
                  </FilterTitle>
                  <Arrow className={active.blockchain && "sort-active"} />
                </FilterItem>
                <FilterMenu className={active.blockchain && "sort-active"}>
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setbBlockchainFilter("");
                    }}
                  >
                    <FilterTitle>
                      <BlockchainIMG src={ethIcon} alt="blockchain-image" />
                      Ethereum
                    </FilterTitle>
                  </MenuItem>
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setbBlockchainFilter("");
                    }}
                  >
                    <FilterTitle>
                      <BlockchainIMG src={PolygonIcon} alt="blockchain-image" />
                      Polygon
                    </FilterTitle>
                  </MenuItem>
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setbBlockchainFilter("");
                    }}
                  >
                    <FilterTitle>
                      <BlockchainIMG src={solana} alt="blockchain-image" />
                      Solana
                    </FilterTitle>
                  </MenuItem>
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setbBlockchainFilter("high-to-low");
                    }}
                  >
                    <FilterTitle>
                      <BlockchainIMG src={bsc} alt="blockchain-image" />
                      BSC
                    </FilterTitle>
                  </MenuItem>
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setbBlockchainFilter("high-to-low");
                    }}
                  >
                    <FilterTitle>
                      <BlockchainIMG src={ton} alt="blockchain-image" />
                      TON
                    </FilterTitle>
                  </MenuItem>
                </FilterMenu>
              </Filter>
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
                onChange={onChange}
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
                onChange={onChange}
              />
              {errors.freezeMetadata && (
                <ValidationBlock>
                  {errors.freezeMetadata.message}
                </ValidationBlock>
              )}
            </CreateFormGroup>
            <ButtonsBlock>
              <FormButtonsWrap>
                <CreateFormButton
                  type="submit"
                  className="left-btn"
                  onClick={() => {
                    !collection.collectionId
                      ? setCollectionError("Please, select collection")
                      : "";
                  }}
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
