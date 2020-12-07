import React from 'react'

const Basic1 = ( props ) => {
    const clickHandler = () => {
        console.log('clicked')
    }

    return (
        <React.Fragment>
            <button onClick={clickHandler}>click</button>
            <h1>Hello {props.name}!</h1>
            <h1>Hello World!</h1>
        </React.Fragment>
    )
}

export default Basic1
