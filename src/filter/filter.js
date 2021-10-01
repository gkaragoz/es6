let products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" },
];
let filteredProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProducts.push(products[i]);
  }
}

let filtered = products.filter((product) => {
  return product.type === "fruit";
});

console.log(filtered);
