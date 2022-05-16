import styled from "styled-components";

export const BurgerWrap = styled.div `
  overflow: hidden;
`;

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 5px;
    right: 20px;
    z-index: 2;
    display: none;
    @media (max-width: 1024px){
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
        div{
            width: 2rem;
            height: 4px;
            background-color: ${({open}) => open ? "#873DC1" : "#873DC1" } ;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all .2s;

            &:first-child{
                transform: ${({open}) => open ? "rotate(45deg)" : ""};
            }
            &:nth-child(2){
                opacity: ${({open}) => open ? "0" : "1"};
            }
            &:last-child{
                transform: ${({open}) => open ? "rotate(-45deg)" : ""};
            }
        }
`;

export const Navigation = styled.div `
  display: none;
  @media (max-width: 1024px){
    display: flex;
    padding-top: 50px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    flex-direction: column;
    height: 100vh;
    width: 30%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
  }
`;
export const NavigationMenu = styled.div `
 
`;
