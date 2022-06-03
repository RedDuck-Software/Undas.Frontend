import styled from "styled-components";

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
  width: 400px;
  height: 400px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #FBF5FF;
  padding: 10px;
  @media (max-width: 1220px) {
    width: 300px;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 320px;
  object-fit: cover;
  background-color: #fff;
`;
export const NFTAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const Name = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
  margin-right: 10px;
`;
export const CollectionText = styled(Name)`
  margin-right: 0;
`;
export const CreatorText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7C7C7C;
`;
export const CreatorLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #873DC1;
  text-decoration: none;
  margin-left: 5px;
  &:hover{
    text-decoration: underline;
    color: #873DC1;
  }
`;