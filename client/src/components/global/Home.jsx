import React from 'react';

import {
    Grid
} from '@material-ui/core';

import {
    Link
} from 'react-router-dom';

import './css/home.css';

export default function Home() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <h1 id="home-title">Sandbox</h1>
                <div>
                    <h3 className="home-list-title">Animations</h3>
                    <Link className="home-link" to='/animations/hover'>Hover</Link>
                    <Link className="home-link" to='/animations/loading-circle'>Loading Circle</Link>
                    <Link className="home-link" to='/animations/quote'>Quote</Link>
                    <Link className="home-link" to='/animations/photo-display'>Photo Display</Link>
                    <Link className="home-link" to='/animations/flip-card'>Flip Card</Link>
                    <Link className="home-link" to='/animations/appear'>Appear</Link>
                    <Link className="home-link" to='/animations/menu'>Menu</Link>
                    <Link className="home-link" to='/animations/button'>Button</Link>
                    <Link className="home-link" to='/animations/dark-mode'>Dark Mode</Link>
                    <Link className="home-link" to='/animations/alerts'>Alerts</Link>
                    <Link className="home-link" to='/animations/tab-button'>Tab Button</Link>
                </div>
                <div>
                    <h3 className="home-list-title">Basics</h3>
                    <Link className="home-link" to='/basics/badge'>Badge</Link>
                    <Link className="home-link" to='/basics/profile'>Profile</Link>
                    <Link className="home-link" to='/basics/pricing'>Pricing Card</Link>
                    <Link className="home-link" to='/basics/feature-card'>Feature Card</Link>
                    <Link className="home-link" to='/basics/tabs'>Tabs</Link>
                    <Link className="home-link" to='/basics/borders'>Borders</Link>
                    <Link className="home-link" to='/basics/timer'>Timer</Link>
                </div>
            </Grid>
        </Grid>
    )
}