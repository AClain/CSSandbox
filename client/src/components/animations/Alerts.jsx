import React, { useState, useEffect } from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/alerts.css';
import Back from '../global/Back';

export default function Alerts() {
    const [alert, setAlert] = useState(true);

    const dismiss = () => {
        document.getElementById('alert-container').classList.add('dismiss');
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }

    return (
        <Grid container justify='center'>
            <Grid item xs={10} className='main-container'>
                <Back />
                <h1>Alerts</h1>
                <Grid container justify='center'>
                    <div id="example-div">
                        {
                            alert ? (
                                <div id='alert-container'>
                                    <div className='alert-main-content'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-octagon" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f65656" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z" />
                                            <line x1="12" y1="8" x2="12" y2="12" />
                                            <line x1="12" y1="16" x2="12.01" y2="16" />
                                        </svg>
                                        <h3 className='alert-title'>Oh snap!</h3>
                                        <p className='alert-text'>An error has occured while creating an error report.</p>
                                    </div>
                                    <button onClick={() => { dismiss() }} className='alert-button'>Dismiss</button>
                                </div>
                            ) : (null)
                        }
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}