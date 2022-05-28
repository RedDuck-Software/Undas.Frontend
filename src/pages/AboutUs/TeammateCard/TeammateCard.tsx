import React from "react";
import { Row } from "react-bootstrap";

import { CardImg1, CardImg2, LinkedInIco, TwitterIco } from "./imports";
import {
  CardWrap,
  TeamCard,
  TeamCardTitle,
  TeamCardLink,
  ColTeamCard,
  TeamCardTitleSurname,
  CardImg,
  CardBody,
} from "./TeammateCard.styles";

const TeammateCards = () => {
  return (
    <CardWrap>
      <Row xs={2} md={5}>
        {Array.from({ length: 5 }).map(() => (
          <>
            <ColTeamCard>
              <TeamCard>
                <CardImg variant="top" src={CardImg1} />
                <CardBody>
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
                </CardBody>
              </TeamCard>
            </ColTeamCard>
            <ColTeamCard>
              <TeamCard>
                <CardImg variant="top" src={CardImg2} />
                <CardBody>
                  <TeamCardTitle>Name</TeamCardTitle>
                  <TeamCardTitleSurname>Surname</TeamCardTitleSurname>
                  <TeamCardLink href="#">
                    <img src={LinkedInIco} alt="icon" />
                  </TeamCardLink>
                  <TeamCardLink href="#">
                    <img src={TwitterIco} alt="icon" />
                  </TeamCardLink>
                </CardBody>
              </TeamCard>
            </ColTeamCard>
          </>
        ))}
      </Row>
    </CardWrap>
  );
};

export default TeammateCards;
