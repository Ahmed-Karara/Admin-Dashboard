import React from 'react';
import './OrderUpdates.css';
import { UserOrders } from '../../Data/Data';

export default function OrderUpdates() {
	return (
		<div className='oreders'>
			{UserOrders.map((user, index) => {
				return (
					<div key={index} className='update'>
						<img src={user.img} alt={user.name} />
						<div className='notification'>
							<span>{user.name}</span>
							<span>{user.notification}</span>
							<div>
								<span>{user.time}</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
