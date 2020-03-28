import React from 'react';
import styles from './Controls.module.css';
import { VictoryBar } from 'victory';
import jsondata from './histogram.json';

export default function Legend(props) {
  const { time, handleSetTime } = props;
  const data = jsondata;
  return (
    <div className={styles.legend} style={{ width: '80vw' }}>
      <div className={styles.slidecontainer}>
        <VictoryBar
          width={400}
          height={25}
          padding={0}
          data={data}
          x="bin"
          y="count"
          style={{ data: { fill: 'tomato' } }}
          barRatio={1}
        />
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
