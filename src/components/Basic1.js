import React, { useState } from 'react'

const Basic1 = ( props ) => {
    const [ count, setCount ] = useState(0)

    return (
        <React.Fragment>
            <button onClick={ () => { setCount(preCount=>preCount+1); setCount(count=>count+1); } }>
                count {count}</button>
            <h1>Hello {props.name}!</h1>
            <h1>Hello World!</h1>
        </React.Fragment>
    )
}

export default Basic1
