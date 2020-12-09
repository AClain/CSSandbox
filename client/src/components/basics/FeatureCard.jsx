import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/feature_card.css';

export default function FeatureCard() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <h1>Feature Cards</h1>
                <Grid container justify='space-around'>
                    <Grid item xs={6}>
                        <div className="feature-card">
                            <div className="feature-color feature-red"></div>
                            <div className="feature-info">
                                <h3 className="feature-title">Team Builder</h3>
                                <p className="feature-description">Scans our talent network to create the optimal team for your project</p>
                            </div>
                            <img className="feature-icon" src='/assets/imgs/feature_card/icon_1.png' alt='icon-1' />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="feature-card">
                            <div className="feature-color feature-blue"></div>
                            <div className="feature-info">
                                <h3 className="feature-title">Calculator</h3>
                                <p className="feature-description">Uses data from past projects to preview better delivery estimates</p>
                            </div>
                            <img className="feature-icon" src='/assets/imgs/feature_card/icon_2.png' alt='icon-2' />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="feature-card">
                            <div className="feature-color feature-yellow"></div>
                            <div className="feature-info">
                                <h3 className="feature-title">Karma</h3>
                                <p className="feature-description">Regularly evaluates our talent to ensure quality</p>
                            </div>
                            <img className="feature-icon" src='/assets/imgs/feature_card/icon_3.png' alt='icon-3' />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="feature-card">
                            <div className="feature-color feature-lightblue"></div>
                            <div className="feature-info">
                                <h3 className="feature-title">Supervisor</h3>
                                <p className="feature-description">Monitors activity to identify project roadblocks</p>
                            </div>
                            <img className="feature-icon" src='/assets/imgs/feature_card/icon_4.png' alt='icon-4' />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}