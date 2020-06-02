import React from 'react';
import animals from '../dataStructures/animal';
import { plants, environments, elements, personalities } from '../dataStructures/nature';
import { weapons, equipment, tools } from '../dataStructures/equipment';


function Creature() {

    function shuffle(list) {
        return list[Math.floor(Math.random() * list.length)];
    };

    return (
        <table>
            <tr>
            <th>Animal</th>
            <th>Plant Life</th>
            <th>Environmental</th>
            <th>Elemental</th>
            </tr>
            <tr>
            <td>{shuffle(animals)}</td>
            <td>{shuffle(plants)}</td>
            <td>{shuffle(environments)}</td>
            <td>{shuffle(elements)}</td>
            </tr>
            <tr>
                <th>Personality</th>
                <th>Weapon</th>
                <th>Equipment</th>
                <th>Tools</th>
            </tr>
            <tr>
            <td>{shuffle(personalities)}</td>
            <td>{shuffle(weapons)}</td>
            <td>{shuffle(equipment)}</td>
            <td>{shuffle(tools)}</td>
            </tr>
      </table>
    );
}
export default Creature;