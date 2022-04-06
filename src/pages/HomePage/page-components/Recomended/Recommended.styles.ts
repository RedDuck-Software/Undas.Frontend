import styled from "styled-components";
import {Link} from "react-router-dom";


export const RecommendedContainer = styled.div `
  margin-top: 80px;
`

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
  justify-content: space-between;
`
export const ViewAllBtn = styled.button `
  cursor: pointer;
  background: rgba(135,61,193, 0);
  border: 1px solid #873DC1;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  padding: 10px 32px;
  color: #873DC1;
  transition: all ease-in-out 0.15s;
  &:hover {
    background: rgba(135,61,193, 0.1);
  }
`

export const CategoriesWrap = styled.ul `
  list-style: none;
  width: 100%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
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
  transition: all ease-in-out 0.15s;
`

export const Image = styled.img `
  position: absolute;
  object-fit: fill;
  object-position: center;
  z-index: -1;
`

export const CategoryWrap = styled(Link)<ICategory> `
  cursor: pointer;
  text-decoration: none;
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  grid-area: ${props => props.gridArea};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(35, 36, 40, 0.5), inset 0px 0px 4px #FFFFFF;
  transition: all ease-in-out 0.25s;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
      ${Name} {
        color: #873DC1;
      }
  }
`

