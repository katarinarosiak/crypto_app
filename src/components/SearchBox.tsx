import { Fragment, useState, useContext, useMemo } from 'react';
import { Combobox, Transition } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Link } from "react-router-dom";
import { CoinContext } from '../App';
import loupe from '../assets/loupe.png';


const SearchBox = () => {
	const { coins } = useContext(CoinContext);
	const pairings = Object.keys(coins).map(coin => {
		return {
			name: `${coin.slice(0,3)}/${coin.slice(3)}`
		}
	});

	const people = [
		{ id: 1, name: 'Wade Cooper' },
		{ id: 2, name: 'Arlene Mccoy' },
		{ id: 3, name: 'Devon Webb' },
		{ id: 4, name: 'Tom Cook' },
		{ id: 5, name: 'Tanya Fox' },
		{ id: 6, name: 'Hellen Schmidt' },
	]

  const [selected, setSelected] = useState(pairings[0])
  const [query, setQuery] = useState('')

  const filteredPairings = 
    query === ''
      ? pairings
      : pairings.filter((pairing) =>
          pairing.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

	console.log(pairings)
	// if (pairings.length === 0 ) return null; 

  return (
    <div className="relative w-72">
			Search for pairing:
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              // displayValue={(pairing) => pairing['name']}
							displayValue={(pairing) => pairing['name']}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
							<img src={loupe} alt="loupe" className="w-4"></img>
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPairings.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPairings.map((pairing) => (
									<Link to={`/${pairing.name.replace('/', '')}`}>
										<Combobox.Option
											key={pairing.name}
											className={({ active }) =>
												`relative cursor-default select-none py-2 pl-10 pr-4 ${
													active ? 'bg-style_green text-white' : 'text-gray-900'
												}`
											}
											value={pairing}
										>
											{({ selected, active }) => (
												<>
													<span
														className={`block truncate ${
															selected ? 'font-medium' : 'font-normal'
														}`}
													>
														{pairing.name}
													</span>
													{selected ? (
														<span
															className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																active ? 'text-white' : 'text-style_green'
															}`}
														>
														</span>
													) : null}
												</>
											)}
										</Combobox.Option>
									</Link>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchBox;