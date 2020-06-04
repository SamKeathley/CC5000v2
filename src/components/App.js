import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.scss';
import '../App.scss';
import Header from './Header';
import Footer from './Footer';
import Creature from "./Creature";
import Welcome from "./Welcome";

function App() {

    return (
        <div>
            <Header />
            <Welcome />
            <Creature />
            <Footer />
        </div>
    )
}

export default App;
