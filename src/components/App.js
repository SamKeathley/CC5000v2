import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.scss';
import '../App.scss';
import Header from './Header';
import Footer from './Footer';
import Creature from "./Creature";
import Welcome from "./Welcome";
import {Route} from 'react-router-dom';

function App() {
    

    return (
        <div>
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route exact path='/creature' component={Creature} />
            <Footer />
        </div>
    )
}

export default App;
