import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/button.css';

export default function Button() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <h1>Button</h1>
                <Grid container justify='center'>
                    <div className="button-container">
                        <button className="button">Hover me</button>
                        <button className="button-background-1">Hover me</button>
                        <button className="button-background-2"></button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}