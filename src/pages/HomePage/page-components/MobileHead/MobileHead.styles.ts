import styled from "styled-components";

import { UndasDiv,
    TextGet,
    TextUndas,
    TextStacking,
    SliderButtonsBlock,
    ExploreButton,
    CreateButton
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
 @media (max-width: 992px){
    font-size: 24px;
    line-height: 35px;  
 }
 @media (max-width: 768px){
    font-size: 18px;
    line-height: 26px;  
 }
`;
export const MobileTextUndas = styled(TextUndas)`
 @media (max-width: 992px){
    font-size: 24px;
    line-height: 35px;
 }
 @media (max-width: 768px){
    font-size: 18px;
    line-height: 26px;  
 }
`;
export const MobileTextStacking = styled(TextStacking)`
    margin-bottom: 20px;
    @media (max-width: 992px){
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
    @media (max-width: 768px){
        font-size: 14px;
        line-height: 17px; 
    }
`;
export const MobileSliderButtonsBlock = styled(SliderButtonsBlock)`
    display: flex;
    position: static;
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
    height: auto;
    @media (max-width: 576px){
        flex-direction: column;
        gap: 15px;
    }
`;
export const MobileExploreButton = styled(ExploreButton)`
    flex: 0 0 45%;
    @media (max-width: 576px){
        flex: 0 0 100%;
        padding: 10px;
        width: 100%;
    }
`;
export const MobileCreateButton = styled(CreateButton)`
    margin: 0;
    flex: 0 0 45%;
    @media (max-width: 576px){
        flex: 0 0 100%;
        padding: 10px;
        width: 100%;
    }
`;