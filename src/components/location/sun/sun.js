import React from 'react';
import findSunPosition from './findSunPosition';
import styles from './styles.module.css';
import sunIcon from './sun.svg';

function Sun({ sunrise, sunset, curTime }) {
    const { completedX, timeEn, completedDeg } = findSunPosition(
        sunrise,
        sunset,
        curTime
    );
    console.log(completedDeg);
    return (
        <div className={styles.sun}>
            <div className={styles.sun__wrapper}>
                <div className={styles.sun__area}>
                    <div className={styles.sun__circle}>
                        <div
                            className={styles.sun__line}
                            style={{
                                transform: `rotate(calc(${
                                    completedDeg !== -210 ? completedDeg : -30
                                }deg))`,
                            }}
                        >
                            <div
                                className={styles.sun__icon}
                                style={{ backgroundImage: `url(${sunIcon})` }}
                            ></div>
                        </div>
                        <div
                            className={styles.sun__greyCircle}
                            style={{
                                transform: `rotate(calc(${
                                    completedDeg !== -210 ? completedDeg : 0
                                }deg))`,
                            }}
                        >
                            {completedDeg !== -210 ? (
                                <div className={styles.sun__completed}></div>
                            ) : (
                                <div className={styles.sun__end}>
                                    The sun is sleeping
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sun__info}>
                <div className={styles.sun__text}>{sunrise}</div>
                <div className={(styles.sun__text, styles.sun__time)}>
                    {timeEn}
                </div>
                <div className={styles.sun__text}>{sunset}</div>
            </div>
        </div>
    );
}

export default Sun;
