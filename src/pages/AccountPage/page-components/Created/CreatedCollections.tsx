import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect } from "react";

import Collection from "./page-components/Collection";

import Context from "../../../../utils/Context";
import NoData from "../NoData/NoData";

interface CreatedCollectionsProps {
  createdCollections: any[];
}

const CreatedCollections: React.FC<CreatedCollectionsProps> = ({
  createdCollections,
}) => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
  }, [connector, account]);

  return (
    <>
      {createdCollections && createdCollections.length > 0 ? (
        <Collection itemList={createdCollections} />
      ) : (
        <NoData />
      )}
    </>
  );
};

export default CreatedCollections;
