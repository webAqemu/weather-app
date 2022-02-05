import React, { Component } from 'react';
import Location from '../location';
import Search from '../search';
import styles from './styles.module.css';

const App = () => {
    return (
        <div>
            <h1 className={styles.title}>Weather App</h1>
            <div className={styles.app}>
                <Search />
                <Location />
            </div>
        </div>
    );
};

export default App;
