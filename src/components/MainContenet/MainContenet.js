import React from 'react';
import './MainContenet.css';
import Cards from '../Cards/Cards';
import Table from '../TransactionTable/Table';

export default function MainContent() {
	return (
		<div className='mainContent'>
			<span>Dashboard</span>
			<Cards />
			<Table />
		</div>
	);
}
