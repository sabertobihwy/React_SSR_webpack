import React from 'react'
import { json, useLoaderData } from 'react-router-dom'

export default function Movies() {
    const data = useLoaderData()
    return (
        <div>
            <h2>Movies</h2>
            <span>{data.movies}</span>
        </div>
    )
}
