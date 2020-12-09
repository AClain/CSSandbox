import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/photo_display.css';
import Back from '../global/Back';

export default function PhotoDisplay() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <Back />
                <h1>Photo Display</h1>
                <Grid container justify='center'>
                    <Grid item xs={12} className="photo-top-container">
                        <div className="photo-container photo_1">
                            <div className="photo-plus">
                                +
                            </div>
                        </div>
                        <div className="photo-container photo_2">

                            <div className="photo-plus">
                                +
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} className="photo-top-container">
                        <div className="photo-container photo_3">
                            <div className="photo-plus">
                                +
                            </div>
                        </div>
                        <div className="photo-container photo_4">
                            <div className="photo-plus">
                                +
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}