import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.scss';
import '../App.scss';
import Header from './Header';
import Footer from './Footer';
import Creature from "./Creature";

function App() {

    return (
        <div>
            <Header />
            <Creature />
            <Footer />
        </div>
    )
}

export default App;
