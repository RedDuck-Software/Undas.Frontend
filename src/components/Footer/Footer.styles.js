import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const FooterSec = styled.footer`
  background: #f6e9ff;
`

export const FooterContainer = styled(Container)`
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 3rem 8rem 3.75rem 3rem;

  @media (max-width: 1159px) {
    padding: 3rem;
  }

  ${Container}
`

export const FooterText = styled.span`
  font-size: 1.5rem;
  word-spacing: 0.3rem;

  @media (max-width: 1169px) {
    font-size: 1.3rem;
  }
`

export const TopLeftWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 5rem;

  @media (max-width: 1169px) {
    padding-top: 3rem;
  }
`

export const BottomLeftWrapper = styled(TopLeftWrapper)`
  ${TopLeftWrapper}
`

export const TopRightWrapper = styled(TopLeftWrapper)`
  padding-top: 0.9rem;
  flex-direction: row;
  ${TopLeftWrapper}
`

export const BottomRightWrapper = styled(TopLeftWrapper)`
  display: flex;
  flex-direction: row;
  margin-left: -4.4rem;

  ${TopLeftWrapper}
`

export const FooterIconsWrapper = styled.div`
  margin-top: 1.625rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 1019px) {
    img {
      width: 40px;
    }
  }
`

export const FooterIcon = styled.img`
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.15s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

export const CustomSearch = styled.div`
  width: 350px;
  position: relative;

  @media (max-width: 1019px) {
    width: 310px;
  }
`

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 40px;
  outline: none;
  width: 350px;
  height: 62px;
  margin-top: 1rem;
  font-size: 1.25rem;
  padding-left: 2rem;
  color: #000000;

  &::placeholder {
    font-size: 1.25rem;
    color: #7c7c7c;
  }

  @media (max-width: 1019px) {
    &::placeholder {
      font-size: 1.15rem;
      color: #7c7c7c;
    }
  }

  @media (max-width: 1019px) {
    width: 310px;
  }
`

export const ButtonSubmit = styled.button`
  position: absolute;
  right: 1rem;
  top: 1.8rem;
  width: 90px;
  height: 36px;
  background: #893ac2;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  color: #fff;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #6a358f;
`

export const PhoneImage = styled.img`
  width: 255px;

  @media (max-width: 1084px) {
    width: 200px;
  }

  @media (max-width: 1019px) {
    width: 180px;
  }
`

export const LeftSide = styled.div``

export const RightSide = styled.div`
  column-gap: 20px;
  max-width: 500px;
  padding: 3rem 0 0 1.625rem;

  ${FooterText} {
    display: inline-block;
    min-width: 300px;
    padding-bottom: 28px;
  }

  @media (max-width: 1084px) {
    padding: 2rem 0 0 1.625rem;
  }

  @media (max-width: 1019px) {
    padding: 1.5rem 0 0 1.625rem;

    ${FooterText} {
      display: inline-block;
      min-width: 300px;
      padding-bottom: 18px;
    }
  }
`

export const TopicColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  margin-right: 4.4rem;

  @media (max-width: 1084px) {
    margin-right: 3.4rem;
  }

  @media (max-width: 1019px) {
    margin-right: 3rem;
  }
`

export const TopicTitle = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;

  @media (max-width: 1169px) {
    font-size: 1.5rem;
  }
`

export const TopicText = styled.span`
  font-size: 1.2rem;
  padding: 0.3rem 0;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    font-size: 1.23rem;
    font-weight: 500px;
  }

  @media (max-width: 1169px) {
    font-size: 1rem;
  }
`

export const Year = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
  color: #7c7c7c;
  font-size: 16px;
`
