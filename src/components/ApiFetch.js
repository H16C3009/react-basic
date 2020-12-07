import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiFetch = () => {
    const [ posts, setPosts ] =useState([])

    useEffect( () => {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then( res => {
        //     // console.log(res)
        //     setPosts( res.data )
        // })
        fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
        .then( res => res.json() ).then( data => {
            console.log(data)
            setPosts(data)
        })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map( (post, index) => (
                        <li key={index}>{post.title}</li>
                    ))
                }

            </ul>
        </div>
    )
}

export default ApiFetch
