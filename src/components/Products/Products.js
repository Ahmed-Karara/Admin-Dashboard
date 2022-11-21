import React from 'react';
import './Products.css';
import Chart from 'react-apexcharts';
import NewProducts from '../NewProducts/NewProducts';

const data = {
	options: {
		xaxis: {
			categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
		},
	},

	series: [
		{
			name: 'Excpected',
			data: [45, 50, 49, 60, 70, 91, 62, 55, 78, 66, 73, 93],
		},
		{
			name: 'Actual',
			data: [40, 56, 45, 80, 90, 85, 72, 42, 70, 60, 83, 99],
		},
	],

	plotOptions: {},
	legend: {
		position: 'right',
		verticalAlign: 'top',
		containerMargin: {
			left: 35,
			right: 60,
		},
	},
};

export default function Products() {
	return (
		<div className='products'>
			<NewProducts />
			<span>Product Sales</span>
			<Chart options={data.options} series={data.series} type='bar' width='100%' height='260px' />
		</div>
	);
}
