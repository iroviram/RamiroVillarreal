import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../views/Home/Home';

function Routes() {
    return (
        <div>
            <Navbar/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
