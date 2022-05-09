import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { PageTitle } from "../../../../globalStyles";
import {DescriptionText} from "../SettingsTabs.styles";
import {
    AccountSupportWrap,
    AccordionWrap,
    AccordionItem
} from "./AccountSupport.styles";

const AccountSupport = () => {
    return (
        <AccountSupportWrap>
            <PageTitle>Account Support</PageTitle>
            <DescriptionText>If you need help related to your account, we can help you</DescriptionText>
            <AccordionWrap className="settings-accordion">
                <Accordion>
                    <AccordionItem eventKey="0">
                        <Accordion.Header>General help</Accordion.Header>
                        <Accordion.Body>
                        <DescriptionText> Visit our <a href="" className="accordion-text-link">help center</a> to learn how to get started with buying, selling, and creating</DescriptionText>
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <Accordion.Header>Contact UNDAS Support</Accordion.Header>
                        <Accordion.Body>
                        <DescriptionText>Can't find the answers you’re looking for? You can <a href="" className="accordion-text-link">submit a request</a> here</DescriptionText>
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <Accordion.Header>Help with a compromised account</Accordion.Header>
                        <Accordion.Body>
                        <DescriptionText>If you believe your account has been compromised, let us know and we can lock your account. This will disable items in your wallet from being bought, sold, or transferred using UNDAS <a href="" className="accordion-text-link">Learn more...</a> here</DescriptionText>
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="3">
                        <Accordion.Header>Contact UNDAS Support</Accordion.Header>
                        <Accordion.Body>
                        <DescriptionText>You currently do not have any listings or offers to cancel</DescriptionText>
                        </Accordion.Body>
                    </AccordionItem>
                    </Accordion>
                </AccordionWrap>
        </AccountSupportWrap>
    )
}

export default AccountSupport