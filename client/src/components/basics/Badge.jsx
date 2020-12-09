import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/badge.css';
import Back from '../global/Back';

export default function Badge() {
    return (
        <Grid container justify="center">
            <Grid item xs={10} className="main-container">
                <Back />
                <h1>Badge</h1>
                <h2>Single</h2>
                <Grid container alignItems='center' direction='column'>
                    <div className="badge">
                        <div className="badge-img-container man-2">
                        </div>
                        <span className="badge-pin online"></span>
                    </div>
                    <div className="badge">
                        <div className="badge-img-container woman-1">
                        </div>
                        <span className="badge-pin away"></span>
                    </div>
                    <div className="badge">
                        <div className="badge-img-container man-1">
                        </div>
                        <span className="badge-pin offline"></span>
                    </div>
                </Grid>
                <h2>Group</h2>
                <Grid container justify='center'>
                    <div className="badge-inline">
                        <div className="mini-badge man-1"></div>
                        <div className="mini-badge man-2"></div>
                        <div className="mini-badge woman-1"></div>
                        <div className="mini-badge man-3"></div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}