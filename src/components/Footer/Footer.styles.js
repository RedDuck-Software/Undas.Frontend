import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const FooterSec = styled.footer`
  background: #f6e9ff;
`

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1.8fr 2.2fr;

  min-height: 100%;
  padding: 3rem;

  @media (max-width: 1019px) {
    padding: 2.5rem;

    grid-template-columns: 3fr 1fr;
  }

  ${Container}
`

export const FooterText = styled.span`
  font-size: 1.5rem;
  word-spacing: 0.3rem;

  @media (max-width: 1169px) {
    font-size: 1.3rem;
  }

  @media (max-width: 954px) {
    font-size: 1.1rem;
  }

  @media (max-width: 869px) {
    font-size: 1rem;
  }

  @media (max-width: 734px) {
    font-size: 0.85rem;
  }
`

export const TopLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-self: end;
`

export const BottomLeftWrapper = styled(TopLeftWrapper)`
  margin-top: 12%;
  align-self: start;

  ${TopLeftWrapper}
`

export const TopRightWrapper = styled(TopLeftWrapper)`
  flex-direction: row;
  ${TopLeftWrapper}
`

export const BottomRightWrapper = styled(TopLeftWrapper)`
  margin-top: 10%;

  flex-direction: row;
  gap: 10%;

  @media (max-width: 969px) {
    gap: 2%;
  }

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

  @media (max-width: 869px) {
    margin-top: 1.25rem;
    gap: 1rem;

    img {
      width: 30px;
    }
  }

  @media (max-width: 734px) {
    margin-top: 1rem;
  }
`

export const FooterIcon = styled.img`
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.15s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (max-width: 869px) {
    border-radius: 5px;
  }
`

export const CustomSearch = styled.div`
  width: 350px;
  position: relative;

  @media (max-width: 1019px) {
    width: 265px;
  }

  @media (max-width: 869px) {
    width: 215px;
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
    width: 260px;
    height: 50px;
    padding-left: 1rem;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media (max-width: 869px) {
    width: 210px;
    height: 38px;
    padding-left: 1rem;
    font-size: 0.75rem;

    &::placeholder {
      font-size: 0.85rem;
    }
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
  }

  @media (max-width: 1019px) {
    top: 35%;
  }

  @media (max-width: 869px) {
    width: 210px;
  }

  @media (max-width: 869px) {
    top: 42%;
    width: 60px;
    height: 24px;
    font-size: 0.75rem;
  }
`

export const PhoneImage = styled.img`
  width: 255px;

  @media (max-width: 1084px) {
    width: 200px;
  }

  @media (max-width: 1019px) {
    width: 170px;
  }
`

export const LeftSide = styled.div`
  @media (max-width: 801px) {
    img {
      width: 150px;
      height: 108.82px;
    }
  }
`

export const RightSide = styled.div`
  max-width: 500px;
  align-self: end;
  padding-left: 2rem;

  ${FooterText} {
    display: inline-block;
    min-width: 300px;
    padding-bottom: 28px;
  }

  @media (max-width: 1084px) {
    padding: 2rem 0 0 1.625rem;
  }

  @media (max-width: 1019px) {
    padding: 1.5rem 0 0 1rem;

    ${FooterText} {
      display: inline-block;
      min-width: 300px;
      padding-bottom: 18px;
      font-size: 1.1rem;
      max-width: 150px;
    }
  }

  @media (max-width: 954px) {
    ${FooterText} {
      min-width: 240px;
      padding-bottom: 18px;
      font-size: 1rem;
      max-width: 150px;
    }
  }

  @media (max-width: 869px) {
    padding: 0 0 0 1rem;

    ${FooterText} {
      min-width: 180px;
    }
  }

  @media (max-width: 801px) {
    ${FooterText} {
      font-size: 0.95rem;
      min-width: 180px;
    }

    img {
      width: 90px;
    }
  }
`

export const TopicColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
`

export const TopicTitle = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;

  @media (max-width: 1169px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1019px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 954px) {
    font-size: 1.25rem;
  }

  @media (max-width: 734px) {
    font-size: 1.15rem;
  }
`

export const TopicText = styled.span`
  align-items: flex-start;
  font-size: 1.2rem;
  padding: 0.3rem 0;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }

  @media (max-width: 1169px) {
    font-size: 1rem;
  }

  @media (max-width: 801px) {
    padding: 0.25rem 0;
  }

  @media (max-width: 734px) {
    font-size: 0.9rem;
  }
`

export const Year = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem;
  color: #7c7c7c;
  font-size: 16px;
`
