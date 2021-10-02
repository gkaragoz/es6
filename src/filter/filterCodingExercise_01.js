// Filtering Values
// Filter the array of numbers using the filter helper,
// creating a new array that only containts numbers
// greater than 50. Assign this new array to a variable
// called 'filteredNumbers'.
// Don't forget to use the 'return' keyword in the function!

let numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

let filteredNumbers = numbers.filter((number) => {
  return number > 50;
});

console.log(filteredNumbers);
