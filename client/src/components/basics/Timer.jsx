import React, { useState, useEffect } from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/timer.css';
import Back from '../global/Back';

export default function Timer() {
    const [time, setTime] = useState(0);
    const [pause, setPause] = useState(true);

    // const reset = () => {
    //     setTime(0);
    //     setPause(true);
    // }

    useEffect(() => {
        let interval = null;
        if (!pause) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 100);
        } else if (pause) {
            clearInterval(interval);
        }
        return () => { clearInterval(interval) };
    }, [pause]);

    const timeToString = (timeInt) => {
        timeInt = Math.round(timeInt / 10);
        let timeString = "";
        timeString += timeInt;
        while (timeString.length < 4) {
            timeString = "0" + timeString;
        }
        return timeString;
    }

    return (
        <Grid container justify='center'>
            <Grid item xs={10} className='main-container'>
                <Back />
                <h1>Timer</h1>
                <Grid container justify='center' alignItems='center' direction='column'>
                    <div id='timer-box'>
                        <span className="time-box">
                            {timeToString(time)}
                        </span>
                        <button className='timer-button' onClick={() => { setPause(!pause) }}>
                            {pause ? (
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1f1f1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 4v16l13 -8z" />
                                </svg>
                            ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1f1f1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="6" y="5" width="4" height="14" rx="1" />
                                        <rect x="14" y="5" width="4" height="14" rx="1" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </Grid>
            </Grid>

        </Grid>
    );
}