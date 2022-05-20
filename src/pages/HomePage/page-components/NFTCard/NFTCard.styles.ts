import styled from 'styled-components';

export const BtnNone = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const NFTWrap = styled.div`
  width: 350px;
  height: 390px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 360px;
`;

export const NFTAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 130px;
  padding: 15px;
  right: 0;
  bottom: 0;
  background: rgba(35, 36, 40, 0.5);
  backdrop-filter: blur(50px);
`;

export const Name = styled.span`
  font-family: 'Jost';
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #fff;
`;

export const CollectionImageWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
`;
