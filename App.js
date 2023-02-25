import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import data from './data';

export default function App () {
    return(
        <div className = "container">
            <Nav />
            <Main />
        </div>
    )
}