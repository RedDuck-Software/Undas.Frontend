import styled from 'styled-components';

import { CollectionPrev } from './imports';

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const UndasDiv = styled.div`
  position: absolute;
  width: 830px;
  height: 130px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 4px 4px 4px rgb(35 36 40 / 50%);
  backdrop-filter: blur(30px);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  -moz-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  left: 160px;
  top: 50px;
  padding-top: 20px;
`;

export const TextGet = styled.span`
  font-family: 'Jost';
  font-style: semibold;
  font-weight: 600;
  font-size: 36px;
  line-height: 52px;
  background: linear-gradient(263.07deg, #873dc1 2.08%, #232428 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const TextUndas = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  background: #873dc1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const TextStacking = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  background: linear-gradient(263.07deg, #873dc1 2.08%, #232428 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: flex;
  padding-left: 22px;
  padding-top: 5px;
`;
export const UndasDivForBotton = styled.div`
  position: absolute;
  width: 255px;
  height: 130px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 4px 4px 4px rgb(35 36 40 / 50%);
  backdrop-filter: blur(30px);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  -moz-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  left: 160px;
  top: 240px;
  padding-top: 20px;
`;
export const ExploreButton = styled.button`
  width: 215px;
  height: 36px;
  background: #873dc1;
  border-radius: 10px;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
`;
export const CreateButton = styled.button`
  width: 215px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #873dc1;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #873dc1;
  margin-top: 15px;
`;
export const CollectionDiv = styled.div`
  position: absolute;
  width: 180px;
  height: 60px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 4px 4px 4px rgb(35 36 40 / 50%);
  backdrop-filter: blur(30px);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  -moz-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  bottom: 50px;
  right: 160px;
  padding-top: 20px;
`;
export const ImgNFTSmall = styled.img`
  width: 50px;
  height: 50px;
`;
export const IMGdiv = styled.div`
  background-image: url(${CollectionPrev});
  width: 50px;
  height: 50px;
  margin-top: -15px;
  border-radius: 10px;
  margin-left: 5px;
  position: absolute;
`;
export const CollectionTitle = styled.span`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #232428;
  top: 5px;
  position: absolute;
  margin-left: -30px;
  width: 100px;
`;
export const SeeCollection = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #873dc1;
  position: absolute;
  width: 100px;
  top: 30px;
  left: 60px;
`;
