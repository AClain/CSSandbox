import React, { useState } from 'react';

import {
    Grid
} from '@material-ui/core';

import './css/tabs.css';

export default function Tabs() {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Grid container justify='center'>
            <Grid item xs={10} className='main-container'>
                <h1>Tabs</h1>
                <Grid container justify='center'>
                    <div id='tabs-container'>
                        <header id='tabs-header'>
                            <button className={`tabs-button ${currentTab === 0 ? 'active' : ''}`} onClick={() => { setCurrentTab(0) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dashboard" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1f1f1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="13" r="2" />
                                    <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                                    <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
                                </svg>
                            </button>
                            <button className={`tabs-button ${currentTab === 1 ? 'active' : ''}`} onClick={() => { setCurrentTab(1) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1f1f1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </button>
                            <button className={`tabs-button ${currentTab === 2 ? 'active' : ''}`} onClick={() => { setCurrentTab(2) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1f1f1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                    <line x1="16" y1="5" x2="19" y2="8" />
                                </svg>
                            </button>
                            <button className={`tabs-button ${currentTab === 3 ? 'active' : ''}`} onClick={() => { setCurrentTab(3) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-history" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1f1f1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="12 8 12 12 14 14" />
                                    <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                                </svg>
                            </button>
                        </header>
                        <main id='tabs-content'>
                            {
                                currentTab === 0 ? (
                                    <div className='tabs active'>
                                        <h3 className='tab-title'>Dashboard</h3>
                                        <p>Ea commodo cillum nisi veniam et dolore aute do incididunt ullamco ea aute dolore commodo. Id dolor eu sunt qui dolor laborum ea amet nisi voluptate proident ea consectetur. Irure culpa enim incididunt ipsum minim voluptate nostrud non exercitation magna. Ea incididunt eu laborum pariatur commodo voluptate mollit adipisicing. Aliqua quis non amet mollit irure in ea voluptate exercitation aliqua quis adipisicing excepteur. Reprehenderit aliquip ad quis Lorem eu eiusmod sunt anim eiusmod. Ut velit labore laborum ut sit.</p>
                                    </div>
                                ) : (null)
                            }
                            {
                                currentTab === 1 ? (
                                    <div className='tabs active'>
                                        <h3 className='tab-title'>Settings</h3>
                                        <p>Adipisicing proident anim anim pariatur sit labore esse magna et. Adipisicing ut veniam exercitation voluptate ullamco sint irure sunt aliqua exercitation magna aute elit. Velit officia qui in velit. Aliquip exercitation quis laboris nostrud.</p>
                                    </div>
                                ) : (null)
                            }
                            {
                                currentTab === 2 ? (
                                    <div className='tabs active'>
                                        <h3 className='tab-title'>Profile</h3>
                                        <p>Commodo nisi excepteur ipsum do et cillum laboris laboris. Reprehenderit nostrud aute esse eu consequat. In ut anim deserunt magna veniam proident non voluptate eiusmod occaecat. Sunt pariatur elit nisi proident occaecat ullamco cillum quis ad. Ad dolore duis ullamco mollit sit pariatur laborum cupidatat sit irure. Quis minim ea aliqua laborum proident dolor ut do sunt qui ad non dolore. Sunt laborum qui esse aute nisi cillum eu.</p>
                                    </div>
                                ) : (null)
                            }
                            {
                                currentTab === 3 ? (
                                    <div className='tabs active'>
                                        <h3 className='tab-title'>History</h3>
                                        <p>Exercitation Lorem sit quis in Lorem fugiat ad esse proident sunt adipisicing eu. Proident voluptate culpa voluptate pariatur ut cupidatat deserunt officia aute proident consequat laboris. Incididunt laborum id veniam ex deserunt qui consectetur. Deserunt irure officia ad incididunt ea id commodo proident reprehenderit nisi magna veniam cillum. Exercitation nostrud ad reprehenderit magna elit consequat do minim aliqua nisi laborum commodo laborum.</p>
                                    </div>
                                ) : (null)
                            }
                        </main>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}