import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { CoinContext } from '../App';
import loupe from '../assets/loupe.png';

// const loupe = new URL('../assets/loupe.png', import.meta.url);

const Input = () => {

	const { coins } = useContext(CoinContext);
	const pairings = Object.keys(coins).map(coin => `${coin.slice(0,3)}/${coin.slice(3)}`);

  const [ displayedText, setDisplayedText ] = useState("");
  const [ selected, setSelected ] = useState([]);
	const [ display, setDisplay ] = useState(false);

	const wrapperRef = useRef(null);

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	}

	useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });
  
  const autocomplete = (e) => {
    const input = e.target.value;

    const matchingPairings = pairings.filter(pairing => {
      //regex????
      return pairing.slice(0, input.length).toLowerCase() === input.toLowerCase();
    })

		!input.length ? setDisplay(false) : setDisplay(true);

    setDisplayedText(input);
    setSelected(!matchingPairings.length ? ["Nothing found..."] : matchingPairings);
  }

  const choosePairing = (e) => {
    setDisplayedText(e.target.getAttribute('value'));
  }

  return (
    <div ref={wrapperRef} >
    <h1 className="title">Choose a currency:</h1>
      <div className="overflow-auto">
        <input className="relative drop-shadow-lg appearance-none border rounded w-72 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline h-11" 
					onChange={autocomplete} 
					placeholder="Search for a pairing..." 
					value={displayedText}
					style={{ 
						backgroundImage: `${loupe}`,
						backgroundRepeat: 'no-repeat',
					}}
				/>
				{display && (
					<div className="absolute overflow-auto h-60">
						<ul className="overflow-auto">
							{selected.map((pairing) => {
								return (
									<li className="block border bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900" key={pairing} id={pairing} onClick={choosePairing} value={pairing}>
										<Link to={`/${pairing.replace('/', '')}`}>{pairing}</Link>
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

export default Input