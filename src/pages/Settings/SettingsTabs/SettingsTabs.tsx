import React from "react";

import AccountSupport from "./AccountSupport/AccountSupport";
import Earnings from "./Earnings/Earnings";
import {
  ProfileIcon,
  NotficationsIcon,
  OffersIcon,
  SupportIcon,
  EarningsIcon,
} from "./imports";
import Notifications from "./Notifications/Notifications";
import Offers from "./Offers/Offers";
import ProfileSettings from "./Profile/ProfileSettings";
import {
  SettingsTabWrap,
  SettingTabs,
  SettingsTab,
  TabWrap,
  TabsText,
} from "./SettingsTabs.styles";

const SettingsTabs: React.FC = () => {
  return (
    <>
      <SettingsTabWrap className="settings-tab-wrap">
        <SettingTabs>
          <SettingsTab
            eventKey="profile"
            title={
              <TabWrap>
                <ProfileIcon />
                <TabsText>Profile</TabsText>
              </TabWrap>
            }
          >
            <ProfileSettings />
          </SettingsTab>
          <SettingsTab
            eventKey="notifications"
            title={
              <TabWrap>
                <NotficationsIcon />
                <TabsText>Notifications</TabsText>
              </TabWrap>
            }
          >
            <Notifications />
          </SettingsTab>
          <SettingsTab
            eventKey="offers"
            title={
              <TabWrap>
                <OffersIcon />
                <TabsText>Offers</TabsText>
              </TabWrap>
            }
          >
            <Offers />
          </SettingsTab>
          <SettingsTab
            eventKey="account-support"
            title={
              <TabWrap>
                <SupportIcon />
                <TabsText>Account Support</TabsText>
              </TabWrap>
            }
          >
            <AccountSupport />
          </SettingsTab>
          <SettingsTab
            eventKey="earnings"
            title={
              <TabWrap>
                <EarningsIcon />
                <TabsText>Earnings</TabsText>
              </TabWrap>
            }
          >
            <Earnings />
          </SettingsTab>
        </SettingTabs>
      </SettingsTabWrap>
    </>
  );
};

export default SettingsTabs;
