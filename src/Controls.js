import React from 'react';
import styles from './Controls.module.css';

export default function Controls(props) {
  const { time, handlePlayPause, handleReset } = props;
  return (
    <div className={styles.controls}>
      <button onClick={handlePlayPause}>Play/Pause</button>
      <button onClick={handleReset}>Reset</button>
      <div className={styles.display}>
        {`${new Date(+(time * 1000).toFixed()).toISOString().slice(11, -5)}`}
      </div>
    </div>
  );
}
