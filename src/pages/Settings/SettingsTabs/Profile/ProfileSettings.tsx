import React from "react";

import {
    ProfileWrap,
    BannerWrap,
    BannerTitleWrap,
    BlockTitle,
    BlockDescript,
    AddBannerImgButton,
    MiddleBlockWrap,
    ProfileImageWrap,
    ProfileImageInner,
    AddProfileImgButton,
    DescriptInner,
    LinksWrap,
    InputList,
    InputItem,
    InformationWrap,
    InformationTextArea,
    RequiredFieldsWrap,
    RequiredField,
    CheckboxBlock,
    CheckboxInput,
    CheckboxLabel,
    BottomBlock,
    InputGroup,
    AdressInput,
    CopyButton,
    FormButton

} from "./ProfileSettings.styles";

import { BannerIcon } from "./imports";

import "./profile.css"

const ProfileSettings = () => {
    return (
        <ProfileWrap>
            <BannerWrap>
                <BannerTitleWrap>
                    <BlockTitle>Profile Banner</BlockTitle>
                    <BlockDescript>Recommended 1400px X 400px</BlockDescript>
                    <BlockDescript>Max size: 100MB</BlockDescript>
                </BannerTitleWrap>
                <AddBannerImgButton>
                    <img src={BannerIcon} alt="banner-icon"/>
                </AddBannerImgButton>
            </BannerWrap>
            <MiddleBlockWrap>
                <ProfileImageWrap>
                    <BlockTitle>Profile Image</BlockTitle>
                    <ProfileImageInner>
                        <AddProfileImgButton />
                        <DescriptInner>
                            <BlockDescript>Recommended 350px X 350px</BlockDescript>
                            <BlockDescript>Max size: 100MB</BlockDescript>
                        </DescriptInner>
                    </ProfileImageInner>
                </ProfileImageWrap>
                <LinksWrap>
                    <BlockTitle>Links</BlockTitle>
                    <InputList>
                        <InputItem placeholder="Your Twitter Handle" className="twitter" />
                        <InputItem placeholder="Your Discord Handle" className="discord" />
                        <InputItem placeholder="Your Instagram Handle" className="instagram" />
                        <InputItem placeholder="Yoursite.io" className="yoursite" />
                    </InputList>
                </LinksWrap>
                <InformationWrap>
                    <BlockTitle>Information</BlockTitle>
                    <InformationTextArea placeholder="Tell the world your story!"></InformationTextArea>
                </InformationWrap>
            </MiddleBlockWrap>
            <RequiredFieldsWrap>
                <BlockDescript><span className="require-asterisk">*</span>Required fields</BlockDescript>
                <RequiredField>
                    <BlockTitle>Username<span className="require-asterisk">*</span></BlockTitle>
                    <InputItem placeholder="Enter username" />
                </RequiredField>
                <RequiredField>
                    <BlockTitle>E-mail<span className="require-asterisk">*</span></BlockTitle>
                    <InputItem placeholder="Enter email" type="email" />
                </RequiredField>
                <RequiredField>
                    <BlockTitle>Telegram<span className="require-asterisk">*</span></BlockTitle>
                    <InputItem placeholder="Enter telegram" />
                </RequiredField>
            </RequiredFieldsWrap>
            <CheckboxBlock>
                <CheckboxInput type="checkbox" id="poject" className="custom-checkbox"/>
                <CheckboxLabel htmlFor="poject">I agree to get notifications of this project</CheckboxLabel>
                <CheckboxInput type="checkbox" id="purchases" className="custom-checkbox"/>
                <CheckboxLabel htmlFor="purchases">I agree to get notifications of purchases and sales</CheckboxLabel>
            </CheckboxBlock>
            <BottomBlock>
                <BlockTitle>Wallet Address</BlockTitle>
                <InputGroup>
                    <AdressInput className="parent">
                    <InputItem placeholder="0x5d46cb693bd0d1585d1de9823cb6b488281cc99c" className="adress-input"/>
                    <CopyButton className="copy-btn"/>
                    </AdressInput>
                    <FormButton>Save</FormButton>
                    <FormButton>Back</FormButton>
                </InputGroup>
            </BottomBlock>
        </ProfileWrap>
    )
}

export default ProfileSettings