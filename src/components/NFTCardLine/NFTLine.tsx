import React, { FC } from "react";

import {
    ContainerLine,
} from "./NFTLine.styles";

import { ReactComponent as LockIco } from "../../../icons/lock.svg";
import { ReactComponent as PreviewIco } from "../../../icons/preview.svg";
import { ReactComponent as EthLogo } from "../../../icons/eth-logo-nft.svg";
import NFTExample from "../../../images/NFTExample.png";
import { BigNumber } from "ethers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


interface INFTGrid {
    tokenId: number;
    URI: string;
    name: string;
    price?: number;
    premium?: number;
}

const NFTGrid = (props: INFTGrid) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <ContainerLine>
            Enot
        </ContainerLine>
        
    );
};

export default NFTGrid;
