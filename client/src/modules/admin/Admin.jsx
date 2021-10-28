import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Ads from './pages/Ads';
import Stories from './pages/Stories';
import Users from './pages/Users';
import Profile from './pages/Profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom';
import './Admin.scss'

const Admin = () => {
    const { path } = useRouteMatch();
    return (
        <div className="admin-panel">
            <header className='admin-panel__header'>
                <Header />
            </header>
            <nav className='admin-panel__menu'>
                <Nav />
            </nav>
            <main className='admin-panel__content' >
                <Router>
                    <Switch>
                        <Route path={`${path}/uzytkownicy`}>
                            <Users />
                        </Route>
                        <Route path={`${path}/relacje`}>
                            <Stories />
                        </Route>
                        <Route path={`${path}/ogloszenia`}>
                            <Ads />
                        </Route>
                        <Route path={`${path}`}>
                            <Profile />
                        </Route>
                    </Switch>
                </Router>
            </main>
        </div>
    )
}

export default Admin

