import React from 'react';

import { SettingsWrap, BackgroundSettings } from './Settings.styles';
import SettingsTabs from './SettingsTabs/SettingsTabs';

import { Container } from '../../globalStyles';

const Settings = () => {
  return (
    <BackgroundSettings>
      <Container>
        <SettingsWrap>
          <SettingsTabs />
        </SettingsWrap>
      </Container>
    </BackgroundSettings>
  );
};

export default Settings;
