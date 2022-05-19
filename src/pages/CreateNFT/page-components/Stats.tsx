import React from 'react';

import CompleteBar from './CompleteBar';
import { LevelsWrap } from './Proprties.styles';

const Stats: React.FC<{ complete?: number }> = ({ complete }) => {
  return (
    <LevelsWrap>
      <CompleteBar complete={complete} />
    </LevelsWrap>
  );
};

export default Stats;
