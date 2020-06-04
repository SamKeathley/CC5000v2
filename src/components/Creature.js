import React from 'react';
import animals from '../dataStructures/animal';
import { plants, environments, elements, personalities } from '../dataStructures/nature';
import { weapons, equipment, tools } from '../dataStructures/equipment';


function Creature() {

    function shuffle(list) {
        return list[Math.floor(Math.random() * list.length)];
    };

    return (
        <div className="container">
            <h1>Combine the following to make your creature:</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Animal Type</th>
                        <th>Plant Life</th>
                        <th>Environment</th>
                        <th>Elemental Variable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{shuffle(animals)}</td>
                        <td>{shuffle(plants)}</td>
                        <td>{shuffle(environments)}</td>
                        <td>{shuffle(elements)}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>Personality</th>
                        <th>Weapon</th>
                        <th>Equipment</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{shuffle(personalities)}</td>
                        <td>{shuffle(weapons)}</td>
                        <td>{shuffle(equipment)}</td>
                        <td>{shuffle(tools)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Creature;