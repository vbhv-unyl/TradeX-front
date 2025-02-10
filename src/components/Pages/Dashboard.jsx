import React from 'react'
import { Link } from 'react-router-dom'
import RecentOrders from './RecentOrders';

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <div className="flex flex-row gap-4 w-full">
				<RecentOrders />
			</div>
      <Link to="/products" className='underline'>Go to products</Link>
    </div>
  )
}

export default Dashboard
