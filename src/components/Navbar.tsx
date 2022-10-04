import React from 'react';
import logo from '../assets/bitcoin.png';
import menu from '../assets/more.png';
import cross from '../assets/cross.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar: React.FC = () => {
	const [ nav, setNav ] = useState<boolean>(false);
	const handleClick = (): void => setNav(!nav);


	const chooseMenu = () => {
		if (!nav) {
			return (
				<img src={menu} alt="menu-icon" className="w-10" onClick={handleClick}></img>
			)
		} else {
			return (
				<img src={cross} alt="menu-icon" className="w-10" onClick={handleClick}></img>
			)
		}
	}

	return (
		<div className="sticky">
			<div className="w-screen h-[80] z-10 bg-dark fixed drop-shadow-lg p-2">
				<div className="px-2 flex justify-between items-center w-full h-full">
					<div className="flex items-center">
						<Link to="/"><img src={logo} alt="bitcoin-icon" className="w-12 ml-4"></img></Link> 
						<Link to="/"><h1 className="text-3xl font-bold mx-4 sm:text-4xl text-white">Bcoin.</h1></Link>
						<ul className="text-white hidden lg:flex mx-10">
							<li className="navItem"><Link to="/">Home</Link></li>
							<li className="navItem"><Link to="/">Documentation</Link></li>
						</ul>
						<div className="absolute nowrap lg:hidden right-4">
							{chooseMenu()}
						</div>
					</div>
				</div>
				<div className={!nav ? "hidden" : "object-left flex md:hidden absolute top-7 right-40 px-10 pr-40 py-9"}>
					<ul className="absolute bg-dark w-80 px-9 py-4 mb-2">
						<li className="w-full text-white py-2 mb-4"><Link to="/">Home</Link></li>
						<li className="w-full text-white py-2 mb-4"><Link to="/">Documentation</Link></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar