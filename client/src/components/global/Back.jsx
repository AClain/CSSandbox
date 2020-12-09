import React from 'react';

import {
    Grid
} from '@material-ui/core';

import {
    useHistory
} from 'react-router-dom'

import './css/back.css';

export default function Back() {
    return (
        <Grid container>
            <svg id='back-arrow' onClick={useHistory().goBack} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
            </svg>
        </Grid>
    )
}