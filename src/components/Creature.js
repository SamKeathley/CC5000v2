import React from 'react';

function Creature(props) {
    function handleClick(event) {
        console.log("Clicked");

        event.preventDefault();
    }

    return (
        <div className="creature">
            <h3>{props.category}</h3>
            <p>{props.name}</p>
            <button onClick={handleClick}>Get Creature</button>
        </div>
    );
}
export default Creature;