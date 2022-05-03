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
    CheckboxLabel
} from "./ProfileSettings.styles";

import { BannerIcon } from "./imports";

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
                        <InputItem placeholder="Your Twitter Handle"></InputItem>
                        <InputItem placeholder="Your Discord Handle"></InputItem>
                        <InputItem placeholder="Your Instagram Handle"></InputItem>
                        <InputItem placeholder="Yoursite.io"></InputItem>
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
                    <InputItem placeholder="Enter username"></InputItem>
                </RequiredField>
                <RequiredField>
                    <BlockTitle>E-mail<span className="require-asterisk">*</span></BlockTitle>
                    <InputItem placeholder="Enter email" type="email"></InputItem>
                </RequiredField>
                <RequiredField>
                    <BlockTitle>Telegram<span className="require-asterisk">*</span></BlockTitle>
                    <InputItem placeholder="Enter telegram"></InputItem>
                </RequiredField>
            </RequiredFieldsWrap>
            <CheckboxBlock>
                <CheckboxInput type="checkbox" id="poject" className="custom-checkbox"/>
                <CheckboxLabel htmlFor="poject">I agree to get notifications of this project</CheckboxLabel>
                <CheckboxInput type="checkbox" id="purchases" className="custom-checkbox"/>
                <CheckboxLabel htmlFor="purchases">I agree to get notifications of purchases and sales</CheckboxLabel>
            </CheckboxBlock>
        </ProfileWrap>
    )
}

export default ProfileSettings