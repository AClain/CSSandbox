import React, { useState } from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/borders.css';
import Back from '../global/Back';

export default function Borders() {
    const [borderState, setBorderState] = useState({
        all: false,
        none: true,
        top: false,
        right: false,
        bottom: false,
        left: false
    })

    const setAll = () => {
        setBorderState({
            all: true,
            none: false,
            top: false,
            right: false,
            bottom: false,
            left: false,
        })
    }

    const setNone = () => {
        setBorderState({
            all: false,
            none: true,
            top: false,
            right: false,
            bottom: false,
            left: false,
        })
    }

    const setTop = () => {
        if (
            borderState['top'] &&
            !borderState['right'] &&
            !borderState['bottom'] &&
            !borderState['left']
        ) {
            setNone();
            return;
        }
        setBorderState({
            all: false,
            none: false,
            top: !borderState['top'],
            right: borderState['right'],
            bottom: borderState['bottom'],
            left: borderState['left'],
        })
    }

    const setRight = () => {
        if (
            !borderState['top'] &&
            borderState['right'] &&
            !borderState['bottom'] &&
            !borderState['left']
        ) {
            setNone();
            return;
        }
        setBorderState({
            all: false,
            none: false,
            top: borderState['top'],
            right: !borderState['right'],
            bottom: borderState['bottom'],
            left: borderState['left'],
        })
    }

    const setBottom = () => {
        if (
            !borderState['top'] &&
            !borderState['right'] &&
            borderState['bottom'] &&
            !borderState['left']
        ) {
            setNone();
            return;
        }
        setBorderState({
            all: false,
            none: false,
            top: borderState['top'],
            right: borderState['right'],
            bottom: !borderState['bottom'],
            left: borderState['left'],
        })
    }

    const setLeft = () => {
        if (
            !borderState['top'] &&
            !borderState['right'] &&
            !borderState['bottom'] &&
            borderState['left']
        ) {
            setNone();
            return;
        }
        setBorderState({
            all: false,
            none: false,
            top: borderState['top'],
            right: borderState['right'],
            bottom: borderState['bottom'],
            left: !borderState['left'],
        })
    }

    return (
        <Grid container justify='center'>
            <Grid item xs={10} className='main-container'>
                <Back />
                <h1>Borders Editor</h1>
                <Grid container justify='center'>
                    <div id="borders-container">
                        <header id='borders-button-container'>
                            <button onClick={setAll} className={`borders-button ${borderState['all'] ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-border-outer" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <line x1="12" y1="8" x2="12" y2="8.01" />
                                    <line x1="8" y1="12" x2="8" y2="12.01" />
                                    <line x1="12" y1="12" x2="12" y2="12.01" />
                                    <line x1="16" y1="12" x2="16" y2="12.01" />
                                    <line x1="12" y1="16" x2="12" y2="16.01" />
                                </svg>
                            </button>
                            <button onClick={setNone} className={`borders-button ${borderState['none'] ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-border-none" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="4" y1="4" x2="4" y2="4.01" />
                                    <line x1="8" y1="4" x2="8" y2="4.01" />
                                    <line x1="12" y1="4" x2="12" y2="4.01" />
                                    <line x1="16" y1="4" x2="16" y2="4.01" />
                                    <line x1="20" y1="4" x2="20" y2="4.01" />
                                    <line x1="4" y1="8" x2="4" y2="8.01" />
                                    <line x1="12" y1="8" x2="12" y2="8.01" />
                                    <line x1="20" y1="8" x2="20" y2="8.01" />
                                    <line x1="4" y1="12" x2="4" y2="12.01" />
                                    <line x1="8" y1="12" x2="8" y2="12.01" />
                                    <line x1="12" y1="12" x2="12" y2="12.01" />
                                    <line x1="16" y1="12" x2="16" y2="12.01" />
                                    <line x1="20" y1="12" x2="20" y2="12.01" />
                                    <line x1="4" y1="16" x2="4" y2="16.01" />
                                    <line x1="12" y1="16" x2="12" y2="16.01" />
                                    <line x1="20" y1="16" x2="20" y2="16.01" />
                                    <line x1="4" y1="20" x2="4" y2="20.01" />
                                    <line x1="8" y1="20" x2="8" y2="20.01" />
                                    <line x1="12" y1="20" x2="12" y2="20.01" />
                                    <line x1="16" y1="20" x2="16" y2="20.01" />
                                    <line x1="20" y1="20" x2="20" y2="20.01" />
                                </svg>
                            </button>
                            <button onClick={setTop} className={`borders-button ${borderState['top'] ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-border-top" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="4" y1="4" x2="20" y2="4" />
                                    <line x1="4" y1="8" x2="4" y2="8.01" />
                                    <line x1="12" y1="8" x2="12" y2="8.01" />
                                    <line x1="20" y1="8" x2="20" y2="8.01" />
                                    <line x1="4" y1="12" x2="4" y2="12.01" />
                                    <line x1="8" y1="12" x2="8" y2="12.01" />
                                    <line x1="12" y1="12" x2="12" y2="12.01" />
                                    <line x1="16" y1="12" x2="16" y2="12.01" />
                                    <line x1="20" y1="12" x2="20" y2="12.01" />
                                    <line x1="4" y1="16" x2="4" y2="16.01" />
                                    <line x1="12" y1="16" x2="12" y2="16.01" />
                                    <line x1="20" y1="16" x2="20" y2="16.01" />
                                    <line x1="4" y1="20" x2="4" y2="20.01" />
                                    <line x1="8" y1="20" x2="8" y2="20.01" />
                                    <line x1="12" y1="20" x2="12" y2="20.01" />
                                    <line x1="16" y1="20" x2="16" y2="20.01" />
                                    <line x1="20" y1="20" x2="20" y2="20.01" />
                                </svg>
                            </button>
                            <button onClick={setRight} className={`borders-button ${borderState['right'] ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-border-right" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="20" y1="4" x2="20" y2="20" />
                                    <line x1="4" y1="4" x2="4" y2="4.01" />
                                    <line x1="8" y1="4" x2="8" y2="4.01" />
                                    <line x1="12" y1="4" x2="12" y2="4.01" />
                                    <line x1="16" y1="4" x2="16" y2="4.01" />
                                    <line x1="4" y1="8" x2="4" y2="8.01" />
                                    <line x1="12" y1="8" x2="12" y2="8.01" />
                                    <line x1="4" y1="12" x2="4" y2="12.01" />
                                    <line x1="8" y1="12" x2="8" y2="12.01" />
                                    <line x1="12" y1="12" x2="12" y2="12.01" />
                                    <line x1="16" y1="12" x2="16" y2="12.01" />
                                    <line x1="4" y1="16" x2="4" y2="16.01" />
                                    <line x1="12" y1="16" x2="12" y2="16.01" />
                                    <line x1="4" y1="20" x2="4" y2="20.01" />
                                    <line x1="8" y1="20" x2="8" y2="20.01" />
                                    <line x1="12" y1="20" x2="12" y2="20.01" />
                                    <line x1="16" y1="20" x2="16" y2="20.01" />
                                </svg>
                            </button>
                            <button onClick={setBottom} className={`borders-button ${borderState['bottom'] ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-border-bottom" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="20" y1="20" x2="4" y2="20" />
                                    <line x1="4" y1="4" x2="4" y2="4.01" />
                                    <line x1="8" y1="4" x2="8" y2="4.01" />
                                    <line x1="12" y1="4" x2="12" y2="4.01" />
                                    <line x1="16" y1="4" x2="16" y2="4.01" />
                                    <line x1="20" y1="4" x2="20" y2="4.01" />
                                    <line x1="4" y1="8" x2="4" y2="8.01" />
                                    <line x1="12" y1="8" x2="12" y2="8.01" />
                                    <line x1="20" y1="8" x2="20" y2="8.01" />
                                    <line x1="4" y1="12" x2="4" y2="12.01" />
                                    <line x1="8" y1="12" x2="8" y2="12.01" />
                                    <line x1="12" y1="12" x2="12" y2="12.01" />
                                    <line x1="16" y1="12" x2="16" y2="12.01" />
                                    <line x1="20" y1="12" x2="20" y2="12.01" />
                                    <line x1="4" y1="16" x2="4" y2="16.01" />
                                    <line x1="12" y1="16" x2="12" y2="16.01" />
                                    <line x1="20" y1="16" x2="20" y2="16.01" />
                                </svg>
                            </button>
                            <button onClick={setLeft} className={`borders-button ${borderState['left'] ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-border-left" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="4" y1="20" x2="4" y2="4" />
                                    <line x1="8" y1="4" x2="8" y2="4.01" />
                                    <line x1="12" y1="4" x2="12" y2="4.01" />
                                    <line x1="16" y1="4" x2="16" y2="4.01" />
                                    <line x1="20" y1="4" x2="20" y2="4.01" />
                                    <line x1="12" y1="8" x2="12" y2="8.01" />
                                    <line x1="20" y1="8" x2="20" y2="8.01" />
                                    <line x1="8" y1="12" x2="8" y2="12.01" />
                                    <line x1="12" y1="12" x2="12" y2="12.01" />
                                    <line x1="16" y1="12" x2="16" y2="12.01" />
                                    <line x1="20" y1="12" x2="20" y2="12.01" />
                                    <line x1="12" y1="16" x2="12" y2="16.01" />
                                    <line x1="20" y1="16" x2="20" y2="16.01" />
                                    <line x1="8" y1="20" x2="8" y2="20.01" />
                                    <line x1="12" y1="20" x2="12" y2="20.01" />
                                    <line x1="16" y1="20" x2="16" y2="20.01" />
                                    <line x1="20" y1="20" x2="20" y2="20.01" />
                                </svg>
                            </button>
                        </header>
                        <main id='borders-box-container'>
                            <div id='borders-box' className={`
                            ${borderState['all'] ? 'borders' : ''} 
                            ${borderState['top'] ? 'borders-top' : ''} 
                            ${borderState['right'] ? 'borders-right' : ''} 
                            ${borderState['bottom'] ? 'borders-bottom' : ''} 
                            ${borderState['left'] ? 'borders-left' : ''} 
                                `}>

                            </div>
                        </main>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}