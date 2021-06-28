import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import { Switch, Route } from 'react-router-dom';
import Homepage from './../pages/Home';
import Aboutpage from './../pages/About';
import { path } from './../constants';

const SiteLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Switch>
                    <Route path={path.ABOUT}>
                        <Aboutpage />
                    </Route>
                    <Route exact path={path.HOME}>
                        <Homepage />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default SiteLayout;