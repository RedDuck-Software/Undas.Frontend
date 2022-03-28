import styled from "styled-components";

export const Title = styled.h2 `
  position: relative;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
  &:before {
    content: '';
    display: inline-block;
    margin-right: 10px;
    transform: translateY(-10px);
    width: 30px;
    height: 2px;
    background: #873DC1;
    border-radius: 10px;
  }
`
export const TitleWrap = styled.div `
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`

export const CategoriesWrap = styled.ul `
  list-style: none;
  width: 100%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

interface ICategory {
    bg?: string,
    gridArea?: string,
}

export const Name = styled.span `
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #fff;
`

export const Image = styled.img `
  position: absolute;
  width: 100%;
  z-index: -1;
`

export const CategoryWrap = styled.li<ICategory> `
  cursor: pointer;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg || ''};
  grid-area: ${props => props.gridArea};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(35, 36, 40, 0.5), inset 0px 0px 4px #FFFFFF;
`

