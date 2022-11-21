import React from 'react';
import './RecentActivity.css';
import OrderUpdates from '../OrderUpdates/OrderUpdates';
import CustomerReview from '../CustomerReview/CustomerReview';

export default function RecentActivity() {
	return (
		<div className='recent-activity'>
			<p>Recent Updates</p>
			<OrderUpdates />
			<CustomerReview />
		</div>
	);
}
