import React, {useState} from "react";
import styled from "styled-components";
import NavBarMobile from "./NavBarMobile";
import { BurgerWrap, StyledBurger } from "./NavBarMobile.styles"



const Burger = () => {
    const [open, setOpen] = useState(false);
    return (
        <BurgerWrap>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <NavBarMobile open={open} />
        </BurgerWrap>
    )
}

export default Burger