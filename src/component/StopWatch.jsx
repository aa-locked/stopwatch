import React from 'react'
import { useState,useEffect  } from 'react';

const StopWatch = () => {
 // State to store time in milliseconds
 const [time, setTime] = useState(0);
 const [isRunning, setIsRunning] = useState(false);

 useEffect(() => {
    if(isRunning){
        const interval = setInterval(() => {
            setTime((prevCount) => prevCount + 1);
          }, 1000);
      
          return () => clearInterval(interval);
    }
    
 }, [isRunning]);


 // Start and stop the timer
 const startAndStop = () => {
   setIsRunning(!isRunning);
 };

 // Reset timer
 const reset = () => {
   setTime(0);
 };

 const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
 return (
   <>
     <p>
       Time : {String(hours).padStart(2, '0')}:
               {String(minutes).padStart(2, '0')}:
               {String(seconds).padStart(2, '0')}
     </p>
     <div>
       <button onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
       <button onClick={reset}>Reset</button>
     </div>
   </>
 );
}

export default StopWatch
