import React from "react";
import AdminPanel from "./pages/admin/Admin";
import Home from "./pages/static/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path='/admin'>
            <AdminPanel />
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
