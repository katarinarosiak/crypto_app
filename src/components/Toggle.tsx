import { useState } from 'react';

const Toggle = ({ handleChange }) => {


	return (
		<div className="flex flex-wrap">
			<p className="text-xs pt-1 mx-2">Percent</p>
			<label className="">
				<input type="checkbox" onChange={handleChange} id="toggle-switch" className="relative cursor-pointer h-7 w-14 rounded-full appearance-none bg-white/50 checked:bg-style_blue transition duration-200"/>
			</label>
			<p className='text-xs pt-1 mx-2'>Price</p>
		</div>
	)
}



// import React from 'react';
// import { useState } from 'react';
// import { Switch } from '@headlessui/react';

// const Toggle = () => {

// 	const [enabled, setEnabled] = useState(false);

// 		return (
// 			<Switch
// 				checked={enabled}
// 				onChange={setEnabled}
// 				className={`${
// 					enabled ? 'bg-style_blue' : 'bg-style_green'
// 				} relative inline-flex h-6 w-11 items-center rounded-full`}
// 			>
// 				<span className="sr-only">Enable notifications</span>
// 				<span
// 					className={`${
// 						enabled ? 'translate-x-6' : 'translate-x-1'
// 					} inline-block h-4 w-4 transform rounded-full bg-white transition`}
// 				/>
// 			</Switch>
// 		)
// }

export default Toggle;