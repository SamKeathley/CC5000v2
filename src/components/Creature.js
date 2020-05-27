import React from 'react';

function Creature(props) {
    return (
        <div className="creature">
            <h3 className="category">
                {props.category}
            </h3>
            <p className="result">
                {props.name}
            </p>
        </div>
    );
}
export default Creature;