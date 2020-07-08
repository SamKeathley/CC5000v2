import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import D20 from './Logo';


function Welcome() {

    return (
        <div>
            <Container className="welcomePage">
                <Row className="container diceLogo">
                    <Col>
                        <D20 />
                    </Col>
                </Row>
                <Row className="container welcomeBlurb">
                    <h1>Welcome to the Creature Prompt Generator!</h1>
                    <br />
                    <p>In the mood to create something? Is inspiration is a little... lacking?</p>
                </Row>
                <Row className="container generateSection">
                    <Col>
                        <p>Let me help you with that.</p>
                        <Link to="/creature">
                            <Button variant="dark" size="lg">GO</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Welcome;