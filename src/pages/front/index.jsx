import React from 'react'
import Headers from '../../components/headers'
import { Outlet } from 'react-router'

export default function Front({ headers }) {
    return (
        <div>
            <Headers headers={headers} />
            {<Outlet />}
        </div>
    )
}
