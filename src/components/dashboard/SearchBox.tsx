import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { filterMatchingPairingNames } from '../../utils/helpers';

interface Props {
  pairingNames: string[];
  setIsSearchBoxOpen: any;
  isSearchBoxOpen: boolean;
}

const SearchBox: React.FC<Props> = ({ pairingNames, setIsSearchBoxOpen, isSearchBoxOpen }) => {
  const [ displayedText, setDisplayedText ] = useState<string>("");
  const [ selectedPairings, setSelectedParings ] = useState<string[]>([]);
  
  const autocomplete = (event: any): void  => {
    const input: string =  event['target']['value'];
    const matchingPairingNames = filterMatchingPairingNames(input, pairingNames);
    
    if (input.length === 0) {
      setIsSearchBoxOpen(false);
    } else {
      setIsSearchBoxOpen(true);
    }

    setDisplayedText(input);
    setSelectedParings(!matchingPairingNames.length ? ["Nothing found..."] : matchingPairingNames);
  }


  const choosePairing = (event: any): void => {
    if (event) {
      setDisplayedText(event['target'].getAttribute('value'));
    }
  }

  return (
    <div className="relative mt-6">
      <p className="text-sm mb-1 text-gray-600">Get more details about a pairing currency:</p>
      <div className="">
        <input className="relative border-style_blue drop-shadow-lg appearance-none border rounded w-72 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline h-11" 
          data-tested="input-box"
          onChange={(event:any) => autocomplete(event)} 
          placeholder="Search for a pairing..." 
          value={displayedText}
        />
        {isSearchBoxOpen && (
          <div className="absolute border overflow-x-auto h-60 w-72">
            <ul>
              {selectedPairings.map((pairing, idx) => {
                return (
                  <li className="block bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900"
                       key={`list${pairing}${idx}`}
                       data-tested={`list${pairing}${idx}`}
                      onClick={(event:any) => choosePairing(event)}
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

export default SearchBox;