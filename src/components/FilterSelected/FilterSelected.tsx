import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  SelectedCollection,
  SelectedCollectionIcon,
  RemoveSelectedCollection,
  SelectedCollectionsList,
  SelectedCollectionsWrapper,
  RemoveAllSelectedCollection,
} from "./FilterSelected.styles";

import { CloseIcon } from "../../pages/AllNFTs/imports";
import {
  clearAll,
  removeSelectedCollection,
} from "../../store/reducers/Filter/filterActions";
import {
  useSelectedCollections,
  useSelectedCategories,
} from "../../store/reducers/Filter/helpers";

interface SelectedCollectionItemProps {
  icon?: string;
  label: string;
}

const SelectedItem: React.FC<SelectedCollectionItemProps> = ({
  icon,
  label,
}) => {
  const dispatch = useDispatch();
  const handleUnselectCollection = (name: string) => {
    const element: HTMLElement = document.getElementById(label)!;
    element.click();
    dispatch(removeSelectedCollection(name));
  };
  const [longName, setLongName] = useState<string>("");
  const handleCollectionName = (name: string) => {
    if (name && name.length > 9) {
      const trunced = name.slice(0, 8) + "...";
      setLongName(trunced);
    } else {
      setLongName(name);
    }
  };

  useEffect(() => {
    handleCollectionName(label);
  }, []);

  return (
    <SelectedCollection onClick={() => handleUnselectCollection(label)}>
      <SelectedCollectionIcon src={icon} />
      {longName}
      <RemoveSelectedCollection src={CloseIcon} />
    </SelectedCollection>
  );
};

const FilterSelected: React.FC = () => {
  const dispatch = useDispatch();
  const collections = useSelector(useSelectedCollections);
  const categories = useSelector(useSelectedCategories);

  const [selectedCollections, setSelectedCollections] =
    useState<any>(collections);
  const [selectedCategories, setSelectedCategories] = useState<any>(categories);

  useEffect(() => {
    setSelectedCollections(collections);
  }, [collections]);

  useEffect(() => {
    setSelectedCategories(categories);
  }, [categories]);

  useEffect(() => {
    return () => {
      dispatch(clearAll());
    };
  }, []);

  const handleClearAll = () => {
    selectedCollections.forEach((item: any) => {
      const element: HTMLElement = document.getElementById(
        item.collectionName,
      )!;
      element.click();
    });
    selectedCategories.forEach((item: any) => {
      const element: HTMLElement = document.getElementById(item.categoryName)!;
      element.click();
    });
    dispatch(clearAll());
  };

  return (
    <>
      {selectedCollections.length > 0 || selectedCategories.length > 0 ? (
        <SelectedCollectionsWrapper>
          <SelectedCollectionsList>
            {selectedCollections.map((item: any) => {
              return (
                <SelectedItem
                  key={`${item.collectionName}-${item.collectionIcon}`}
                  label={item.collectionName}
                  icon={item.collectionIcon}
                />
              );
            })}
            {selectedCategories.map((item: any) => {
              return (
                <SelectedItem
                  key={`${item.categoryName}-${item.categoryIcon}`}
                  label={item.categoryName}
                  icon={item.categoryIcon}
                />
              );
            })}
          </SelectedCollectionsList>
          <RemoveAllSelectedCollection onClick={handleClearAll}>
            Clear all
          </RemoveAllSelectedCollection>
        </SelectedCollectionsWrapper>
      ) : null}
    </>
  );
};

export default FilterSelected;
