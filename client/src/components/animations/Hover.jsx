import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/hover.css';
import Back from '../global/Back';

export default function Hover() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className="main-container">
                <Back />
                <h1> Hover effects</h1>
                <Grid container justify='space-evenly'>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-underline hover-underline-left'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-underline hover-underline-middle'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-underline hover-underline-right'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-background hover-background-bottom'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-background hover-background-top'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-background hover-background-middle'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-background hover-background-left'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-background hover-background-right'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-scale'>Hover me</button>
                    </Grid>
                    <Grid item xs={3} className='hover-container'>
                        <button className='hover-button hover-button-gradient'>Hover me</button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}