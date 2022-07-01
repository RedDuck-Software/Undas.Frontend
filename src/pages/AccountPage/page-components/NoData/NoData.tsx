import React from "react";

import { NoDataWrapper, NoDataText } from "./NoData.styles";

const NoData: React.FC = () => {
  return (
    <NoDataWrapper>
      <NoDataText>Items not found...</NoDataText>
    </NoDataWrapper>
  );
};

export default NoData;
