import styled from "styled-components";

export const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid #5D3F92;
    height: 340px;
`;
export const BigCardWrap = styled(CardWrap)`
    flex-direction: row;
    grid-column-start: 1;
    grid-column-end: 4;
    max-height: 340px;
`;
export const ImageWrap = styled.div`
    
`;
export const BigImageWrap = styled(ImageWrap)`
    width: 50%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  /* @media (max-width: 992px) {
    height: 250px;
  }
  @media (max-width: 768px) {
    height: 180px;
  }
  @media (max-width: 640px) {
    height: 250px;
  } */
`;
export const BigImage = styled(Image)`
    border-radius: 10px 0 0 10px;
`;

export const CardBody = styled.div`
    padding: 20px;
    flex-grow: 1;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`;
export const BigCardBody = styled(CardBody)`
    width: 50%;
    padding: 30px;
    gap: 20px;
`;

export const CardTitle = styled.h2`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #5D3F92;
    margin: 0;
`;
export const BigCardTitle = styled(CardTitle)`
    font-size: 24px;
    line-height: 29px;
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
export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
`;
export const Date = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #7C7C7C;
    text-transform: uppercase;
  @media (max-width: 1200px) {
  }
`;