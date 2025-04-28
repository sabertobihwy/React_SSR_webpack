import React from 'react'
import { json, useLoaderData, useRouteLoaderData } from 'react-router-dom'

export default function Home() {
  const data = useLoaderData()
  const root = useRouteLoaderData('root')
  // console.log(root)
  return (
    <div>
      <h2>home</h2>
      <span>{root.message}{data.home}</span>
    </div>
  )
}
