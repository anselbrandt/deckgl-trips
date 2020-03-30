import React from 'react';
import styles from './Clock.module.css';

function angle(ms) {
  const hours = (ms / 43200000) * 360;
  const minutes = (ms / 3600000) * 360;
  const seconds = (ms / 60000) * 360;
  return {
    hours: hours === 360 ? 0 : hours,
    minutes: minutes === 360 ? 0 : minutes,
    seconds: seconds === 360 ? 0 : seconds,
  };
}

export default function Clock(props) {
  const { time, style } = props;
  return (
    <div className={styles.clock} style={style}>
      <div
        className={styles.hoursContainer}
        style={{ transform: `rotate(${angle(time).hours}deg)` }}
      >
        <div className={styles.hours}></div>
      </div>
      <div
        className={styles.minutesContainer}
        style={{ transform: `rotate(${angle(time).minutes}deg)` }}
      >
        <div className={styles.minutes}></div>
      </div>
      {/* <div
        className={styles.secondsContainer}
        style={{ transform: `rotate(${angle(time).seconds}deg)` }}
      >
        <div className={styles.seconds}></div>
        <div className={styles.secondsIndicator}></div>
      </div> */}
      <div className={styles.ampm}>{time < 43200000 ? 'am' : 'pm'}</div>
    </div>
  );
}
