import React from 'react';
import './Orders.css';
import Table from '../TransactionTable/Table';
import NewProducts from '../NewProducts/NewProducts';

export default function Orders() {
	return (
		<div className='orders'>
			<span>Orders</span>
			<NewProducts />
			<Table />
		</div>
	);
}
