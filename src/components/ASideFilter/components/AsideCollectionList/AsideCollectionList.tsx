import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { AsideCollectionItem } from "./AsideCollectionItem";

import { useGetCollections } from "../../../../utils";
import { IAction, IState } from "../../ASideFilter";
import {
  HolderElement,
  ElementText,
  AccordionArrow,
  AccordionMenu,
  AccordionElement,
  SearchInputWrapper,
  MobileListWrap,
  ClipLoaderWrapper,
} from "../../ASideFilter.styles";
import { CollectionsIco } from "../../imports";
import { AsideSection } from "../../types";

interface AsideCollectionListProps {
  dispatch: React.Dispatch<IAction>;
  state: IState;
}

export const AsideCollectionList: React.FC<AsideCollectionListProps> = ({
  dispatch,
  state,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchCollectionPattern, setSearchCollectionPattern] =
    useState<string>("");

  const { collections, collectionsLoading, collectionsError } =
    useGetCollections(searchCollectionPattern);

  const handleCollectionSearchInput = (event: any) => {
    const pattern: string = event?.target.value;
    setSearchInput(pattern);
  };

  useEffect(() => {
    if (searchInput.length == 0 || searchInput.length >= 3) {
      setSearchCollectionPattern(searchInput);
    }
  }, [searchInput]);

  return (
    <>
      <HolderElement
        onClick={() => {
          if (!state.collection) {
            dispatch({ type: AsideSection.menu, payload: true });
          }
          dispatch({
            type: AsideSection.collections,
            payload: !state.collection,
          });
        }}
        isActive={state.collection}
      >
        <CollectionsIco />
        <ElementText>Collections</ElementText>
        <AccordionArrow
          className={(state.collection && "active-collection") || ""}
        />
      </HolderElement>
      <AccordionMenu
        backgroundColor="rgba(251, 245, 255, 0.7)"
        mh={`${126 + collections.length * 63}px`} // calculate max-height because of accordion animation bug
        className={(state.collection && "active-collection") || ""}
      >
        {collectionsError ? (
          <>
            <h5>Somethimg went wrong...</h5>
            <p>{collectionsError}</p>
          </>
        ) : (
          <>
            <AccordionElement padd="20px 15px 0 15px">
              <SearchInputWrapper
                placeholder="Search"
                onChange={handleCollectionSearchInput}
                type="search"
                value={searchInput}
              />
            </AccordionElement>
            <MobileListWrap>
              {collectionsLoading ? (
                <ClipLoaderWrapper>
                  <ClipLoader
                    color={"#BD10E0"}
                    loading={collectionsLoading}
                    size={125}
                  />
                </ClipLoaderWrapper>
              ) : (
                <>
                  {collections.length > 0 ? (
                    <>
                      {collections.map((item: any) => {
                        return (
                          <AsideCollectionItem
                            key={`${item.id}-${item.collectionName}-${item.collectionIcon}`}
                            id={item.id}
                            collectionName={item.collectionName}
                            collectionIcon={item.collectionUrl}
                            //isVerified={item.isVerified}
                            vol={item.collectionVolume}
                            floor={
                              item.tokens.length > 0 ? item.tokens[0].price : ""
                            }
                          />
                        );
                      })}
                    </>
                  ) : (
                    "No Collections found"
                  )}
                </>
              )}
            </MobileListWrap>
          </>
        )}
      </AccordionMenu>
    </>
  );
};
