import React from 'react';
import {Link} from 'react-router-dom';

function Header() {

    return (
    <header>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>Creature Prompt Generator</h1>
        </Link>
    </header>
    )
}

export default Header;