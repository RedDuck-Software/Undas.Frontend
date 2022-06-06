import styled from "styled-components";

export const Wrap = styled.div``;
export const BigCardWrap = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #5d3f92;
  max-height: 340px;
`;
export const ImageWrap = styled.div`
  width: 60%;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: #fff;
  @media (max-width: 992px) {
    height: 250px;
  }
  @media (max-width: 768px) {
    height: 180px;
  }
  @media (max-width: 640px) {
    height: 250px;
  }
`;
export const BigImage = styled(Image)`
  max-height: 100%;
  border-radius: 10px 0 0 10px;
`;

export const CardBody = styled.div`
  padding: 30px 20px 50px;
`;
export const BigCardBody = styled(CardBody)`
  width: 40%;
  padding: 50px 30px 20px;
`;
export const Name = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #7c7c7c;
  text-transform: uppercase;
  @media (max-width: 1200px) {
  }
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #5d3f92;
  margin-top: 10px;
`;
export const BigCardTitle = styled(Title)`
  font-size: 24px;
  line-height: 29px;
  margin-top: 20px;
`;
export const BigCardTextWrap = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const BigCardText = styled.p`
  margin: 0;
`;
export const CardLink = styled.a`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #873dc1;
  margin-top: 2rem;
  text-align: right;
  text-decoration: none;
  &:hover {
    color: #873dc1;
    text-decoration: underline;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
