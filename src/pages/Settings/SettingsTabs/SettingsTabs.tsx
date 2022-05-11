import React from "react";

import { Tabs, Tab } from 'react-bootstrap';

import { SettingsTabWrap } from "./SettingsTabs.styles";
import "./settings-tabs.css";
import ProfileSettings from "./Profile/ProfileSettings";
import Notifications from "./Notifications/Notifications";
<<<<<<< HEAD

=======
import Offers from "./Offers/Offers";
import AccountSupport from "./AccountSupport/AccountSupport";
import Earnings from "./Earnings/Earnings";
>>>>>>> main

const SettingsTabs = () => {
    return (
        
            <SettingsTabWrap className="settings-tab-wrap">
            
                    <Tabs defaultActiveKey="profile" id="settings-tab" className="mb-3">
                        <Tab eventKey="profile" title={<span><i className="profile-icon tab-icon"/>Profile</span>}>
                            <ProfileSettings />
                        </Tab>
                        <Tab eventKey="notifications" title={<span><i className="notifications-icon tab-icon"/>Notifications</span>}>
                            <Notifications />
                        </Tab>
                        <Tab eventKey="offers" title={<span><i className="offers-icon tab-icon"/>Offers</span>}>
                            <Offers />
                        </Tab>
                        <Tab eventKey="account-support" title={<span><i className="support-icon tab-icon"/>Account Support</span>}>
<<<<<<< HEAD
                           
=======
                            <AccountSupport />
>>>>>>> main
                        </Tab>
                        <Tab eventKey="earnings" title={<span><i className="earnings-icon tab-icon"/>Earnings</span>}>
                            <Earnings />
                        </Tab>
                    </Tabs>
            </SettingsTabWrap>
            
    )
}

export default SettingsTabs