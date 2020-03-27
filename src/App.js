import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Map from './Map';

function App() {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlayling] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const frame = window.requestAnimationFrame(() => {
        const loopLength = 86400;
        const animationSpeed = 480;
        const timestamp = Date.now() / 1000;
        const loopTime = loopLength / animationSpeed;
        setTime(((timestamp % loopTime) / loopTime) * loopLength);
      });
      return () => {
        window.cancelAnimationFrame(frame);
      };
    }
  }, [time, isPlaying]);

  const handlePlayPause = () => {
    setIsPlayling((current) => !current);
  };
  const handleReset = () => {
    setTime(0);
  };

  return (
    <div className={styles.app}>
      <Map width={'100vw'} height={'100vh'} time={time} />
      <div className={styles.controls}>
        <button onClick={handlePlayPause}>Play/Pause</button>
        <button onClick={handleReset}>Reset</button>
        <div className={styles.display}>
          {`${new Date(+(time * 1000).toFixed()).toISOString().slice(11, -5)}`}
        </div>
      </div>
      <div className={styles.legend}>
        This should appear at the very bottom of the screen overlayed on top of
        the map.
      </div>
    </div>
  );
}

export default App;
