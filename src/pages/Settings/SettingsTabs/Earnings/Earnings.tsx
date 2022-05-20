import React from "react";

import {
  EarningsWrap,
  EarningsContentWrap,
  EarningsContentText,
  EarningsContentMessage,
} from "./Earnings.styles";

import { PageTitle } from "../../../../globalStyles";

const Earnings: React.FC = () => {
  return (
    <EarningsWrap>
      <PageTitle>Earnings</PageTitle>
      <EarningsContentWrap>
        <EarningsContentText>
          To access your 2021 Creator Earnings from NFT sales with this wallet
          using UNDAS, see below
        </EarningsContentText>
        <EarningsContentText>
          As a reminder, you are solely responsible for validating this
          information and determining what, if any, taxes apply to your NFT
          sales and/or creator earnings. UNDAS cannot determine for you what
          taxes you owe. For any questions, please reach out to{" "}
          <a href="">creatorearnings@undas.io</a>
        </EarningsContentText>
        <EarningsContentText>
          Note - this report does not include earnings from NFT sales where you
          are not the creator, and does not include fees earned on{" "}
          <a href="">Polygon</a> or Klaytn. For information on your other UNDAS
          activity, refer to the <a href="">Activity tab</a>
        </EarningsContentText>
        <EarningsContentMessage>
          This wallet address does not have any creator earnings from sales
          using UNDAS in 2021
        </EarningsContentMessage>
      </EarningsContentWrap>
    </EarningsWrap>
  );
};

export default Earnings;
