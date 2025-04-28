import React from 'react'
import { Link } from 'react-router-dom';
import * as style from './headers.module.css'

export default function Headers({ headers }) {
    // headers: [{link, name}]
    const headersDisplay = headers.map((item, i) => (<Link key={i} to={item.link} className={style['nav-link']}>{item.name}</Link>))
    return (
        <header>
            <nav className={style.nav}>
                {headersDisplay}
            </nav>
        </header>
    )
}
