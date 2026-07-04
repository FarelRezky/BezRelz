import React, { useEffect, useState } from 'react';
import classes from './SplashScreen.module.css';

function SplashScreen({ onComplete }) {
  useEffect(() => {
    // Wait for the slide animation to finish (e.g. 2s total duration)
    const timeout = setTimeout(() => {
      onComplete();
    }, 2500); 

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className={classes.container}>
      <div className={classes.terminal}>
        <span className={classes.prefix}>&gt;</span>
        <div className={classes.textWrapper}>
          <span className={classes.text}>BEZRELZ</span>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
