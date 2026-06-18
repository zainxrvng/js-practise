// Array methods drill — Take an array of objects (say, 10 products with name, price, category) and write functions using map, filter, and reduce to: get just the names, filter by category, total up the prices, and find the most expensive item. This is the bread and butter of how you'll handle lists/state in React.

let products = [
  {
    name: "cola",
    price: 200,
    category: "food and drinks",
  },
  {
    name: "resistance band",
    price: 5000,
    category: "fitness",
  },
  {
    name: "wireless earbuds",
    price: 12000,
    category: "electronics",
  },
  {
    name: "phone charger",
    price: 1800,
    category: "electronics",
  },
  {
    name: "yoga mat",
    price: 1500,
    category: "fitness",
  },
  {
    name: "instant noodles",
    price: 150,
    category: "food and drinks",
  },
  {
    name: "dumbbell set",
    price: 8000,
    category: "fitness",
  },
  {
    name: "green tea",
    price: 300,
    category: "food and drinks",
  },
  {
    name: "protein bar",
    price: 250,
    category: "food and drinks",
  },
];

function itemFinder(dyparam) {
  const itemName = products.map((item) => item[dyparam]);
  console.log(itemName);
  return itemName;
}

// itemFinder("name", "phone charger");

function productFilter(passingValue) {
  const filteredItem = products.filter((item) => {
    return item.category === passingValue;
  });
  // console.log(filteredItem);
  
  return filteredItem
}

productFilter("food and drinks");

function totalPrice (products) {
  return products.reduce( (accumulator, item) => {
        return accumulator + item.price;
  }, 0)
}

console.log(totalPrice(products));

