import React from 'react';
import './CustomerReview.css';
import Chart from 'react-apexcharts';

export default function CustomerReview() {
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
		<div className='CustomerReview'>
			<p>Customer Review</p>
			<Chart series={data.series} type='area' width='350' height='210' options={data.options} />
		</div>
	);
}
