import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/alerts.css';

export default function Alerts() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className='main-container'>
                <h1>Alerts</h1>
                <Grid container justify='center'>
                    <div id='alert-container'>
                        <h3>Oh snap!</h3>
                        <p>An error has occured while creating an error report.</p>
                        <button>Dismiss</button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}