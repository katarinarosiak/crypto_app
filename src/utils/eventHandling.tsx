//@ts-nocheck
import { useState, useEffect } from 'react';

const useKeyPress = (targetKey) => {
	const [keyPressed, setKeyPressed] = useState(false);
	console.log(targetKey);

	const downHandler = (event) => {
		event.preventDefault();
		if (event.key === targetKey) {
			setKeyPressed(true);
		}
	}

	const upHandler = (event) => {
		event.preventDefault();
		if (event.key === targetKey) {
			setKeyPressed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);

		return () => {
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler);
		};
	});

	return keyPressed;
};

// const getKeyName = (event, setKeyName ) => {
// 	const names = ["ArrowDown", "ArrowUp", "Enter"]
// 	if (names.includes(event.key)) {

// 	}
// 	setKeyName();
// }

const scrollIntoView = (position, refElement) => {
	refElement.current.parentNode.scrollTo({
		top: position,
		behavior: "smooth"
	})
}

const handleClickOutside = (event, ref): void => {
	const { current: wrap } = ref;
	if (wrap && !wrap.contains(event.target)) {
		return false;
	} else {
		return true;
	}
}

export {
	useKeyPress,
	scrollIntoView,
	handleClickOutside,
}
