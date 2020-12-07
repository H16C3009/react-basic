import React, { useState } from 'react'
import Basic1 from './Basic1'

const Basic2 = () => {
    const [ products, setProducts ] = useState([])

    const newProducts = () => {
        setProducts([ ...products,  {
            id: products.length,
            name: 'Hello React'
        } ])
    }

    return (
        <>
            <button onClick={newProducts}>Add New Product</button>
            <ul>
                {
                    products.map( (product, index) => (
                        <li key={index}>{ product.name } id : { product.id }</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Basic2