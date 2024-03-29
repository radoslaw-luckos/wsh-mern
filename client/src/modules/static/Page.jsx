import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import './Page.scss'

const Page = () => {

    return (
        <div className='wrapper'>
            <div className="overlay"></div>
            <Nav />
            <main className="content">
                <Switch>
                    <Route path={`/kontakt`}>
                        <Contact />
                    </Route>
                    <Route path={`/dla-rodzicow`}>
                        <Info />
                    </Route>
                    <Route path={`/o-nas`}>
                        <About />
                    </Route>
                    <Route path={`/galeria`}>
                        <Gallery />
                    </Route>
                    <Route path={`/`}>
                        <Home />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default Page;
