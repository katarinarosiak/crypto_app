// @ts-nocheck
import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { CoinContext } from '../App';
// import { handleClickOutside } from '../utils/eventHandling';


const Input: React.FC = () => {

	const { coins } = useContext(CoinContext);
	const pairings = Object.keys(coins).map(coin => `${coin.slice(0,3)}/${coin.slice(3)}`);

  const [ displayedText, setDisplayedText ] = useState<string>("");
  const [ selectedPairings, setSelectedParings ] = useState<string[]>([]);
	const [ display, setDisplay ] = useState<boolean>(false);

	const wrapperRef = useRef<HTMLDivElement>(null);

	// const handleClickOutside = (event, ref): void => {
	// 	const { current: wrap } = ref;
	// 	if (wrap && !wrap.contains(event.target)) {
	// 		return false;
	// 	} else {
	// 		return true;
	// 	}
	// }

	// useEffect(() => {
  //   window.addEventListener("mousedown", (e) => {
	// 		setDisplay(handleClickOutside(e, wrapperRef));
	// 	});
  //   return () => {
  //     window.removeEventListener("mousedown", (e) => handleClickOutside(e, wrapperRef));
  //   };
  // }, []);
  
  const autocomplete = (e): string => {
    const input = e.target.value;
    const matchingPairings = pairings.filter(pairing => {
      return pairing.slice(0, input.length).toLowerCase() === input.toLowerCase();
    })

		!input.length ? setDisplay(false) : setDisplay(true);
    setDisplayedText(input);
    setSelectedParings(!matchingPairings.length ? ["Nothing found..."] : matchingPairings);
  }

  const choosePairing = (e: React.MouseEventHandler<HTMLLIElement> | undefined): void => {
    setDisplayedText(e.target.getAttribute('value'));
  }

  return (
    <div ref={wrapperRef} className="relative mt-6">
    	<p className="text-sm mb-1 text-gray-600">Get more details about a pairing currency:</p>
      <div className="">
        <input className="relative border-style_blue drop-shadow-lg appearance-none border rounded w-72 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline h-11" 
					onChange={autocomplete} 
					placeholder="Search for a pairing..." 
					value={displayedText}
				/>
				{display && (
					<div className="absolute border overflow-x-auto h-60 w-72">
						<ul className="">
							{selectedPairings.map((pairing) => {
								return (
									<li className="block bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900"
									 	key={pairing}
										id={pairing}
										onClick={choosePairing}
										value={pairing}>
										<Link to={`/${pairing.replace('/', '')}`}>
											<div className="w-72">
												{pairing}
											</div>
										</Link>
									</li>
								)
							})}
						</ul>
					</div>
				)} 
      </div>
    </div>
  )
}

export default Input;