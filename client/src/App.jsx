import React from "react";
import Admin from "./modules/admin/Admin";
import Home from "./modules/static/Home";
import Login from "./modules/identity/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.scss';

const loggedIn = false;

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path='/admin'>
            {!loggedIn ? <Redirect to="/login" /> : <Admin />}
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path=''>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
