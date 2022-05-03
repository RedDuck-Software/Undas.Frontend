import React from "react";

import { Tabs, Tab } from 'react-bootstrap';

import {
    SettingsTabWrap,
    SettingsTab
} from "./SettingsTabs.styles";

import { ProfileIcon } from "./imports";


const SettingsTabs = () => {
    return (
        <SettingsTabWrap>
           
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <SettingsTab eventKey="profile" title={<span><i className="profile-icon"/>Profile</span>}>
                        
                    </SettingsTab>
                    <Tab eventKey="notifications" title="Notifications">
                        
                    </Tab>
                    <Tab eventKey="offers" title="Offers" >
                        
                    </Tab>
                    <Tab eventKey="account-support" title="Account Support" >
                        
                    </Tab>
                    <Tab eventKey="earnings" title="Earnings" >
                        
                    </Tab>
                </Tabs>
        </SettingsTabWrap>
    )
}

export default SettingsTabs