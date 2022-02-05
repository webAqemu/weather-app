import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';

function Location({ city }) {
    const data = {};

    if (city.length > 1 && !(typeof city[0] === 'string')) {
        city.forEach((el) => {
            data[el[0]] = el[1];
        });
        return (
            <div className={styles.location}>
                <div className={styles.location__country}>{data.country}</div>
                <h2 className={styles.location__city}>{data.name}</h2>
                <ul className={styles.location__coords}>
                    <li className={styles.location__item}>lat: {data.lat}</li>
                    <li className={styles.location__item}>lon: {data.lon}</li>
                </ul>
                <div className={styles.location__temperature}>{data.temp}</div>
                <div className={styles.location__feels}>
                    Feels like: {data.feelslike}
                </div>
                <img
                    src={'https:' + data.img}
                    className={styles.location__img}
                    lat="weather icon"
                />
            </div>
        );
    } else if (city) {
        return (
            <div className={styles.location__error}>
                {city[0]}: {city[1]}
            </div>
        );
    } else {
        return (
            <div className={styles.location__error}>
                Oops, something went wrong :(
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    city: state.curCity,
});

export default connect(mapStateToProps)(Location);
