/*
 * Copyright (c) 2020. Saumya Jain
 */

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Container} from "semantic-ui-react";
import LandingPage from "./Components/LandingPage";
import RecipeDetails from "./Components/RecipeDetails";
import Header from "./Components/Header";
import './App.css';
import './Components/RecipeDetails.css';
import {PaymentPage} from "./Components/PaymentPage";

function App() {
    return (
        <Router>
            <Container className={'App'} fluid>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route path="/pay" exact={true}>
                        <PaymentPage />
                    </Route>
                    <Route path="/:id" exact={true}>
                        <RecipeDetails/>
                    </Route>
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
