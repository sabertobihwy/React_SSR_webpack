import React from 'react'
import { Outlet } from 'react-router'
import Headers from '../../components/headers'

export default function Admin({ headers }) {
    return (
        <div>
            <Headers headers={headers} />
            {<Outlet />}
        </div>
    )
}
