import React from 'react';
import styles from './Controls.module.css';
import histogram from './histogram.json';

export default function Controls(props) {
  const { time, handlePlayPause, handleReset } = props;
  return (
    <div className={styles.controls}>
      <button onClick={handlePlayPause}>Play/Pause</button>
      <button onClick={handleReset}>Reset</button>
      <div className={styles.display}>
        {/* <div>
          {' '}
          {`${new Date(+(time * 1000).toFixed()).toISOString().slice(11, -5)}`}
        </div> */}
        <div>
          Riders:{' '}
          {`${
            histogram[parseInt((time >= 86400 ? time - 86400 : time) / 900)]
              .count
          }`}
        </div>
      </div>
    </div>
  );
}
