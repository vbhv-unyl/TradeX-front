import React from 'react'
import { Link } from 'react-router-dom'
import RecentOrders from './RecentOrders';
import DashboardStatsGrid from './DashboardStatsGrid';
import BuyerProfilePieChart from './BuyerProfilePieChart';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-2 w-full">
				<BuyerProfilePieChart />
				<RecentOrders />
			</div>
      <Link to="/products" className='underline'>Go to products</Link>
    </div>
  )
}

export default Dashboard
