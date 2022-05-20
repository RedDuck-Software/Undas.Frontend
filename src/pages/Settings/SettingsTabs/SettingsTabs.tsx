import React from "react";

import AccountSupport from "./AccountSupport/AccountSupport";
import Earnings from "./Earnings/Earnings";
import Notifications from "./Notifications/Notifications";
import Offers from "./Offers/Offers";
import ProfileSettings from "./Profile/ProfileSettings";
import {
  SettingsTabWrap,
  DesktopTabs,
  DesktopTab,
  MobileTabs,
  MobileTab,
  MobileSettingsTabWrap,
} from "./SettingsTabs.styles";
import "./settings-tabs.css";

const SettingsTabs: React.FC = () => {
  return (
    <>
      <SettingsTabWrap className="settings-tab-wrap">
        <DesktopTabs
          defaultActiveKey="profile"
          id="settings-tab"
          className="mb-3"
        >
          <DesktopTab
            eventKey="profile"
            title={
              <span>
                <i className="profile-icon tab-icon" />
                Profile
              </span>
            }
          >
            <ProfileSettings />
          </DesktopTab>
          <DesktopTab
            eventKey="notifications"
            title={
              <span>
                <i className="notifications-icon tab-icon" />
                Notifications
              </span>
            }
          >
            <Notifications />
          </DesktopTab>
          <DesktopTab
            eventKey="offers"
            title={
              <span>
                <i className="offers-icon tab-icon" />
                Offers
              </span>
            }
          >
            <Offers />
          </DesktopTab>
          <DesktopTab
            eventKey="account-support"
            title={
              <span>
                <i className="support-icon tab-icon" />
                Account Support
              </span>
            }
          >
            <AccountSupport />
          </DesktopTab>
          <DesktopTab
            eventKey="earnings"
            title={
              <span>
                <i className="earnings-icon tab-icon" />
                Earnings
              </span>
            }
          >
            <Earnings />
          </DesktopTab>
        </DesktopTabs>
      </SettingsTabWrap>
      <MobileSettingsTabWrap>
        <MobileTabs defaultActiveKey="profile" id="mobile-settings-tab">
          <MobileTab
            eventKey="profile"
            title={
              <span>
                <i className="profile-icon tab-icon mobile-tab-icon" />
              </span>
            }
          >
            <ProfileSettings />
          </MobileTab>
          <MobileTab
            eventKey="notifications"
            title={
              <span>
                <i className="notifications-icon tab-icon mobile-tab-icon" />
              </span>
            }
          >
            <Notifications />
          </MobileTab>
          <MobileTab
            eventKey="offers"
            title={
              <span>
                <i className="offers-icon tab-icon mobile-tab-icon" />
              </span>
            }
          >
            <Offers />
          </MobileTab>
          <MobileTab
            eventKey="account-support"
            title={
              <span>
                <i className="support-icon tab-icon mobile-tab-icon" />
              </span>
            }
          >
            <AccountSupport />
          </MobileTab>
          <MobileTab
            eventKey="earnings"
            title={
              <span>
                <i className="earnings-icon tab-icon mobile-tab-icon" />
              </span>
            }
          >
            <Earnings />
          </MobileTab>
        </MobileTabs>
      </MobileSettingsTabWrap>
    </>
  );
};

export default SettingsTabs;
