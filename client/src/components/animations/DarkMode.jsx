import React, { useState } from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/dark_mode.css';

export default function DarkMode() {
    const [toggle, setToggle] = useState(false);

    const switchToggle = () => {
        setToggle(!toggle);
    }

    return (
        <Grid container justify='center'>
            <Grid item xs={10} className='main-container'>
                <h1>Dark Mode</h1>
                <Grid container direction='column' alignItems='center'>
                    <div id='toggle' onClick={() => { switchToggle() }} className={toggle ? 'active' : ''}>
                        <div id='slider' className={toggle ? 'active' : ''}></div>
                    </div>
                    <form id='form' className={`container ${toggle ? 'dark' : 'light'}`}>
                        <div className='form-box'>
                            <label for='username' className='form-label'>Username</label>
                            <input type='text' id='username' name='username' className='form-input' />
                        </div>
                        <div className='form-box'>
                            <label for='email' className='form-label'>Email</label>
                            <input type='text' id='email' name='email' className='form-input' />
                        </div>
                        <div className='form-box'>
                            <label for='password' className='form-label'>Password</label>
                            <input type='password' id='password' name='password' className='form-input' />
                        </div>
                        <div className='form-box'>
                            <label for='confirm' className='form-label'>Cofirm password</label>
                            <input type='password' id='confirm' name='confirm' className='form-input' />
                        </div>
                        <button id='form-submit'>Submit</button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}