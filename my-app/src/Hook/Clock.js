import React from 'react'
import '../Hook/Clock.css'
import useClock from './useHook/useClock'

function Clock() {
    const [time, ampm] = useClock();
    return (
    <div className="Clock-style">
      {time}
      <span> {ampm}</span>
    </div>
  )
}

export default Clock