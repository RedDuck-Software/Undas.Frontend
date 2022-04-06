import styled from "styled-components";

export const FavouriteSelect = styled.div `
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-width: 400px;
`

export const FavouriteButton = styled.button `
  cursor: pointer;
  background: #FFFFFF;
  height: 36px;
  border: none;
  //box-sizing: border-box;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #5D3F92;
  &.favourite-active {
    background-color: #EDD2FF;
  }
`