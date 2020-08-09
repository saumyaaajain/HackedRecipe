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

function App() {
    return (
        <Router>
            <Container className={'App'} fluid>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route path="/:id">
                        <RecipeDetails/>
                    </Route>
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
