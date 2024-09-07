import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <p>Products</p>
      <Link to="/" className='underline'>Go to Dashboard</Link>
    </div>
  )
}

export default Products
