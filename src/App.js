import React from 'react';
import styles from './App.module.css';
import Map from './Map';

function App() {
  return (
    <div className={styles.app}>
      <Map width={'100vw'} height={'100vh'} />
    </div>
  );
}

export default App;
