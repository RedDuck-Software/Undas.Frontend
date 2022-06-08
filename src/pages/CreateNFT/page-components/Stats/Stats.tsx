import React, { Dispatch, SetStateAction } from "react";
import {
  CreateFormGroup,
  ModalBlock,
  ModalBlockDescript,
  WithPropertiesBlock,
  ModalTitle,
} from "../../CreateNFT.styles";
import { StatsIco } from "../../imports";
import { Stat } from "../../types";
import StatsModal from "../SettingsModal/StatsModal";
import StatList from "./StatList";

interface StatsProps {
  statList: Stat[];
  setStatList: Dispatch<SetStateAction<Stat[]>>;
}

const Stats: React.FC<StatsProps> = ({ statList, setStatList }) => {
  return (
    <CreateFormGroup>
      <ModalTitle>
        <StatsIco /> Stats
      </ModalTitle>
      <ModalBlock>
        <ModalBlockDescript>
          Numerical traits that just show as numbers
        </ModalBlockDescript>
        <StatsModal setStatList={setStatList} />
      </ModalBlock>
      <WithPropertiesBlock>
        <StatList statList={statList} />
      </WithPropertiesBlock>
    </CreateFormGroup>
  );
};

export default Stats;
