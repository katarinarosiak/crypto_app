import { useState, useContext, useEffect, useMemo, useRef } from 'react';
import { CoinContext } from '../App';
import { FiatContext } from '../App';

const Dropdown = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ fiatCurrencies, setFiatCurrencies ] = useState([]);


	const { coins } = useContext(CoinContext);
	const { displayFiat, setDisplayFiat } = useContext(FiatContext);

	useEffect(() => {
		const currencies = Object.keys(coins).map(coin => coin.slice(3));
		currencies.unshift('Show All');
		setFiatCurrencies(currencies);
	}, [coins])

	const wrapperRef = useRef(null);

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setIsOpen(false);
		}
	}

	useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

	return (
		<div ref={wrapperRef}>
			<button 
				className="rounded bg-gradient-to-r from-style_green to-style_blue p-3 text-white w-72 h-10 my-6 drop-shadow-lg"
				onClick={() => setIsOpen(!isOpen)}
				>Choose Fiat Currency ▼</button>
			<div className="absolute overflow-auto h-60">
				<ul className="overflow-auto">
				{isOpen && (
					<>
						{fiatCurrencies.map(fiat => {
							return (
								<li key={fiat}
									// className="border w-full"
									className="block border bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900"
									onClick={() => {
										setDisplayFiat(fiat)
										setIsOpen(!isOpen)
									}}
								>
									{fiat}
								</li>
							)
						})}
					</>
				)}
				</ul>
			</div>
		</div>
	)
}

export default Dropdown;