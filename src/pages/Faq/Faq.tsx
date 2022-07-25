import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import {
  FaqTabsWrapper,
  TabText,
  ContentText,
  ContentTitle,
  TabButton,
  UndasLink,
  AccordionWrap,
  AccordionItem,
  DescriptionText,
  AccordionHeader,
  HeaderText,
  AccordionBody,
  AccordionContainer,
  PageFAQTitle,
} from "./Faq.styles";

import { Background, Container } from "../../globalStyles";

const Faq: React.FC = () => {
  return (
    <Background>
      <Container>
        <PageFAQTitle>FAQ</PageFAQTitle>
        <FaqTabsWrapper>
          <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <TabButton eventKey="first">
                      How can I create NFT?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="second">
                      How does an NFT rent work?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="third">
                      What can act as collateral for NFT rent and who determines it?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="fourth">
                      How does NFT staking work and what types of NFT can I stake?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="fifth">
                      Can I stake NFT and sell it at the same time?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="sixth">
                      What is a return offer?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="seventh">               
                      What is a Defi offer?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="eighth">
                      What does the UND token give?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="ninth">
                      Where can I buy the UND token?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="tenth">
                      I want to act as an advisor, investor or become a UNDAS partner, how can I contact you?
                    </TabButton>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <TabText>
                      <ContentTitle>
                        How can I create NFT?
                      </ContentTitle>
                      <ContentText>
                        To create an NFT, go to the «Create» section and select the «Add NFT».
                        Then enter all the data and activate the preview function.  
                        Please note that the platform is still working in the Goerli testnet network and
                        only test ones can be created in nft.  Follow the project news in the Blog and our social networks.
                        <UndasLink href="#">UNDAS</UndasLink>
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <TabText>
                      <ContentTitle>
                        How does an NFT rent work?
                      </ContentTitle>
                      <ContentText>
                        You can rent NFTs on the <UndasLink href="#">UNDAS</UndasLink> platform.  
                        To do this, you need to either accept an existing offer to 
                        rent NFT or offer your own terms for the lease of any NFT.  
                        You can view all NFTs available for rent by checking the filter 
                        field in the status section next to the rent field.  
                        You can make a rent offer by going to a specific NFT and clicking 
                        in the field for rent: make an offer
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <TabText>
                      <ContentTitle>
                        What can act as collateral for NFT rent and who determines it?
                      </ContentTitle>
                      <ContentText>
                        The collateral can be a native blockchain coin, stablecoin, UND token, as well as other NFTs.
                        The pledge and its amount are determined by the owner of the NFT.
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <TabText>
                      <ContentTitle>
                        How does NFT staking work and what types of NFT can I stake?
                      </ContentTitle>
                      <ContentText>
                        NFT staking is available for the most traded collections, while NFT must be placed on 
                        the <UndasLink href="#">UNDAS</UndasLink> platform and put up for sale or rent, after which the staking 
                        button becomes active on the NFT card.
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <TabText>
                      <ContentTitle>
                        Can I stake NFT and sell it at the same time?
                      </ContentTitle>
                      <ContentText>
                        Yes, you can, only after accepting the offer to sell, the NFT automatically 
                        leaves the staking and passes to a new buyer, respectively, the staking stops.
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <TabText>
                      <ContentTitle>
                        What is a return offer?
                      </ContentTitle>
                      <ContentText>
                        You can return the offer to the buyer or seller until you agree on the price of the 
                        transaction and its terms.  Thanks to this mechanism, NFT exchange transactions with 
                        additional payment in one direction or the other are possible.
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <TabText>
                      <ContentTitle>
                        What is a Defi offer?
                      </ContentTitle>
                      <ContentText>
                        This is an offer where you offer liquidity against the user&#39;s NFT, or request liquidity against your own NFT.
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth">
                    <TabText>
                      <ContentTitle>
                        What does the UND token give?
                      </ContentTitle>
                      <ContentText>
                        UND is a platform token, using it , you will receive discounts on all commissions 
                        in the amount of 50 percent, and UND holders also receive 30 percent of all paid 
                        commissions on the platform.
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ninth">
                    <TabText>
                      <ContentTitle>
                        Where can I buy the UND token?
                      </ContentTitle>
                      <ContentText>
                        At the moment we are testing the project, subscribe to us on social networks and 
                        stay tuned for news and updates.
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tenth">
                    <TabText>
                      <ContentTitle>
                      I want to act as an advisor, investor or become a <UndasLink href="#">UNDAS</UndasLink> partner, how can I contact you?
                      </ContentTitle>
                      <ContentText>
                        Email <UndasLink href="#">info@undas.io</UndasLink> and <UndasLink href="#">ceo@undas.io</UndasLink>
                      </ContentText>
                      <ContentText>
                        We are open for cooperation.
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </FaqTabsWrapper>
        <AccordionContainer>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>
                    How can I create NFT?
                  </HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      To create an NFT, go to the «Create» section and select the «Add NFT».
                      Then enter all the data and activate the preview function.  
                      Please note that the platform is still working in the Goerli testnet network and
                      only test ones can be created in nft.  Follow the project news in the Blog and our social networks.
                      <UndasLink href="#">UNDAS</UndasLink>
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>How does an NFT rent work?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      You can rent NFTs on the <UndasLink href="#">UNDAS</UndasLink> platform.  
                      To do this, you need to either accept an existing offer to 
                      rent NFT or offer your own terms for the lease of any NFT.  
                      You can view all NFTs available for rent by checking the filter 
                      field in the status section next to the rent field.  
                      You can make a rent offer by going to a specific NFT and clicking 
                      in the field for rent: make an offer
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>What can act as collateral for NFT rent and who determines it?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      The collateral can be a native blockchain coin, stablecoin, UND token, as well as other NFTs.
                      The pledge and its amount are determined by the owner of the NFT.
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>How does NFT staking work and what types of NFT can I stake?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      NFT staking is available for the most traded collections, while NFT must be placed on 
                      the <UndasLink href="#">UNDAS</UndasLink> platform and put up for sale or rent, after which the staking 
                      button becomes active on the NFT card.
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>Can I stake NFT and sell it at the same time?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>  
                    <ContentText>
                      Yes, you can, only after accepting the offer to sell, the NFT automatically 
                      leaves the staking and passes to a new buyer, respectively, the staking stops.
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText> What is a return offer?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      You can return the offer to the buyer or seller until you agree on the price of the 
                      transaction and its terms.  Thanks to this mechanism, NFT exchange transactions with 
                      additional payment in one direction or the other are possible.
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>What is a Defi offer?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      This is an offer where you offer liquidity against the user&#39;s NFT, or request liquidity against your own NFT.
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>What does the UND token give?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      UND is a platform token, using it , you will receive discounts on all commissions 
                      in the amount of 50 percent, and UND holders also receive 30 percent of all paid 
                      commissions on the platform.
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>Where can I buy the UND token?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      At the moment we are testing the project, subscribe to us on social networks and 
                      stay tuned for news and updates.
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
          <AccordionWrap className="settings-accordion">
            <Accordion>
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  <HeaderText>I want to act as an advisor, investor or become a <UndasLink href="#">UNDAS</UndasLink> partner, how can I contact you?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      Email <UndasLink href="#">info@undas.io</UndasLink> and <UndasLink href="#">ceo@undas.io</UndasLink>
                    </ContentText>
                    <ContentText>
                      We are open for cooperation.
                    </ContentText>
                  </DescriptionText>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </AccordionWrap>
        </AccordionContainer>
      </Container>
    </Background>
  );
};

export default Faq;
