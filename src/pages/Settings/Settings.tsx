import React from "react";

import {
    SettingsWrap
} from "./Settings.styles";
import SettingsTabs from "./SettingsTabs/SettingsTabs";
import { Background, Container, } from "../../globalStyles";

const Settings = () => {
    return (
        <Background>
            <Container>
                <SettingsWrap>
                    <SettingsTabs />
                </SettingsWrap>
            </Container>
        </Background>
    )
}

export default Settings