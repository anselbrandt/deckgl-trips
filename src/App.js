import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Map from './Map';
import Controls from './Controls';
import Legend from './Legend';

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

  const handleSetTime = (event) => {
    setTime(event.target.value / 1000);
  };

  return (
    <div className={styles.app}>
      <Map width={'100vw'} height={'100vh'} time={time} />
      <Controls
        time={time}
        handlePlayPause={handlePlayPause}
        handleReset={handleReset}
      />
      <Legend handleSetTime={handleSetTime} />
    </div>
  );
}

export default App;
