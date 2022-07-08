import styled from "styled-components";

export const Wrap = styled.div``;
export const SliderInner = styled.div`
  background-color: #fbf5ff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 30px;
`;
export const SliderTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  border: 1px solid rgba(124, 124, 124, 0.25);
  padding: 15px 30px;
  margin: 20px 0 0;
`;
export const CollectionCard = styled.div`
  min-height: 250px;
  width: 50%;
  background-color: #7c7c7c;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
`;
export const SliderButton = styled.a`
  display: block;
  background: #873dc1;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px 30px;
  width: 30%;
  margin: 5px auto;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-in;
  border: 1px solid transparent;
  &:hover {
    background-color: #ffffff;
    color: #873dc1;
    border: 1px solid #873dc1;
  }
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`;
