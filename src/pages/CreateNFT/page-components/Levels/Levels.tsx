import React, { Dispatch, SetStateAction } from "react";
import {
  CreateFormGroup,
  ModalBlock,
  ModalBlockDescript,
  ModalTitle,
  WithPropertiesBlock,
} from "../../CreateNFT.styles";
import { LevelsIco } from "../../imports";
import { Level } from "../../types";
import LevelsModal from "../SettingsModal/LevelsModal";
import LevelList from "./LevelList";

interface LevelsProps {
  levelList: Level[];
  setLevelList: Dispatch<SetStateAction<Level[]>>;
}

const Levels: React.FC<LevelsProps> = ({ levelList, setLevelList }) => {
  return (
    <CreateFormGroup>
      <ModalTitle>
        <LevelsIco /> Levels
      </ModalTitle>
      <ModalBlock>
        <ModalBlockDescript>
          Numerical traits that show as a progress bar
        </ModalBlockDescript>
        <LevelsModal setLevelList={setLevelList} />
      </ModalBlock>
      <WithPropertiesBlock>
        <LevelList levelList={levelList} />
      </WithPropertiesBlock>
    </CreateFormGroup>
  );
};

export default Levels;
