import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import {
  AddImgBlock,
  AddImgButton,
  AddFeaturedButton,
  AddBannerButton,
  AddBannerBlock,
  InputList,
  InputItem,
  CategoryGroup,
  CategoryDescript,
  EarningsInput,
} from './CreateCollection.styles';
import { ImgIcon, ExplicitContentIco, ArtIcon } from './imports';

import { Background } from '../../globalStyles';
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
  CreateSelect,
  SwitcherBlock,
  SwitcherTitle,
  FormButton,
  ButtonsBlock,
} from '../CreateNFT/CreateNFT.styles';
import Switcher from '../CreateNFT/page-components/Switcher/Switcher';

type CreateSubmitForm = {
  contentURL: string;
  name: string;
  information: string;
  creatorEarnings: string;
};

const CreateCollection: React.FC = () => {
  // const web3ReactState = useWeb3React();

  const [contentURL, setContentURL] = useState('');
  const [name, setName] = useState('');
  const [information, setInformation] = useState('');
  const [creatorEarnings, setCreatorEarnings] = useState('');

  const validationSchema = Yup.object().shape({
    contentURL: Yup.string().required('URL is required'),
    name: Yup.string().required('Name is required'),
    information: Yup.string().required('Information is required'),
    creatorEarnings: Yup.string().required('Creator Earnings is required'),
  });

  const { register } = useForm<CreateSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

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

    NFTContract.safeMintGeneral(account, information, name, contentURL);
  }; */

  return (
    <Background>
      <CreateSec>
        <CreateContainer>
          <CreateTitle>Create Collection</CreateTitle>
          <CreateForm>
            <BlockDescript>
              <span className="require-asterisk">*</span>Required fields
            </BlockDescript>
            <CreateFormGroup>
              <CreateLabel>
                Logo image<span className="require-asterisk">*</span>
              </CreateLabel>
              <AddImgBlock>
                <AddImgButton>
                  <img src={ImgIcon} alt="image-icon" />
                </AddImgButton>
                <BlockDescript>
                  This image will also be used for navigation
                  <br /> Recommended 350px X 350px
                </BlockDescript>
              </AddImgBlock>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>Featured image</CreateLabel>
              <AddImgBlock className="featured">
                <AddFeaturedButton>
                  <img src={ImgIcon} alt="image-icon" />
                </AddFeaturedButton>
                <BlockDescript>
                  This image will be used for featuring your collection on the
                  homepage, category pages or other promotional areas of UNDAS{' '}
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
                <AddBannerButton>
                  <img src={ImgIcon} alt="image-icon" />
                </AddBannerButton>
              </AddBannerBlock>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="name">
                Name<span className="require-asterisk">*</span>
              </CreateLabel>
              <CreateInput
                type="text"
                id="name"
                placeholder="Example: Pride Lands"
                maxLength={25}
                required
                {...register('name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                {...register('contentURL')}
                value={contentURL}
                onChange={(e) => setContentURL(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel htmlFor="information">Information</CreateLabel>
              <BlockDescript className="words-counter">
                0 of 1000 characters used
              </BlockDescript>
              <CreateTextArea
                id="information"
                maxLength={500}
                {...register('information')}
                value={information}
                onChange={(e) => setInformation(e.target.value)}
              />
            </CreateFormGroup>
            <CreateFormGroup>
              <CategoryGroup>
                <CreateLabel htmlFor="category" className="category-label">
                  Category
                </CreateLabel>
                <CreateSelect aria-label="" id="category">
                  <option>Add Category</option>
                  <option value="1">
                    <ArtIcon />
                    Artwork
                  </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CreateSelect>
                <CategoryDescript>
                  You can select a maximum of one category
                </CategoryDescript>
              </CategoryGroup>
            </CreateFormGroup>
            <CreateFormGroup>
              <CreateLabel>Links</CreateLabel>
              <InputList>
                <InputItem
                  placeholder="Your Twitter Handle"
                  className="twitter"
                />
                <InputItem
                  placeholder="Your Discord Handle"
                  className="discord"
                />
                <InputItem
                  placeholder="Your Instagram Handle"
                  className="instagram"
                />
                <InputItem placeholder="Yoursite.io" className="yoursite" />
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
                {...register('creatorEarnings')}
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
              <CreateSelect aria-label="" id="blockchain">
                <option>Ethereum</option>
                <option>Two</option>
                <option>Three</option>
              </CreateSelect>
            </CreateFormGroup>
            <CreateFormGroup>
              <SwitcherBlock>
                <SwitcherTitle>
                  <ExplicitContentIco /> Explicit & Sensitive Content
                </SwitcherTitle>
                <Switcher />
              </SwitcherBlock>
              <BlockDescript>
                Set this item as explicit and sensitive content
              </BlockDescript>
            </CreateFormGroup>
          </CreateForm>
          <ButtonsBlock>
            <FormButtonsWrap>
              <CreateFormButton className="left-btn">Create</CreateFormButton>
              <CreateFormButton>Back</CreateFormButton>
            </FormButtonsWrap>
          </ButtonsBlock>
        </CreateContainer>
      </CreateSec>
    </Background>
  );
};

export default CreateCollection;
