const primaryColors = [
	{ color: "red" },
	{ color: "yellow" },
	{ color: "blue" },
];

// how to get [ 'red', 'yellow', 'blue' ]

let result = primaryColors.reduce((previous, primaryColor) => {
	previous.push(primaryColor.color);

	return previous;
}, []);

console.log(result);
