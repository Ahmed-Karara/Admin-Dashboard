import React from 'react';
import './Cards.css';
import { CardsInfo } from '../../Data/Data';
import Card from '../card/Card';
export default function Cards() {
	return (
		<div className='cards'>
			{CardsInfo.map((card, id) => {
				return (
					<div className='cardsParent' key={id}>
						<Card
							title={card.title}
							color={card.color}
							barValue={card.barValue}
							value={card.value}
							png={card.png}
							series={card.series}
						/>
					</div>
				);
			})}
		</div>
	);
}
