// Hardmode: Custom 'Unique' Helper
// Another really hard one! Write a function called
// 'unique' that will remove all the duplicate values
// from an array.

// For example, given the following array:
// let numbers = [1, 1, 2, 3, 4, 4];

// Your function should return
// [1, 2, 3, 4]

// Hint: Use the 'reduce' and 'find' helpers.

const numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
	return array.reduce((previous, number) => {
		let nonExistNumber = previous.find((prevNumber) => {
			return prevNumber === number;
		});
		if (nonExistNumber === undefined) previous.push(number);

		return previous;
	}, []);
}

console.log(unique(numbers));
