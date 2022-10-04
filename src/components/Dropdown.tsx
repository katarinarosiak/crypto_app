// @ts-nocheck
import { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { CoinContext } from '../App';
import { FiatContext } from '../App';
import { useKeyPress, scrollIntoView, handleClickOutside } from '../utils/eventHandling';

const Dropdown: React.FC = () => {

	const [ isOpen, setIsOpen ] = useState<boolean>(false);
	const [ show, setShow ] = useState<string>('Show All')
	const [ fiatCurrencies, setFiatCurrencies ] = useState<string[]>([]);
	// const [selected, setSelected] = useState(undefined);
	// const [cursor, setCursor] = useState(0);

	const { coins } = useContext(CoinContext);
	const { displayFiat, setDisplayFiat } = useContext(FiatContext);

	useEffect(() => {
		const currencies = Object.keys(coins).map(coin => coin.slice(3));
		currencies.unshift('Show All');
		setFiatCurrencies(currencies);
	}, [coins])

	const dropdownWindowRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
  //   window.addEventListener("mousedown", (e) => {
	// 		console.log('=>', handleClickOutside(e, dropdownWindowRef));
	// 		setIsOpen(handleClickOutside(e, dropdownWindowRef));
	// 	});
  //   return () => {
  //     window.removeEventListener("mousedown", (e) => handleClickOutside(e, dropdownWindowRef));
  //   };
  // }, []);

	// const downPress = useKeyPress("ArrowDown");
	// const upPress = useKeyPress("ArrowUp");
  // const enterPress = useKeyPress("Enter");

	const chooseFiat = useCallback((fiat: string)=> {
		setShow(fiat)
		setDisplayFiat(fiat)
		setIsOpen(false);
	},[setDisplayFiat])
	
	const listWindow = useRef<HTMLUListElement>(null);

	// useEffect(() => {
	// 	if (cursor < 0 || cursor > fiatCurrencies.length || !listWindow) {
	// 		return () => {}
	// 	}
	// 	let listItems = Array.from(listWindow.current.children);
	// 	listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop, listWindow);
	// }, [cursor, fiatCurrencies.length])


	// useEffect(() => {
	// 	console.log(keys.arrowDown);
  //   if (fiatCurrencies.length && keys.arrowDown) {
  //     setCursor(prevState =>
  //       prevState < fiatCurrencies.length - 1 ? prevState + 1 : prevState
  //     );
	// 		console.log(cursor);
  //   }
  // }, [keys.arrowDown, fiatCurrencies.length]);

	// useEffect(() => {
  //   if (fiatCurrencies.length && keys.arrowUp) {
  //     setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
  //   }
  // }, [fiatCurrencies.length, keys.arrowUp]);

  // useEffect(() => {
  //   if (fiatCurrencies.length && keys.enter) {
  //     setSelected(fiatCurrencies[cursor]);
	// 		chooseFiat(fiatCurrencies[cursor])
  //   }
  // }, [keys.enter, cursor, fiatCurrencies, chooseFiat]);


	return (
		<div ref={dropdownWindowRef} className={"relative"}>
			<button 
				className="rounded opacity-70 bg-gradient-to-r from-style_green to-style_blue p-3 text-white w-72 h-11 mt-6 drop-shadow-lg"
				onClick={() => {
					setIsOpen(!isOpen)
				}}
				>Filter By Fiat Currency: {show}▼</button>
			<div className={isOpen ? "absolute border overflow-auto h-60" : "absolute overflow-auto h-60"}>
				<ul
					ref={listWindow}  
					className="overflow-auto"
				>
				{isOpen && (
					<>
						{fiatCurrencies.map((fiat, idx) => {
							return (
								<li
									className="block bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900"
									onClick={() => {
										chooseFiat(fiat);
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