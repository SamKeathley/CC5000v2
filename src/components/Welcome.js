import React from 'react';
import {Link} from 'react-router-dom';
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
                    <br/>
                    <p>The purpose of this generator is to give you a little push when you're in the mood to create, but are finding that inspiration is a little... lacking.</p>
                    <p>
                    (<i>Don't worry-- happens to me all the time. Why do you think I made this thing?</i>)</p>
                    <p>All you need to do is hit the <strong>"GENERATE"</strong> button. Once you do, you'll get 8 items from 8 different categories:</p>
                    <p>You can combine some, or all, of these items to create a monster, creature, a character... Really, whatever you want, in your prefered medium. I, personally, like to draw my little creatures. Just have fun with it.
                    </p>
                </Row>
                <Row className="container generateSection">
                    <Col>
                        <p>Are you ready to get started? Then let's go already!</p>
                        <Link to="/creature">                        
                            <Button variant="dark" size="lg">Generate</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Welcome;