import React, { useEffect, useState } from 'react'

function Time(){
    const [timer, setTimer] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer -1)
        },1000)
        return () => clearInterval(interval);
     }, []);
     useEffect(() => {
        if (timer === 0) {
          window.alert("Time's up");
        }
      }, [timer]);
  return (
    <div>
        <h1>{timer}</h1>
    </div>
  )
}

export default Time