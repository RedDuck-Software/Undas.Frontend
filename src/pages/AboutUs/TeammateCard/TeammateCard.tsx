import React from "react";
import { Card, Row } from "react-bootstrap";

import { CardImg1, CardImg2, LinkedInIco, TwitterIco } from "./imports";
import {
  CardWrap,
  TeamCard,
  TeamCardTitle,
  TeamCardLink,
  ColTeamCard,
  TeamCardTitleSurname,
  CardImg,
} from "./TeammateCard.styles";

const TeammateCards = () => {
  return (
    <CardWrap>
      <Row xs={2} md={5} className="">
        {Array.from({ length: 5 }).map(() => (
          <>
            <ColTeamCard>
              <TeamCard>
                <CardImg variant="top" src={CardImg1} />
                <Card.Body>
                  <TeamCardTitle>Name</TeamCardTitle>
                  <TeamCardTitleSurname>Surname</TeamCardTitleSurname>
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
            </ColTeamCard>
            <ColTeamCard>
              <TeamCard>
                <CardImg variant="top" src={CardImg2} />
                <Card.Body>
                  <TeamCardTitle>Name</TeamCardTitle>
                  <TeamCardTitleSurname>Surname</TeamCardTitleSurname>
                  <TeamCardLink href="#">
                    <img src={LinkedInIco} alt="icon" />
                  </TeamCardLink>
                  <TeamCardLink href="#">
                    <img src={TwitterIco} alt="icon" />
                  </TeamCardLink>
                </Card.Body>
              </TeamCard>
            </ColTeamCard>
          </>
        ))}
      </Row>
    </CardWrap>
  );
};

export default TeammateCards;
