import React from "react";
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
    {
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Suzlon Energy Ltd.',
		order_date: '2022-05-17T03:24:00',
		order_total: '$435.50',
		current_order_status: 'PROFIT',
		shipment_address: '$452.20'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Zomato Ltd.',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'LOSS',
		shipment_address: '$95.32'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Rama Steels Tubes Ltd.',
		order_date: '2022-05-17T07:14:00',
		order_total: '$836.44',
		current_order_status: 'LOSS',
		shipment_address: '$820.33'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Tata Steel Ltd.',
		order_date: '2022-05-16T12:40:00',
		order_total: '$334.50',
		current_order_status: 'PROFIT',
		shipment_address: '$400.17'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Coal India Ltd.',
		order_date: '2022-05-14T03:24:00',
		order_total: '$876.00',
		current_order_status: 'PROFIT',
		shipment_address: '$895.52'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'REC Ltd.',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'PROFIT',
		shipment_address: '$158.26'
	}
]

export default function RecentOrders(){
    return(
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Your Holidngs</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>ID</th>
							<th>Company Name</th>
							<th>Product ID</th>
							<th>Shares</th>
							<th>Invested Amount</th>
							<th>Total Returns</th>
							<th>Returns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td>
                                    <Link to={`/order/${order.id}`}>#{order.id}</Link>
                                </td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>
									<Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
								</td>
                                <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}