import React, { useState } from "react";

import { ViewButton, ViewOption } from "../../pages/AllNFTs/AllNFTs.styles";
import { GridIco, ListIco } from "../../pages/AllNFTs/imports";
import { ViewMode } from "../../types/viewMode";

const useViewMode = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.grid);
  return {
    viewMode,
    viewButtonsRender: (
      <ViewOption>
        <ViewButton
          className={viewMode === ViewMode.grid ? "grid-active" : ""}
          onClick={() => setViewMode(ViewMode.grid)}
        >
          <GridIco />
        </ViewButton>
        <ViewButton
          className={viewMode === ViewMode.list ? "grid-active" : ""}
          onClick={() => setViewMode(ViewMode.list)}
        >
          <ListIco />
        </ViewButton>
      </ViewOption>
    ),
  };
};

export default useViewMode;
