import styled from "styled-components";

import { PrimaryButton, SecondaryButton } from "../../../../globalStyles";
import {
  UndasDiv,
  TextGet,
  TextUndas,
  TextStacking,
  SliderButtonsBlock,
} from "../Slider/Slider.styles";

export const MobileHeadWrap = styled(UndasDiv)`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    position: static;
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    padding: 20px 0;
    backdrop-filter: none;
  }
`;
export const MobileTextGet = styled(TextGet)`
  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 35px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;
export const MobileTextUndas = styled(TextUndas)`
  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 35px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;
export const MobileTextStacking = styled(TextStacking)`
  margin-bottom: 20px;
  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
export const MobileSliderButtonsBlock = styled(SliderButtonsBlock)`
  display: flex;
  flex-direction: row;
  position: static;
  width: 100%;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  height: auto;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const MobileExploreButton = styled(PrimaryButton)`
  flex: 0 0 45%;
  padding: 10px;
  @media (max-width: 576px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;
export const MobileCreateButton = styled(SecondaryButton)`
  margin: 0;
  flex: 0 0 45%;
  padding: 10px;
  @media (max-width: 576px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;
