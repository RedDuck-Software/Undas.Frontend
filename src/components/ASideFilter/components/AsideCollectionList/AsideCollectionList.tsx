import React, { useState, useEffect } from "react";

import { AsideCollectionItem } from "./AsideCollectionItem";
//import { AsideCollectionItemProps } from "./types";

import { useGetCollections } from "../../../../utils";
import {
  HolderElement,
  ElementText,
  AccordionArrow,
  AccordionMenu,
  AccordionElement,
  SearchInputWrapper,
  MobileListWrap,
} from "../../ASideFilter.styles";
import { CollectionsIco } from "../../imports";

interface AsideCollectionListProps {
  activeMenu: { collection: boolean };
  setActiveMenu: React.Dispatch<React.SetStateAction<{ collection: boolean }>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideCollectionList: React.FC<AsideCollectionListProps> = ({
  activeMenu,
  setActiveMenu,
  active,
  setActive,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchCollectionPattern, setSearchCollectionPattern] =
    useState<string>("");

  const { collections, collectionsError } = useGetCollections(
    searchCollectionPattern,
  );

  const handleCollectionSearchInput = (event: any) => {
    const pattern: string = event?.target.value;
    setSearchInput(pattern);
  };

  useEffect(() => {
    if (searchInput.length == 0 || searchInput.length >= 2) {
      setSearchCollectionPattern(searchInput);
    }
  }, [searchInput]);

  return (
    <>
      <HolderElement
        onClick={() => {
          if (!activeMenu.collection) {
            setActiveMenu({ collection: true });
            !active && setActive(true);
          } else setActiveMenu({ collection: false });
        }}
        isActive={activeMenu.collection}
      >
        <CollectionsIco />
        <ElementText>Collections</ElementText>
        <AccordionArrow
          className={(activeMenu.collection && "active-collection") || ""}
        />
      </HolderElement>
      <AccordionMenu
        backgroundColor="rgba(251, 245, 255, 0.7)"
        mh={`${126 + collections.length * 63}px`} // calculate max-height because of accordion animation bug
        className={(activeMenu.collection && "active-collection") || ""}
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
            </MobileListWrap>
          </>
        )}
      </AccordionMenu>
    </>
  );
};

export default AsideCollectionList;
