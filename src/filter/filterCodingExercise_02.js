// Handling Permissions with Filter
// Filter the array of users, only returning users
// who have admin level access. Assign the result to
// the variable 'filteredUsers'. Don't forget to use
// the 'return' keyword in the function!

let users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

let filteredUsers = users.filter((user) => {
  return user.admin;
});

console.log(filteredUsers);
