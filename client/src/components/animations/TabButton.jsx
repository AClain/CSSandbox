import React, { useState } from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/tab_button.css';
import Back from '../global/Back';

export default function TabButton() {
    const [tab, setTab] = useState(1);

    const changeTab = (tab) => {
        setTab(tab);
    }

    return (
        <Grid container justify='center'>
            <Grid item xs={10} className='main-container'>
                <Back />
                <h1>Tab Button</h1>
                <Grid container justify='center'>
                    <div id='tab-button-container'>
                        <button onClick={() => { changeTab(1) }} className={`tab-buttons ${tab === 1 ? 'active' : ''}`}>
                            1
                        </button>
                        <button onClick={() => { changeTab(2) }} className={`tab-buttons ${tab === 2 ? 'active' : ''}`}>
                            2
                        </button>
                        <button onClick={() => { changeTab(3) }} className={`tab-buttons ${tab === 3 ? 'active' : ''}`}>
                            3
                        </button>
                        <button onClick={() => { changeTab(4) }} className={`tab-buttons ${tab === 4 ? 'active' : ''}`}>
                            4
                        </button>
                    </div>
                </Grid>
            </Grid>
        </Grid >
    )
}