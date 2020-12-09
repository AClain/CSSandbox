import React from 'react';

import {
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';

import Home from '../components/global/Home';

import Hover from '../components/animations/Hover';
import LoadingCircle from '../components/animations/LoadingCircle';
import Quote from '../components/animations/Quote';
import PhotoDisplay from '../components/animations/PhotoDisplay';
import Flip from '../components/animations/Flip';
import Appear from '../components/animations/Appear';
import Menu from '../components/animations/Menu';
import Button from '../components/animations/Button';
import DarkMode from '../components/animations/DarkMode';
import Alerts from '../components/animations/Alerts';

import Badge from '../components/basics/Badge';
import Profile from '../components/basics/Profile';
import Pricing from '../components/basics/Pricing';
import FeatureCard from '../components/basics/FeatureCard';
import Tabs from '../components/basics/Tabs';

function Routes(props) {
    return (
        <>
            {/* <Header /> */}
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/animations/hover' component={Hover} />
                <Route exact path='/animations/loading-circle' component={LoadingCircle} />
                <Route exact path='/animations/quote' component={Quote} />
                <Route exact path='/animations/photo-display' component={PhotoDisplay} />
                <Route exact path='/animations/flip-card' component={Flip} />
                <Route exact path='/animations/appear' component={Appear} />
                <Route exact path='/animations/menu' component={Menu} />
                <Route exact path='/animations/button' component={Button} />
                <Route exact path='/animations/dark-mode' component={DarkMode} />
                <Route exact path='/animations/alerts' component={Alerts} />

                <Route exact path='/basics/badge' component={Badge} />
                <Route exact path='/basics/profile' component={Profile} />
                <Route exact path='/basics/pricing' component={Pricing} />
                <Route exact path='/basics/feature-card' component={FeatureCard} />
                <Route exact path='/basics/tabs' component={Tabs} />
                <Route path='*'>
                    <Redirect to='/home' />
                </Route>
            </Switch>
        </>
    )
}

export default withRouter(Routes);