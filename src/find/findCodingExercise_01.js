// Finding Admin Users
// Find the user in the users's array who is an admin.
// Assign this user to the variable 'admin'.

const users = [
	{ id: 1, admin: false },
	{ id: 2, admin: false },
	{ id: 3, admin: true },
];

let admin = users.find((user) => user.admin);
console.log(admin);
