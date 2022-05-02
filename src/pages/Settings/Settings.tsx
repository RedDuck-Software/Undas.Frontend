import React from "react";

import {
    SettingsWrap
} from "./Settings.styles";
import SettingsTabs from "./SettingsTabs/SettingsTabs";

const Settings = () => {
    return (
        <SettingsWrap>
            <SettingsTabs />
        </SettingsWrap>
    )
}

export default Settings