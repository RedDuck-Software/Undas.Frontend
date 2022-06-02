import React from "react";
import Accordion from "react-bootstrap/Accordion";

import {
  AccountSupportWrap,
  AccordionWrap,
  AccordionItem,
  MessageBlock,
  Image,
  MessageText,
  AccountSupportSelect,
  AccountSupportCheckboxInput,
  AccountSupportCheckboxLabel,
  AccountSupportButton,
} from "./AccountSupport.styles";
import { DollarIco } from "./imports";

import { PageTitle } from "../../../../globalStyles";
import { CheckboxBlock } from "../Profile/ProfileSettings.styles";
import { DescriptionText } from "../SettingsTabs.styles";

const AccountSupport: React.FC = () => {
  return (
    <AccountSupportWrap>
      <PageTitle>Account Support</PageTitle>
      <DescriptionText>
        If you need help related to your account, we can help you
      </DescriptionText>
      <AccordionWrap className="settings-accordion">
        <Accordion>
          <AccordionItem eventKey="0">
            <Accordion.Header>General help</Accordion.Header>
            <Accordion.Body>
              <DescriptionText>
                Visit our
                <a href="" className="accordion-text-link">
                  help center
                </a>
                to learn how to get started with buying, selling, and creating
              </DescriptionText>
            </Accordion.Body>
          </AccordionItem>
          <AccordionItem eventKey="1">
            <Accordion.Header>Contact UNDAS Support</Accordion.Header>
            <Accordion.Body>
              <DescriptionText>
                Can&#39;t find the answers you&#39;re looking for? You can
                <a href="" className="accordion-text-link">
                  submit a request
                </a>
                here
              </DescriptionText>
            </Accordion.Body>
          </AccordionItem>
          <AccordionItem eventKey="2">
            <Accordion.Header>Help with a compromised account</Accordion.Header>
            <Accordion.Body>
              <DescriptionText>
                If you believe your account has been compromised, let us know
                and we can lock your account. This will disable items in your
                wallet from being bought, sold, or transferred using UNDAS
                <a href="" className="accordion-text-link">
                  Learn more...
                </a>
                here
              </DescriptionText>
              <AccountSupportSelect>
                <option>I have unknown transactions on my account</option>
                <option>
                  I have everything but believe my account is compromisede
                </option>
                <option>Other</option>
              </AccountSupportSelect>
              <CheckboxBlock>
                <AccountSupportCheckboxInput
                  type="checkbox"
                  id="notary"
                  className="custom-checkbox"
                />
                <AccountSupportCheckboxLabel htmlFor="notary">
                  I understand I must provide a sworn statement certified by a &nbsp;
                  <a href="#" className="accordion-text-link">
                    notary public
                  </a>
                  &nbsp; to unlock my account
                </AccountSupportCheckboxLabel>
              </CheckboxBlock>
              <AccountSupportButton>Lock account</AccountSupportButton>
            </Accordion.Body>
          </AccordionItem>
          <AccordionItem eventKey="3">
            <Accordion.Header>Contact UNDAS Support</Accordion.Header>
            <Accordion.Body>
              <DescriptionText>
                You currently do not have any listings or offers to cancel
              </DescriptionText>
              <MessageBlock>
                <Image src={DollarIco} alt="icon" />
                <MessageText>
                  This method saves gas compared to cancelling an individual
                  listing or offer
                </MessageText>
              </MessageBlock>
            </Accordion.Body>
          </AccordionItem>
        </Accordion>
      </AccordionWrap>
    </AccountSupportWrap>
  );
};

export default AccountSupport;
