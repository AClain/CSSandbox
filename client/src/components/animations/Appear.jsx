import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/appear.css';
import Back from '../global/Back';

export default function Appear() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <Back />
                <h1>Appear</h1>
                <Grid container justify='center' alignItems='center' id="appear-box">
                    <div className="appear-container">
                        <span className="appear-text">Design</span>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}