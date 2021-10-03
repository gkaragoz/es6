const numbers = [10, 20, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	sum += number;
}

console.log(sum);

sum = numbers.reduce(function (sum, number) {
	return sum + number;
}, 0);

console.log(sum);
