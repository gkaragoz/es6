// Challenging! Implementing 'reject'.
// This is a hard one! Create a function called 'reject'.
// Reject should work in the opposite way of 'filter'
// if a function returns 'true', the item should *not*
// be included in the new array.
// Hint: you can reuse filter.

// For example:
// let numbers = [10, 20, 30];
// let lessThanFifteen = reject(numbers, function(number) {
//   return number > 15;
// });

// lessThanFifteen [ 10 ];

function reject(array, iteratorFunction) {
  return array.filter((element) => {
    return !iteratorFunction(element);
  });
}
const numbers = [10, 20, 30];
const users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

console.log(reject(numbers, (element) => element > 15));
console.log(reject(users, (user) => user.id <= 3));
console.log(reject(users, (user) => user.admin));
