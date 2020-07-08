import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import animals from '../dataStructures/animal';
import { plants, environments, personalities } from '../dataStructures/nature';
import { weapons, equipment } from '../dataStructures/equipment';


function Creature() {

    function shuffle(list) {
        return list[Math.floor(Math.random() * list.length)];
    };

    return (
        <div className="creatureSection">
            <Container fluid>
                <h1>You should draw...</h1>
                <p>{shuffle(personalities)} {shuffle(animals)} mixed with {shuffle(plants)} that has {shuffle(equipment)} and a {shuffle(weapons)} in {shuffle(environments)}</p>
                <p><strong>Don't like your results? Try again.</strong></p>
                <Link to="/creature">
                    <Button variant="outline-dark" size="lg">Redo</Button>
                </Link>
            </Container>
        </div>
    );
}
export default Creature;