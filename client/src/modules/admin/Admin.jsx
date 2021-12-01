import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Ads from './pages/Ads/Ads';
import Stories from './pages/Stories/Stories';
import Users from './pages/Users/Users';
import Profile from './pages/Profile/Profile';
import {
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
            </main>
        </div>
    )
}

export default Admin

