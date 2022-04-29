import React from "react";

import { CardImg1, CardImg2, LinkedInIco, TwitterIco } from "./imports"

import {
    CardWrap,
    TeamCard
} from "./TeammateCard.styles";

import { Card, Row, Col, CardGroup, Button} from 'react-bootstrap';

const TeammateCards = () => {
    return (
        <CardWrap>
            <Row xs={2} md={5} className="g-5">
            {Array.from({ length: 5 }).map((_, idx) => (
                <>
                <Col>
                <TeamCard>
                    <Card.Img variant="top" src={CardImg1} />
                    <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Title>Surname</Card.Title>
    {/* If you will want some Description
                    <Card.Text>

                    </Card.Text> */}
                    <Button variant="link"><img src={LinkedInIco} alt="icon" /></Button>
                    <Button variant="link"><img src={TwitterIco} alt="icon" /></Button>
                    </Card.Body>
                </TeamCard>
                </Col>
                 <Col>
                <TeamCard>
                    <Card.Img variant="top" src={CardImg2} />
                    <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Title>Surname</Card.Title>
                    <Button variant="link"><img src={LinkedInIco} alt="icon" /></Button>
                    <Button variant="link"><img src={TwitterIco} alt="icon" /></Button>
                    </Card.Body>
                </TeamCard>
                </Col>
                
                </>
            ))}
            </Row>
        </CardWrap>
    )
}

export default TeammateCards