import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/menu.css';

export default function Menu() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <h1>Menu</h1>
                <Grid container justify='center'>
                    <Grid container justify='center'
                        alignItems='center' className="menu-container">
                        <div className="menu">
                            <button className="menu-item">
                                Home
                            </button>
                            <button className="menu-item">
                                Work
                            </button>
                            <button className="menu-item">
                                Life
                            </button>
                            <button className="menu-item">
                                Spirit
                            </button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}