import { Menu } from '@headlessui/react'
import { useState, useContext, useEffect, useMemo } from 'react';
import { formatDiagnosticsWithColorAndContext, SemanticClassificationFormat } from 'typescript';
import { CoinContext } from '../App';

export const Dropdown = () => {
	// const [ isOpen, setIsOpen ] = useState(false);
	const [ fiat, setFiat ] = useState([]);

	const { coins } = useContext(CoinContext);


		///hereeeeee

	// 	if (vals.length) {
	// 		return vals.reduce((arr, curr) => {
	// 			const symbol = curr["display_symbol"].split("-")[1];
	// 			if (arr.includes(symbol)) {

	// 			}
	// 			return arr; 
	// 		,[]}
	// 	}
	// 	return vals;	
	// };

	// useEffect(() => {
	// 	setFiat(() => getFiat(coins));
	// }, [coins])
	
	
	
	


	const links = [
		{ href: '/account-settings', label: 'Account settings' },
		{ href: '/support', label: 'Support' },
		{ href: '/license', label: 'License' },
		{ href: '/sign-out', label: 'Sign out' },
	]

	return (
		<div>
			<Menu >
				<Menu.Button className="rounded bg-gradient-to-r from-style_green to-style_blue p-3 text-white w-72 h-10 my-6 drop-shadow-lg">Choose Fiat Currency  ▼</Menu.Button>
					<Menu.Items>
					{fiat.map((currency) => (
						<Menu.Item
							as="a"
							key={currency}
							className="block py-2 px-4 w-80 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							{currency}
						</Menu.Item>
					))}
				</Menu.Items>
			</Menu>
		</div>
	)
};
