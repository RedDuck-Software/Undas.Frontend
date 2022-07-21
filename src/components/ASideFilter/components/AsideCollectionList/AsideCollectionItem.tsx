import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AsideCollectionItemProps } from "./types";

import { addSelectedCollection } from "../../../../store/reducers/Filter/filterActions";
import {
  CheckboxLabel,
  FilterCollectionItemWrapper,
  CheckboxInputWrapper,
  CheckboxInput,
  FilterCollectionItemTitle,
  CollectionItemTitleName,
  CollectionItemTitleIcon,
  CollectiomItemTitleVol,
  CollectionItemInfoWrapper,
  //  CollectionItemVerify,
  //  CollectionItemVerifyIcon,
  //  CollectionItemVerifyText,
  CollectionItemVerifyFloor,
} from "../../ASideFilter.styles";
//import { VerifyIcon } from "../../imports";

export const AsideCollectionItem: React.FC<AsideCollectionItemProps> = ({
  id,
  collectionIcon,
  collectionName,
  //isVerified,
  vol,
  floor,
}) => {
  const dispatch = useDispatch();
  const [longName, setLongName] = useState<string>("");
  const handleCollectionName = (name: string /* , verify: boolean */) => {
    if (name.length > 14 /* && verify === true */) {
      const trunced = collectionName.slice(0, 10) + "...";
      setLongName(trunced);
    } else {
      setLongName(name);
    }
  };

  useEffect(() => {
    handleCollectionName(collectionName /* , isVerified */);
  }, []);

  return (
    <CheckboxLabel>
      <FilterCollectionItemWrapper>
        <FilterCollectionItemTitle>
          <CheckboxInputWrapper>
            <CheckboxInput
              type="checkbox"
              className="custom-checkbox"
              id={collectionName}
              mr="15px"
              onClick={() =>
                dispatch(
                  addSelectedCollection(id, collectionIcon, collectionName),
                )
              }
            />
            <CheckboxLabel htmlFor={collectionName} />
          </CheckboxInputWrapper>
          <CollectionItemTitleName>
            <CollectionItemTitleIcon src={collectionIcon} />
            {longName}
          </CollectionItemTitleName>
          {/* {isVerified !== undefined && isVerified !== null && (
            <CollectionItemVerify>
              <CollectionItemVerifyIcon src={VerifyIcon} />
              <CollectionItemVerifyText>UND</CollectionItemVerifyText>
            </CollectionItemVerify>
          )} */}
        </FilterCollectionItemTitle>
        <CollectionItemInfoWrapper>
          <CollectiomItemTitleVol>
            {vol && `Vol=${ethers.utils.formatEther(vol)}`}
          </CollectiomItemTitleVol>
          <CollectionItemVerifyFloor>
            {floor && `Floor=${ethers.utils.formatEther(floor)}`}
          </CollectionItemVerifyFloor>
        </CollectionItemInfoWrapper>
      </FilterCollectionItemWrapper>
    </CheckboxLabel>
  );
};
