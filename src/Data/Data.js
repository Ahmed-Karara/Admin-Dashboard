/* Sidebar Icons Data */
import {
	UilEstate,
	UilClipboardAlt,
	UilUsersAlt,
	UilPackage,
	UilChart,
	UilUsdSquare,
	UilMoneyWithdrawal,
} from '@iconscout/react-unicons';

import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';

import iPhone14 from '../imgs/iPhone14.jpg';
import SamsungS21 from '../imgs/SamsungS21.jpg';
import SamsungS22 from '../imgs/SamsungS22.jpg';
import VivoY53s from '../imgs/VivoY53s.jpg';
import iphone13 from '../imgs/iphone13.jpg';
import xiaomiMi11 from '../imgs/xiaomiMi11.jpg';

export const SidebarIcons = [
	{
		icon: UilEstate,
		Name: 'Dashboard',
	},
	{
		icon: UilClipboardAlt,
		Name: 'Orders',
	},
	{
		icon: UilUsersAlt,
		Name: 'Customers',
	},
	{
		icon: UilPackage,
		Name: 'Products',
	},
	{
		icon: UilChart,
		Name: 'Analytics',
	},
];

export const CardsInfo = [
	{
		title: 'Sales',
		color: {
			background: 'linear-gradient(180deg, #a53cfa 0%, #ac45f5 100%)',
			boxShadow: '0px 10px 20px 0px #e0c6f5',
		},
		barValue: 70,
		value: '25,970',
		png: UilUsdSquare,
		series: [
			{
				name: 'Sales',
				data: [35, 40, 65, 74, 32, 80, 45, 110],
			},
		],
	},

	{
		title: 'Revenue',
		color: {
			background: 'linear-gradient(180deg, #ff6f80 0%, #ff5b6b 100%)',
			boxShadow: '0px 10px 20px 0px #fdc0c7',
		},
		barValue: 80,
		value: '14,270',
		png: UilMoneyWithdrawal,
		series: [
			{
				name: 'Revenue',
				data: [10, 40, 70, 30, 90, 60, 50, 110],
			},
		],
	},

	{
		title: 'Expenses',
		color: {
			background: 'linear-gradient(#ffc466 -146.42%, #ffb331 -46.42%)',
			boxShadow: '0px 10px 20px 0px #f9d59b',
		},
		barValue: 60,
		value: '4,270',
		png: UilClipboardAlt,
		series: [
			{
				name: 'Expenses',
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
];

export const UserOrders = [
	{
		img: img1,
		name: 'Adam Smith ',
		notification: 'has recived a Samsung battery charger ',
		time: '25 seconds ago',
	},
	{
		img: img2,
		name: 'Robert White ',
		notification: 'has recived a Samsung battery charger ',
		time: '45 minutes ago',
	},
	{
		img: img3,
		name: 'Jaclyn Arnold ',
		notification: 'has recived a Samsung battery charger ',
		time: '2 hours ago',
	},
];

export const NewProduct = [
	{
		name: 'iphone-14',
		img: iPhone14,
	},
	{
		name: 'Samsung-S21',
		img: SamsungS21,
	},
	{
		name: 'Samsung-S22',
		img: SamsungS22,
	},
	{
		name: 'Vivo-Y53s',
		img: VivoY53s,
	},
	{
		name: 'iphone-13',
		img: iphone13,
	},
	{
		name: 'xiaomi-Mi11',
		img: xiaomiMi11,
	},
];
