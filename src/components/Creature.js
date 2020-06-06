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
            <Container fluid>
                <Row className="firstRow">
                    <Col xs={12} md={6} xl={3}>
                    <h3 className="categories">Animal</h3>
                    <p className="results">{shuffle(animals)}</p>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                    <h3 className="categories">Plant Life</h3>
                    <p className="results">{shuffle(plants)}</p>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                    <h3 className="categories">Environmental</h3>
                    <p className="results">{shuffle(environments)}</p>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                    <h3 className="categories">Element/Mineral</h3>
                    <p className="results">{shuffle(elements)}</p>
                    </Col>
                </Row>
                <Row className="secondRow">
                    <Col xs={12} md={6} xl={3}>
                    <h3 className="categories">Personality</h3>
                    <p className="results">{shuffle(personalities)}</p>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                    <h3 className="categories">Weapon</h3>
                    <p className="results">{shuffle(weapons)}</p>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                    <h3 className="categories">Equipment/Item</h3>
                    <p className="results">{shuffle(equipment)}</p>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                    <h3 className="categories">Tools</h3>
                    <p className="results">{shuffle(tools)}</p>
                    </Col>
                </Row>
                <Row>
                <Col>
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
                </Col> 
                </Row>
                <p><strong>Don't like your results? No problem. Unlike life, we have a redo button.</strong></p>
                <Link to="/creature">
                    <Button variant="outline-dark" size="lg">Redo</Button>
                </Link>
            </Container>
        </div>
    );
}
export default Creature;