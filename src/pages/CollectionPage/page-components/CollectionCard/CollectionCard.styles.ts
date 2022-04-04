import styled from "styled-components";

export const CardWrap = styled.div `
  padding: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 5px 5px rgba(135, 61, 193, 0.25);
  backdrop-filter: blur(50px);
  font-weight: 400;
  font-size: 12px;
  color: #232428;
  max-width: 445px;
  margin-top: -70px;
`



export const ImageWrap = styled.div `
  width: 100px;
  height: 100px;
  display: inline-block;
`

export const Description = styled.span `
  max-width: 218px;
`

export const SocialWrap = styled.div `
  max-width: 192px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  margin-left: auto;
  gap: 15px;
  svg {
    cursor: pointer;
  }
`

export const CollectionName = styled.h2 `
  font-size: 36px;
  font-weight: 400;
`

export const Creator = styled.h4 `
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: inline-block;
  color: #232428;
`

export const PurpleText = styled(Creator) `
  color: #873DC1;
`