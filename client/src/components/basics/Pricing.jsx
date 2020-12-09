import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/pricing.css';

export default function Pricing() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <h1>Pricing Cards</h1>
                <h2>Single</h2>
                <Grid container justify='center'>
                    <div className="pricing-card">
                        <h3 className="pricing-name">Basic</h3>
                        <h2 className="pricing-price">Free</h2>
                        <p className="pricing-spec">500 GB Storage</p>
                        <p className="pricing-spec">2 Admin User</p>
                        <p className="pricing-spec">Send up to 3 GB</p>
                        <button className="pricing-button">Learn More</button>
                    </div>
                </Grid>
                <h2>Group</h2>
                <Grid container justify='center'>
                    <div className="pricing-card">
                        <h3 className="pricing-name">Start-up</h3>
                        <h2 className="pricing-price">$19.99</h2>
                        <p className="pricing-spec">1 TB Storage</p>
                        <p className="pricing-spec">5 Admin User</p>
                        <p className="pricing-spec">Send up to 10 GB</p>
                        <button className="pricing-button">Learn More</button>
                    </div>
                    <div className="pricing-card best-value">
                        <h3 className="pricing-name">Professional</h3>
                        <h2 className="pricing-price">$24.99</h2>
                        <p className="pricing-spec">2 TB Storage</p>
                        <p className="pricing-spec">10 Admin User</p>
                        <p className="pricing-spec">Send up to 20 GB</p>
                        <button className="pricing-button">Learn More</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="pricing-name">Master</h3>
                        <h2 className="pricing-price">$49.99</h2>
                        <p className="pricing-spec">5 TB Storage</p>
                        <p className="pricing-spec">25 Admin User</p>
                        <p className="pricing-spec">Send up to 50 GB</p>
                        <button className="pricing-button">Learn More</button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}