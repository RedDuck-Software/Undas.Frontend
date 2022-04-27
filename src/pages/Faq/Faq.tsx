import React from "react";

import { Background, Container } from "../../globalStyles";

import { FaqTitle, FaqTabsWrapper, TabText, ContentTitle, ContentText, TabButton } from "./Faq.styles";

import { Tabs, Tab, TabContainer, TabContent, TabPane, Row, Col, Nav } from 'react-bootstrap';

export default function Faq() {
  return (
    <Background>
      <Container>
        
          <FaqTitle>FAQ</FaqTitle>
          <FaqTabsWrapper>
            <Tab.Container id="left-tabs" defaultActiveKey="first">
              <Row>
                <Col sm={4}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <TabButton eventKey="first">How can I add a collection to my watchlist?</TabButton>
                    </Nav.Item>
                    <Nav.Item>
                      <TabButton eventKey="second">Where can I find NFT sales?</TabButton>
                    </Nav.Item>
                    <Nav.Item>
                      <TabButton eventKey="third">How do I find my transaction hash?</TabButton>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <TabText>
                        <ContentTitle>How can I add a collection to my watchlist?</ContentTitle>
                        <ContentText>
                        To get started, navigate to any collection page on <a href="#" className="content-text-link">UNDAS</a>
                        </ContentText>
                        <ContentText>
                          On the right side of the collection view, you'll see a new button, <span>Add to Watchlist</span>
                        </ContentText>
                        <ContentText>
                        Click the button to add the collection to your watchlist. If successful, you should get a confirmation message on the bottom right hand corner of your page
                        </ContentText>
                        <ContentText>
                        To see your watchlist, hover your mouse over your profile icon on the top right corner your page. Click on Watchlist, the third option on the dropdown menu
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
                        <ContentTitle>How do I find my transaction hash?</ContentTitle>
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

      </Container>
    </Background>
  );
}
