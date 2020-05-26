import React from 'react';

function Creature(props) {
    return (
        <div className="creature">
            <span className="category">
                {props.category}
            </span>
            <span className="result">
                {props.name}
            </span>
        </div>
    );
}
export default Creature;