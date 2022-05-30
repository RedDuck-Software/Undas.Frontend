import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import {
  FaqTabsWrapper,
  TabText,
  ContentTitle,
  ContentText,
  TabButton,
  UndasLink,
  AddToWatchlistLink,
  AccordionWrap,
  AccordionItem,
  DescriptionText,
  AccordionHeader,
  HeaderText,
  HeadText,
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
                      How can I add a collection to my watchlist?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="second">
                      Where can I find NFT sales?
                    </TabButton>
                  </Nav.Item>
                  <Nav.Item>
                    <TabButton eventKey="third">
                      How do I find my transaction hash?
                    </TabButton>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <TabText>
                      <ContentTitle>
                        To get started, navigate to any collection page on{" "}
                        <UndasLink href="#">UNDAS</UndasLink>
                      </ContentTitle>
                      <ContentText>
                        To get started, navigate to any collection page on{" "}
                        <UndasLink href="#">UNDAS</UndasLink>
                      </ContentText>
                      <ContentText>
                        On the right side of the collection view, you&#39;ll see
                        a new button -{" "}
                        <AddToWatchlistLink>
                          Add to Watchlist
                        </AddToWatchlistLink>
                      </ContentText>
                      <ContentText>
                        Click the button to add the collection to your
                        watchlist. If successful, you should get a confirmation
                        message on the bottom right hand corner of your page
                      </ContentText>
                      <ContentText>
                        To see your watchlist, hover your mouse over your
                        profile icon on the top right corner your page. Click on
                        Watchlist, the third option on the dropdown menu
                      </ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <TabText>
                      <ContentTitle>Where can I find NFT sales?</ContentTitle>
                      <ContentText></ContentText>
                      <ContentText></ContentText>
                      <ContentText></ContentText>
                      <ContentText></ContentText>
                    </TabText>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <TabText>
                      <ContentTitle>
                        How do I find my transaction hash?
                      </ContentTitle>
                      <ContentText></ContentText>
                      <ContentText></ContentText>
                      <ContentText></ContentText>
                      <ContentText></ContentText>
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
                    How can I add a collection to my watchlist?
                  </HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <HeadText>
                      How can I add a collection to my watchlist?
                    </HeadText>
                    <ContentText>
                      To get started, navigate to any collection page on{" "}
                      <UndasLink href="#">UNDAS</UndasLink>
                    </ContentText>
                    <ContentText>
                      On the right side of the collection view, you&#39;ll see a
                      new button -{" "}
                      <AddToWatchlistLink>Add to Watchlist</AddToWatchlistLink>
                    </ContentText>
                    <ContentText>
                      Click the button to add the collection to your watchlist.
                      If successful, you should get a confirmation message on
                      the bottom right hand corner of your page
                    </ContentText>
                    <ContentText>
                      To see your watchlist, hover your mouse over your profile
                      icon on the top right corner your page. Click on
                      Watchlist, the third option on the dropdown menu
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
                  <HeaderText>Where can I find NFT sales?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      To get started, navigate to any collection page on{" "}
                      <UndasLink href="#">UNDAS</UndasLink>
                    </ContentText>
                    <ContentText>
                      On the right side of the collection view, you&#39;ll see a
                      new button -{" "}
                      <AddToWatchlistLink>Add to Watchlist</AddToWatchlistLink>
                    </ContentText>
                    <ContentText>
                      Click the button to add the collection to your watchlist.
                      If successful, you should get a confirmation message on
                      the bottom right hand corner of your page
                    </ContentText>
                    <ContentText>
                      To see your watchlist, hover your mouse over your profile
                      icon on the top right corner your page. Click on
                      Watchlist, the third option on the dropdown menu
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
                  <HeaderText>How do I find my transaction hash?</HeaderText>
                </AccordionHeader>
                <AccordionBody>
                  <DescriptionText>
                    <ContentText>
                      To get started, navigate to any collection page on{" "}
                      <UndasLink href="#">UNDAS</UndasLink>
                    </ContentText>
                    <ContentText>
                      On the right side of the collection view, you&#39;ll see a
                      new button -{" "}
                      <AddToWatchlistLink>Add to Watchlist</AddToWatchlistLink>
                    </ContentText>
                    <ContentText>
                      Click the button to add the collection to your watchlist.
                      If successful, you should get a confirmation message on
                      the bottom right hand corner of your page
                    </ContentText>
                    <ContentText>
                      To see your watchlist, hover your mouse over your profile
                      icon on the top right corner your page. Click on
                      Watchlist, the third option on the dropdown menu
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
