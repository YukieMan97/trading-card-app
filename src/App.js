import 'bootstrap/dist/css/bootstrap.min.css';
import AddCardFormsNew from './components/AddCardFormsNew'
import ViewCurrentCard from './components/ViewCurrentCard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import React from "react";

function App() {
    return (
        <div className="Text">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <h2>My Cards</h2>
                        <AddCardFormsNew/>
                    </Route>
                    <Route exact path="/new-cards">
                        <h2>My Cards</h2>
                        <AddCardFormsNew/>
                    </Route>
                    <Route exact path="/view-current-card">
                        <ViewCurrentCard/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
