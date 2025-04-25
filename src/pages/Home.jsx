import React, { useState } from 'react'
import '@/assets/css/global.css'
import { prettybutton } from '@/pages/index.css'
import url from '@/assets/img/pic.jpg'

export default function Home() {
    const [num, setNum] = useState(0)
    return (
        <div>
            <img src={url} />
            <button
                className={prettybutton}
                onClick={() => {
                    setNum(prev => prev + 2)
                }}></button>
            <h1>{num}</h1>
        </div>
    )
}