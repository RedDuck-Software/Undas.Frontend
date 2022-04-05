import React, {FC} from 'react'
//Styles
import {
    AccountWrap,
    Name,
    VerifiedIco,
    GrayText,
    CopyIco,
    SingOutIco,
    SettingsIco
} from './AccountCard.styles'
import {ImageWrap} from "../../../CollectionPage/page-components/CollectionCard/CollectionCard.styles";
import {Wrapper} from "../../../CategoriesPage/Categories.styles";


//Mockup
import ProfilePic from '../../assets/profile-pic.png'

interface IAccountCard {
    account?: string,
    disconnect?: any
}

const AccountCard:FC<IAccountCard> = ({account, disconnect}) => {
    const accountSplit = account?.split('')
    const slicedAccount = accountSplit?.splice(6, 32, '...')
    return (
        <AccountWrap>
            <Wrapper disp="flex" gap="10px">
                <ImageWrap>
                    <img src={ProfilePic} alt="profile-pic" />
                </ImageWrap>
                <Wrapper disp="flex" flexDirection="column" gap="10px">
                    <Name>Unnamed</Name>
                    <Wrapper disp="flex" gap="10px">
                        <span>{accountSplit?.join("")}</span>
                        <CopyIco />
                    </Wrapper>
                    <span>"Return" is a meditation o...</span>
                    <GrayText>Was a long time ago</GrayText>
                </Wrapper>
                <VerifiedIco />
            </Wrapper>
            <Wrapper disp="flex" justifyContent="space-between" marg="5px 0 0 0" alignItems="center">
                <Wrapper disp="flex" gap="5px" curs="pointer" onClick={() => {
                    disconnect()
                }}>
                    <SingOutIco />
                    <GrayText>Sing Out</GrayText>
                </Wrapper>
                <SettingsIco />
            </Wrapper>
        </AccountWrap>
    )
}

export default AccountCard