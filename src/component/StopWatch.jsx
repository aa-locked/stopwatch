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

 return (
   <>
     <p>
       Time : {time}
     </p>
     <div>
       <button onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
       <button onClick={reset}>Reset</button>
     </div>
   </>
 );
}

export default StopWatch
