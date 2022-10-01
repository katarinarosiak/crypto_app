import React from 'react';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { CoinContext } from '../App';

const Input = () => {

	const { coins } = useContext(CoinContext);
	const pairings = Object.keys(coins).map(coin => `${coin.slice(0,3)}/${coin.slice(3)}`);

  const [ display, setDisplay ] = useState("");
  const [ selected, setSelected ] = useState([]);
  
  const autocomplete = (e) => {
    const input = e.target.value;
    const matchingPairings = pairings.filter(pairing => {
      //regex????
      return pairing.slice(0, input.length).toLowerCase() === input.toLowerCase();
    })

    setDisplay(input);
    setSelected(matchingPairings);
  }

  const choosePairing = (e) => {
    setDisplay(e.target.getAttribute('value'));
  }

  return (
    <div>
    <h1 className="title">Choose a currency:</h1>
      <div>
        <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-11" onChange={autocomplete} placeholder="Search for a pairing..." value={display}></input>
        <ul className="list">
          {selected.map((pairing) => {
            return (
              <li className="block py-3 px-5 w-60 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={pairing} id={pairing} onClick={choosePairing} value={pairing}>
								<Link to={`/${pairing.replace('/', '')}`}>{pairing}</Link>
							</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Input