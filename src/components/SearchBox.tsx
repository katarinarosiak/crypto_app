//@ts-nocheck
import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { CoinContext } from '../App';


const Input: React.FC = () => {

  const coinsData = useContext(CoinContext);
  const [ displayedText, setDisplayedText ] = useState<string>("");
  const [ selectedPairings, setSelectedParings ] = useState<string[]>([]);
  const [ display, setDisplay ] = useState<boolean>(false);
  const [ pairingsSymbols, setPairingSymbols ] = useState< string[] | []>([]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if ('coins' in coinsData) {
        setPairingSymbols(Object.keys(coinsData.coins).map(coin => `${coin.slice(0,3)}/${coin.slice(3)}`));
      }
  }, [coinsData]);


  const autocomplete = (event: React.ChangeEventHandler<HTMLInputElement> | undefined): void  => {
    if (event && 'target' in event) {
      const input = event['target']['value'];
    
      const matchingPairings = pairingsSymbols.filter(symbol => {
        return symbol.slice(0, input['length']).toLowerCase() === input.toLowerCase();
      })

      !input['length'] ? setDisplay(false) : setDisplay(true);
      setDisplayedText(input);
      setSelectedParings(!matchingPairings.length ? ["Nothing found..."] : matchingPairings);
  }}

  const choosePairing = (event: React.MouseEventHandler<HTMLLIElement> | undefined): void => {
    if (event) {
      setDisplayedText(event['target'].getAttribute('value'));
    }
  }

  return (
    <div ref={wrapperRef} className="relative mt-6">
      <p className="text-sm mb-1 text-gray-600">Get more details about a pairing currency:</p>
      <div className="">
        <input className="relative border-style_blue drop-shadow-lg appearance-none border rounded w-72 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline h-11" 
          data-tested="input-box"
          onChange={autocomplete} 
          placeholder="Search for a pairing..." 
          value={displayedText}
        />
        {display && (
          <div className="absolute border overflow-x-auto h-60 w-72">
            <ul className="">
              {selectedPairings.map((pairing, idx) => {
                return (
                  <li className="block bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900"
                     key={`list${pairing}${idx}`}
                     data-tested={`list${pairing}${idx}`}
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