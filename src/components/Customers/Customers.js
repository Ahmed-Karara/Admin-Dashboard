import React from 'react';
import './Customers.css';
import OrderUpdates from '../OrderUpdates/OrderUpdates';
import Chart from 'react-apexcharts';

export default function Customers() {
	const data = {
		series: [
			{
				name: 'Customer Review',
				data: [23, 45, 34, 12, 54, 32, 43],
			},
		],
		options: {
			area: {
				fillTo: 'origin',
			},
			stroke: {
				curve: 'smooth',
				colors: ['#512DA8'],
			},
			fill: {
				colors: ['#512DA8'],
				type: 'solid',
				opacity: 0.3,
			},
			dropShadow: {
				enabled: false,
				enabledOnSeries: undefined,
				top: 0,
				left: 0,
				blur: 3,
				color: '#512DA8',
				opacity: 0.35,
			},
			dataLabels: {
				enabled: false,
			},
		},
	};

	return (
		<div className='customers'>
			<span>Customer Review</span>
			<Chart series={data.series} type='area' width='100%' height='250' options={data.options} />
			<div className='aa'>
				<OrderUpdates />
			</div>
		</div>
	);
}
