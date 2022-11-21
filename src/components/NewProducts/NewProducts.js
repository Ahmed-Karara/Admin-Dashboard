import React from 'react';
import './NewProducts.css';
import { NewProduct } from '../../Data/Data';

export default function NewProducts() {
	return (
		<div className='newProducts'>
			{NewProduct.map((item, index) => {
				return (
					<div className='box' key={index}>
						<img src={item.img} alt={item.name} />
						<span>{item.name}</span>
					</div>
				);
			})}
		</div>
	);
}
