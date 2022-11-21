/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Table.css';

export default function Table() {
	return (
		<div>
			<p>Recent Transactions</p>
			<table className='Products'>
				<tbody>
					<tr>
						<th>Product</th>
						<th>Tracking ID</th>
						<th>Date</th>
						<th>Status</th>
						<th></th>
					</tr>
					<tr>
						<td>Iphone 13</td>
						<td>1890024</td>
						<td>2 May 2022</td>
						<td>
							<span className='approved'>Approved</span>
						</td>
						<td>
							<a href='#'>Details</a>
						</td>
					</tr>
					<tr>
						<td>Samsung Smart tv</td>
						<td>1890024</td>
						<td>2 May 2022</td>
						<td>
							<span className='approved'>Approved</span>
						</td>
						<td>
							<a href='#'>Details</a>
						</td>
					</tr>
					<tr>
						<td>Lenovo IdeaPad 310</td>
						<td>1890024</td>
						<td>2 May 2022</td>
						<td>
							<span className='pending'>Pending</span>
						</td>
						<td>
							<a href='#'>Details</a>
						</td>
					</tr>
					<tr>
						<td>Nevidia RTX 3050</td>
						<td>1890024</td>
						<td>2 May 2022</td>
						<td>
							<span className='delivered'>Delivered</span>
						</td>
						<td>
							<a href='#'>Details</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
