import React, { useState } from 'react';
import './card.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
import 'react-circular-progressbar/dist/styles.css';

export default function Card(props) {
	const [expand, setExpand] = useState(false);

	return (
		<AnimateSharedLayout>
			{expand ? (
				<ExpandedCard param={props} setExpand={() => setExpand(false)} />
			) : (
				<NormalCard param={props} setExpand={() => setExpand(true)} />
			)}
		</AnimateSharedLayout>
	);
}

/* Normal Card  */

function NormalCard({ param, setExpand }) {
	const Png = param.png;

	return (
		<motion.div
			className='normalcard'
			style={{
				background: param.color.background,
				boxShadow: param.color.boxShadow,
			}}
			onClick={setExpand}
			layoutId='expandcard'>
			<div className='radialbar'>
				<CircularProgressbar
					value={param.barValue}
					text={`${param.barValue} %`}></CircularProgressbar>
				<span>{param.title}</span>
			</div>
			<div className='details'>
				<Png />
				<span>${param.value}</span>
				<span>Last 24 Hours</span>
			</div>
		</motion.div>
	);
}

/* Expanded Card  */

function ExpandedCard({ param, setExpand }) {
	const data = {
		options: {
			area: {
				fillTo: 'origin',
			},
			stroke: {
				curve: 'smooth',
				colors: ['#FFFFFF'],
			},
			fill: {
				colors: ['#fff'],
				type: 'solid',
				opacity: 0.3,
			},
			dropShadow: {
				enabled: false,
				enabledOnSeries: undefined,
				top: 0,
				left: 0,
				blur: 3,
				color: '#000',
				opacity: 0.35,
			},
			dataLabels: {
				enabled: false,
			},
		},
	};
	return (
		<motion.div
			className='expandcard'
			style={{
				background: param.color.background,
				boxShadow: param.color.boxShadow,
			}}
			layoutId='expandcard'>
			<div className='close'>
				<UilTimes size='32' onClick={setExpand} />
			</div>
			<span>{param.title}</span>
			<Chart series={param.series} type='area' width='400' options={data.options} />
			<span>Last 24 hours</span>
		</motion.div>
	);
}
