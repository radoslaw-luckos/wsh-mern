import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Home from "./pages/LandingPage/Home";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/admin'>
                    <AdminPanel />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

