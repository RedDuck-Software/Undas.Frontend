import React from "react";
import { Row } from "react-bootstrap";

import {
  LinkedInIco,
  /*TwitterIco,*/
  GermanFounder,
  ErvinMigirov,
  ArtemFranz,
  MarkFounder,
  StasnislavStefanyshynCVO,
  AlexandrGurinDeveloper,
  AlisaFedkoDeveloper,
  KostiantynMininkov,
  AndriiShvaika,
  MaximKulikovDesigner,
  AnnaTsysMetaverses,
  IlyaArkhipovArtDirector,
  DanilDeveloper,
  YefimMigirov,
} from "./imports";
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
        <>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={GermanFounder} />
              <CardBody>
                <TeamCardTitle>German</TeamCardTitle>
                <TeamCardTitleSurname>Founder</TeamCardTitleSurname>
                {/* If you will want some Description
                    <Card.Text>

                    </Card.Text> */}
                <TeamCardLink href="https://www.linkedin.com/in/german-solovyov/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={ErvinMigirov} />
              <CardBody>
                <TeamCardTitle>Ervin</TeamCardTitle>
                <TeamCardTitleSurname>Founder</TeamCardTitleSurname>
                <TeamCardLink href="https://www.linkedin.com/in/ervin-migirov-37024a6a/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={ArtemFranz} />
              <CardBody>
                <TeamCardTitle>Artem</TeamCardTitle>
                <TeamCardTitleSurname>Founder, CEO</TeamCardTitleSurname>
                {/* If you will want some Description
                    <Card.Text>

                    </Card.Text> */}
                <TeamCardLink href="https://www.linkedin.com/in/artemalekhin/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={MarkFounder} />
              <CardBody>
                <TeamCardTitle>Mark</TeamCardTitle>
                <TeamCardTitleSurname>Founder, CTO</TeamCardTitleSurname>
                <TeamCardLink href="https://www.linkedin.com/in/mark-virchenko/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={StasnislavStefanyshynCVO} />
              <CardBody>
                <TeamCardTitle>Stanislav</TeamCardTitle>
                <TeamCardTitleSurname>CVO</TeamCardTitleSurname>
                {/* If you will want some Description
                    <Card.Text>

                    </Card.Text> */}
                <TeamCardLink href="https://www.linkedin.com/in/stasnislav-stefanyshyn/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={AlexandrGurinDeveloper} />
              <CardBody>
                <TeamCardTitle>Alexandr</TeamCardTitle>
                <TeamCardTitleSurname>Developer</TeamCardTitleSurname>
                <TeamCardLink href="https://www.linkedin.com/mwlite/in/gurinalex">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={AlisaFedkoDeveloper} />
              <CardBody>
                <TeamCardTitle>Alisa</TeamCardTitle>
                <TeamCardTitleSurname>Developer</TeamCardTitleSurname>
                {/* If you will want some Description
                    <Card.Text>

                    </Card.Text> */}
                <TeamCardLink href="https://www.linkedin.com/in/a-fedko/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={KostiantynMininkov} />
              <CardBody>
                <TeamCardTitle>Kostiantyn</TeamCardTitle>
                <TeamCardTitleSurname>Developer</TeamCardTitleSurname>
                <TeamCardLink href="https://www.linkedin.com/in/kostiantyn-mininkov-9869a4217/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
                {/* <TeamCardLink href="#">
                  <img src={TwitterIco} alt="icon" />
                </TeamCardLink>*/}
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={AndriiShvaika} />
              <CardBody>
                <TeamCardTitle>Andrii</TeamCardTitle>
                <TeamCardTitleSurname>Developer</TeamCardTitleSurname>
                {/* If you will want some Description
                    <Card.Text>

                    </Card.Text> */}
                <TeamCardLink href="https://www.linkedin.com/in/andrii-shvaika-253588212/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={MaximKulikovDesigner} />
              <CardBody>
                <TeamCardTitle>Maxim</TeamCardTitle>
                <TeamCardTitleSurname>Designer</TeamCardTitleSurname>
                <TeamCardLink href="https://www.linkedin.com/in/maxim-kulikov-ab12b923a">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={AnnaTsysMetaverses} />
              <CardBody>
                <TeamCardTitle>Anna</TeamCardTitle>
                <TeamCardTitleSurname>Metaverses</TeamCardTitleSurname>
                {/* If you will want some Description
                    <Card.Text>

                    </Card.Text> */}
                <TeamCardLink href="#">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={IlyaArkhipovArtDirector} />
              <CardBody>
                <TeamCardTitle>Ilya</TeamCardTitle>
                <TeamCardTitleSurname>Art Director</TeamCardTitleSurname>
                <TeamCardLink href="#">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={DanilDeveloper} />
              <CardBody>
                <TeamCardTitle>Danil</TeamCardTitle>
                <TeamCardTitleSurname>Developer</TeamCardTitleSurname>
                <TeamCardLink href="https://www.linkedin.com/in/danil-dovgal-2a96a5243/">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
          <ColTeamCard>
            <TeamCard>
              <CardImg variant="top" src={YefimMigirov} />
              <CardBody>
                <TeamCardTitle>Yefim</TeamCardTitle>
                <TeamCardTitleSurname>Community Manager</TeamCardTitleSurname>
                <TeamCardLink href="#">
                  <img src={LinkedInIco} alt="icon" />
                </TeamCardLink>
              </CardBody>
            </TeamCard>
          </ColTeamCard>
        </>
      </Row>
    </CardWrap>
  );
};

export default TeammateCards;
