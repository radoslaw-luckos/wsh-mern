import React, { useState, useMemo } from "react";
import Admin from "./modules/admin/Admin";
import Login from "./modules/identity/Login";
import Page from "./modules/static/Page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.scss';
import { UserContext } from './context/userContext'


const App = () => {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <div className="container">
        <Router>
          <Switch>
            <Route path='/admin'>
              {!user ? <Redirect to="/login" /> : <Admin />}
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
              <Page />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
