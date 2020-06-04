import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animals from '../dataStructures/animal';
import { plants, environments, elements, personalities } from '../dataStructures/nature';
import { weapons, equipment, tools } from '../dataStructures/equipment';


function Creature() {

    function shuffle(list) {
        return list[Math.floor(Math.random() * list.length)];
    };

    return (
        <div className="creatureSection">
            <Container>
                <h3>Maybe you should combine these things:</h3>
                <div className="table">
                    <Row className="categories">
                        <Col>Animal</Col>
                        <Col>Plant Life</Col>
                        <Col>Environmental</Col>
                        <Col>Element/Mineral</Col>
                    </Row>
                    <Row className="results">
                        <Col>{shuffle(animals)}</Col>
                        <Col>{shuffle(plants)}</Col>
                        <Col>{shuffle(environments)}</Col>
                        <Col>{shuffle(elements)}</Col>
                    </Row>
                    <Row className="categories">
                        <Col>Personality</Col>
                        <Col>Weapon</Col>
                        <Col>Equipment/Item</Col>
                        <Col>Tools</Col>
                    </Row>
                    <Row className="results">
                        <Col>{shuffle(personalities)}</Col>
                        <Col>{shuffle(weapons)}</Col>
                        <Col>{shuffle(equipment)}</Col>
                        <Col>{shuffle(tools)}</Col>
                    </Row>
                </div>
                <Row>
                    <ul>
                        <li><strong>Animals:</strong> A wide range of mammals, reptiles, bugs and more!</li>
                        <li><strong>Plant Life:</strong> All manner of plant species.</li>
                        <li><strong>Environmental:</strong> Different environments and textures to add to your creation.</li>
                        <li><strong>Element/Mineral:</strong> Elements and thinds related to, or based off of, them.</li>
                        <li><strong>Personality:</strong> Add some expression to your creation.</li>
                        <li><strong>Weapon:</strong> Mostly fantasy based weaponry.</li>
                        <li><strong>Equipment/Item:</strong> Miscellaneous items and equipment of your creatures interest.</li>
                        <li><strong>Tools:</strong> Maybe your creature is a Tinkerer or a Blacksmith. Why not give them some tools to work with.</li>
                    </ul> 
                    </Row>
                <p>Don't like your results? No problem. Unlike life, we have a redo button.</p>
                <Link to="/creature">
                    <Button variant="dark" size="lg">Redo</Button>
                </Link>
            </Container>
        </div>
    );
}
export default Creature;