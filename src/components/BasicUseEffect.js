import React, { useState, useEffect} from 'react'

const BasicUseEffect = () => {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        console.log('useEffect invoked')
    }, [])

    return (
        <>
            <button onClick={ () => setCount( preCount => preCount+1)} >click {count}</button>
        </>
    )
}

export default BasicUseEffect
