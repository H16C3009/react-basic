import React, { useState } from 'react'

import Timer from './Timer'

function TimerContainer() {
    const [ display, setDispaly ] = useState(true)

    return (
        <div>
            <button onClick={ () => setDispaly(!display) }>Switch Timer</button>
            { display && <Timer /> }
        </div>
    )
}

export default TimerContainer
