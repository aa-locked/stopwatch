import React from 'react'
import { useState,useEffect  } from 'react';
const DigitalWatch = () => {
     // State to store time in milliseconds
     const [time, setTime] = useState(new Date());
    
     useEffect(() => {
            const interval = setInterval(() => {
                setTime(new Date());
              }, 1000);
     }, []);
     const hours = time.getHours();
     const minutes = time.getMinutes();
     const seconds = time.getSeconds();
  return (
      <p>
       Digital Watch : {String(hours).padStart(2, '0')}:
               {String(minutes).padStart(2, '0')}:
               {String(seconds).padStart(2, '0')}
     </p>
  )
}
export default DigitalWatch
