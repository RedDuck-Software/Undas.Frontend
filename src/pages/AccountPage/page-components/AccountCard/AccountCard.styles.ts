import styled from "styled-components";
import {CardWrap} from "../../../CollectionPage/page-components/CollectionCard/CollectionCard.styles";
import {
  Verified,
  Copy,
  SingOut,
  Settings
} from '../../imports'

export const CopyIco = styled(Copy)`
  cursor: pointer;
`
export const SingOutIco = styled(SingOut)`
  cursor: pointer;
`
export const SettingsIco = styled(Settings)`
  cursor: pointer;
`

export const AccountWrap = styled(CardWrap) `
  width: 350px;
  ${CardWrap}
`

export const Name = styled.span `
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
`

export const VerifiedIco = styled(Verified) `
  margin-left: auto;
`

export const GrayText = styled.span `
  color: #7C7C7C;
`