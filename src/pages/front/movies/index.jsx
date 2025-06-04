import React from 'react'
import { json, useLoaderData } from 'react-router-dom'

export default function Movies() {
    const data = useLoaderData()
    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {data.movieList.map(item => <li key={item._id}>{item.title}</li>)}

            </ul>
        </div>
    )
}
