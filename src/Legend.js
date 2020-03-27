import React from 'react';
import styles from './Controls.module.css';

export default function Legend(props) {
  const { time, handleSetTime } = props;
  return (
    <div className={styles.legend} style={{ width: '80vw' }}>
      <div className={styles.slidecontainer}>
        <input
          className={styles.slider}
          name="time"
          type="range"
          min={0}
          max={86400000}
          value={time}
          defaultValue={0}
          onChange={handleSetTime}
        />
      </div>
    </div>
  );
}
