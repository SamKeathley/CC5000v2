import React from 'react';
import animals from '../dataStructures/animal';
import { plants, environments, elements, personalities } from '../dataStructures/nature';
import { weapons, equipment, tools } from '../dataStructures/equipment';


function Creature() {

    function shuffle(list) {
        return list[Math.floor(Math.random() * list.length)];
    };

    return (
        <div className="table">
            <div className="tableBody">
                <div className="tableRow">
                    <h3 className="tableHead">Animal</h3>
                    <h3 className="tableHead">Plant Life</h3>
                    <h3 className="tableHead">Environmental</h3>
                    <h3 className="tableHead">Elemental</h3>
                <div className="tableRow">
                    <p className="tableCell">{shuffle(animals)}</p>
                    <p className="tableCell">{shuffle(plants)}</p>
                    <p className="tableCell">{shuffle(environments)}</p>
                    <p className="tableCell">{shuffle(elements)}</p>
                </div>
                </div>

                <div>
                    <div className="tableRow">
                        <h3 className="tableHead">Personality</h3>
                        <h3 className="tableHead">Weapon</h3>
                        <h3 className="tableHead">Equipment</h3>
                        <h3 className="tableHead">Tools</h3>
                            <p className="tableCell">{shuffle(personalities)}</p>
                            <p className="tableCell">{shuffle(weapons)}</p>
                            <p className="tableCell">{shuffle(equipment)}</p>
                            <p className="tableCell">{shuffle(tools)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Creature;