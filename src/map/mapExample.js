let cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camaro", price: "expensive" },
];

let prices = cars.map(function (car) {
  return car.price;
});

console.log(prices);
