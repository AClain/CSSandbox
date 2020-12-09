import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/loading_circle.css';

export default function LoadingCircle() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <h1>Loading Circle</h1>
                <div className="loading-container">
                    <div className="first-circle"></div>
                    <div className="second-circle"></div>
                    <div className="third-circle"></div>
                </div>
            </Grid>
        </Grid>
    )
}