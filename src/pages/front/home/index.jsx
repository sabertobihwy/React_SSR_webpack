import React from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { CounterComponent } from '../../../components/counter'

export default function Home() {
  const data = useLoaderData()
  const root = useRouteLoaderData('root')

  return (
    <div>
      <h2>home</h2>
      <span>{root.message}{data.home}</span>
      <CounterComponent />
    </div>
  )
}
