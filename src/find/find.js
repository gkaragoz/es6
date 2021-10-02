let users = [
	{ name: "Jill", id: 5 },
	{ name: "Alex", id: 4 },
	{ name: "Bill" },
];

let user;

// for (let i = 0; i < users.length; i++) {
// 	if (users[i].name === "Alex") {
// 		user = users[i];
// 		break;
// 	}
// }

user = users.find((user) => {
	return user.name === "Alex";
});

console.log(user);
