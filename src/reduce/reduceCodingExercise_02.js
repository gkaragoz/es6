// Reducing Properties
// Use the 'reduce' helper to create an object that
// tallies the number of sitting and standing desks.
// The object returned should have the form
// '{ sitting: 3, standing: 2 }'. The initial value has
// been provided to you.

// Hint: Don't forget to return the accumulator object
// (the first argument to the iterator function)

let desks = [
	{ type: "sitting" },
	{ type: "standing" },
	{ type: "sitting" },
	{ type: "sitting" },
	{ type: "standing" },
];

let deskTypes = desks.reduce(
	function (previous, desk) {
		if (desk.type === "sitting") {
			previous.sitting++;
		} else if (desk.type === "standing") {
			previous.standing++;
		}

		return previous;
	},
	{ sitting: 0, standing: 0 }
);

console.log(deskTypes);
