import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';

const Page = () => {

    const { path } = useRouteMatch();

    return (
        <div>
            <Nav />
            <main className="content">
                <Switch>
                    <Route path={`${path}/kontakt`}>
                        <Contact />
                    </Route>
                    <Route path={`${path}/dla-rodzicow`}>
                        <Info />
                    </Route>
                    <Route path={`${path}/o-nas`}>
                        <About />
                    </Route>
                    <Route path={`${path}/galeria`}>
                        <Gallery />
                    </Route>
                    <Route path={`${path}`}>
                        <Home />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default Page;
