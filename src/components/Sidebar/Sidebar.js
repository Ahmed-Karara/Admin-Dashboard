import './Sidebar.css';
import { useState } from 'react';
import logo from '../../imgs/logo.png';
import { SidebarIcons } from '../../Data/Data.js';
import { motion } from 'framer-motion';
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons/';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Sidebar() {
	const [expand, setExpand] = useState(true);
	const [selected, setSelected] = useState(['Dashboard']);

	const Sidebar = {
		true: { left: '0' },
		false: { left: '-60%' },
	};

	return (
		<>
			<div
				className='menubars'
				style={expand ? { left: '40%' } : { left: '5%' }}
				onClick={() => {
					setExpand(!expand);
				}}>
				<UilBars />
			</div>
			<motion.div
				className='sidebar'
				variants={Sidebar}
				animate={window.innerWidth <= 800 ? `${expand}` : ''}>
				{/* Logo */}
				<div className='logo'>
					<img src={logo} alt='logo' />
					<span className='title'>
						sh<span className='pinks'>o</span>ps
					</span>
				</div>

				{/* Menu */}
				<div className='menu'>
					{SidebarIcons.map((item, index) => {
						return (
							<Link
								to={`/${item.Name}`}
								key={index}
								onClick={() => {
									setSelected(item.Name);
								}}>
								<div className={selected === item.Name ? 'menuItem active' : 'menuItem'}>
									<item.icon />
									<span>{item.Name}</span>
								</div>
							</Link>
						);
					})}

					<div className='menuItem signout'>
						<UilSignOutAlt size='40' color='#512DA8' />
					</div>
				</div>
			</motion.div>
		</>
	);
}
