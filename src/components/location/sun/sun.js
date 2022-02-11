import React from 'react';
import findSunPosition from './findSunPosition';
import styles from './styles.module.css';
import sunIcon from './sun.svg';

function Sun({ sunrise, sunset, curTime }) {
    const { completedX, timeEn } = findSunPosition(sunrise, sunset, curTime);
    return (
        <div className={styles.sun}>
            <div className={styles.sun__wrapper}>
                {/* <div
                    className={styles.sun__icon}
                    src={sunIcon}
                    style={{
                        bottom: `${completedY}px`,
                        left: `calc(${completedX}% - 40px)`,
                        backgroundImage: `url(${sunIcon})`,
                    }}
                ></div> */}
                <div className={styles.sun__area}>
                    <div className={styles.sun__circle}>
                        {completedX !== 0 ? (
                            <div
                                className={styles.sun__completed}
                                style={{ width: completedX + '%' }}
                            ></div>
                        ) : (
                            <div className={styles.sun__end}>
                                The sun is sleeping
                            </div>
                        )}
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
