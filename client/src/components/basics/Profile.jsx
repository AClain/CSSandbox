import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/profile.css';

export default function Profile() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <h1>Profile Card</h1>
                <Grid container alignItems='center' direction='column'>
                    <div className="profile-card-container">
                        <div className="profile-card-bg bg-3"></div>
                        <div className="profile-card-info">
                            <div className="profile-picture woman-1"></div>
                            <p className="profile-name">Name Placeholder</p>
                            <p className="profile-city grayed">City</p>
                            <hr className="profile-separator" />
                            <Grid container justify='space-evenly'>
                                <div className="profile-info">
                                    <p className="number">25k</p>
                                    <p className="info-name grayed">followers</p>
                                </div>
                                <div className="separator-vertical"></div>
                                <div className="profile-info">
                                    <p className="number">1k</p>
                                    <p className="info-name grayed">Likes</p>
                                </div>
                                <div className="separator-vertical"></div>
                                <div className="profile-info">
                                    <p className="number">500+</p>
                                    <p className="info-name grayed">Photos</p>
                                </div>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}