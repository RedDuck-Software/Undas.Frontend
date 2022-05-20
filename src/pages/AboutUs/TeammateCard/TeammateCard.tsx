import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import { CardImg1, CardImg2, LinkedInIco, TwitterIco } from "./imports";
import {
  CardWrap,
  TeamCard,
  TeamCardTitle,
  TeamCardLink,
} from "./TeammateCard.styles";

const TeammateCards = () => {
  return (
    <CardWrap>
      <Row xs={2} md={5} className="g-5">
        {Array.from({ length: 5 }).map(() => (
          <>
            <Col>
              <TeamCard>
                <Card.Img variant="top" src={CardImg1} />
                <Card.Body>
                  <TeamCardTitle>Name</TeamCardTitle>
                  <TeamCardTitle>Surname</TeamCardTitle>
                  {/* If you will want some Description
                    <Card.Text>

                    </Card.Text> */}
                  <TeamCardLink href="#">
                    <img src={LinkedInIco} alt="icon" />
                  </TeamCardLink>
                  <TeamCardLink href="#">
                    <img src={TwitterIco} alt="icon" />
                  </TeamCardLink>
                </Card.Body>
              </TeamCard>
            </Col>
            <Col>
              <TeamCard>
                <Card.Img variant="top" src={CardImg2} />
                <Card.Body>
                  <TeamCardTitle>Name</TeamCardTitle>
                  <TeamCardTitle>Surname</TeamCardTitle>
                  <TeamCardLink href="#">
                    <img src={LinkedInIco} alt="icon" />
                  </TeamCardLink>
                  <TeamCardLink href="#">
                    <img src={TwitterIco} alt="icon" />
                  </TeamCardLink>
                </Card.Body>
              </TeamCard>
            </Col>
          </>
        ))}
      </Row>
    </CardWrap>
  );
};

export default TeammateCards;
