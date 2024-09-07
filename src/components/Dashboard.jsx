import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/products" className='underline'>Go to products</Link>
    </div>
  )
}

export default Dashboard
