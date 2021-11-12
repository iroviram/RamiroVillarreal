import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ItemProvider } from '../context/ItemContext';
import Home from '../views/Home/Home';
import Product from '../views/Product/Product';
import Login from '../views/Login'
import Signup from '../views/Signup'
import Profile from '../views/Profile/Profile';

const Logout = () => {
    window.localStorage.removeItem('token')
    return <Redirect to="/" />
}

const Routes = () => {
    return (
        <div>
            <Router>
                <ItemProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path='/product/:id' component={Product} />
                        <Route exact path="/signup" component={Signup}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/logout" component={Logout}></Route>
                        <Route exact path="/profile" component={Profile}></Route>
                    </Switch>
                </ItemProvider>
            </Router>
        </div>
    )
}

export default Routes