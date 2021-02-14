import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import Map from "./Map";
import Controls from "./Controls";
import Legend from "./Legend";
import Clock from "./Clock";
import useGetViewport from "./useGetViewport";

function App() {
  const frame = useRef();
  const last = useRef(performance.now());
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const animate = () => {
      const now = performance.now();
      const delta = now - last.current;
      if (!isPaused) {
        setTime((prev) => prev + delta);
      }
      last.current = now;
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [isPaused]);

  const handlePlayPause = () => {
    setIsPaused((current) => !current);
  };
  const handleReset = () => {
    setTime(0);
  };

  const handleSetTime = (event) => {
    setTime(event.target.value / 1000);
  };

  return (
    <div className={styles.app}>
      <Map width={"100vw"} height={"100vh"} time={time} />
      <Controls
        time={time}
        handlePlayPause={handlePlayPause}
        handleReset={handleReset}
      />
      <Clock time={time * 1000} style={{ width: "10vw", height: "10vw" }} />
      <Legend handleSetTime={handleSetTime} time={time} />
    </div>
  );
}

export default App;
