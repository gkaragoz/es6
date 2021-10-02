// What's Your Balance?
// Find the account with a balance of 12 and assign it
// to the variable 'account'

const accounts = [
	{ balance: -10 },
	{ balance: 12 },
	{ balance: 0 },
	{ balance: 22 },
];

let account = accounts.find((account) => account.balance === 12);
console.log(account);
