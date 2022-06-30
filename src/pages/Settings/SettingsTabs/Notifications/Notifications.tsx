import React from "react";
import Form from "react-bootstrap/Form";

import {
  NotificationWrap,
  FormItemWrapper,
  ItemsForm,
} from "./Notifications.styles";

import { PageTitle } from "../../../../globalStyles";
import { Button, DescriptionText } from "../SettingsTabs.styles";

const Notifications: React.FC = () => {
  return (
    <NotificationWrap>
      <PageTitle>Notification Settings</PageTitle>
      <DescriptionText>
        Select which notifications you would like to receive
      </DescriptionText>
      <ItemsForm>
        <FormItemWrapper>
          <Form.Check type="switch" id="item-switch" label="Item Sold" />
          <DescriptionText className="form-descript">
            When someone purchased one of your items
          </DescriptionText>
        </FormItemWrapper>
        <FormItemWrapper>
          <Form.Check type="switch" id="activity-switch" label="Bid Activity" />
          <DescriptionText className="form-descript">
            When someone purchased one of your items
          </DescriptionText>
        </FormItemWrapper>
        <FormItemWrapper>
          <Form.Check type="switch" id="item2-switch" label="Item Sold" />
          <DescriptionText className="form-descript">
            When someone purchased one of your items
          </DescriptionText>
        </FormItemWrapper>
        <FormItemWrapper>
          <Form.Check type="switch" id="item3-switch" label="Item Sold" />
          <DescriptionText className="form-descript">
            When someone purchased one of your items
          </DescriptionText>
        </FormItemWrapper>
        <FormItemWrapper>
          <Form.Check type="switch" id="item4-switch" label="Item Sold" />
          <DescriptionText className="form-descript">
            When someone purchased one of your items
          </DescriptionText>
        </FormItemWrapper>
      </ItemsForm>
      <Button className="left-btn">Save</Button>
    </NotificationWrap>
  );
};

export default Notifications;
