import React from 'react';
import styles from './Legend.module.css';
import { VictoryBar } from 'victory';
import histogram from './histogram.json';

export default function Legend(props) {
  const { time, handleSetTime, width } = props;

  return (
    <div>
      <div
        className={styles.legend}
        style={{ width: '80vw', padding: '0', zIndex: '100' }}
      >
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
      <div className={styles.legend}>{width}</div>
      <div
        className={styles.legend}
        style={{ width: '80vw', padding: '0', zIndex: '50' }}
      >
        <VictoryBar
          width={400}
          height={15}
          padding={0}
          data={histogram}
          x="bin"
          y="count"
          style={{ data: { fill: 'tomato' } }}
          barRatio={1}
        />
      </div>
    </div>
  );
}
