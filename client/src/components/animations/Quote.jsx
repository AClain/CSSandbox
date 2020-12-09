import React from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/quote.css';

export default function Quote() {
    return (
        <Grid container justify='center'>
            <Grid item xs={10} className='main-container'>
                <h1>Quote</h1>
                <Grid container justify='center'>
                    <div className="quote-container">
                        <p className="quote">I know quite certainly that I myself have no special talent; curiosity, <div className="quoted-text-container">
                            <span className="quoted-word">obsession</span>
                            <div className="quoted-text-def-container">
                                <p className="def-header">[əbˈseʃ(ə)n]</p>
                                <p className="quoted-text"><span className="quoted-text-word">Obsession</span>, a persistent disturbing preoccupation with an often unreasonable idea or feeling.</p>
                            </div>
                        </div> and dogged endurance, combined with self-criticism have brought me to my ideas.</p>
                        <p className="quote-author">Albert Einstein</p>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}