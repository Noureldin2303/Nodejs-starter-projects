const { writeFileSync } = require("fs");
const { join } = require("path");
const faker = require("faker");

const company = ["ikea", "liddy", "adidas", "activ"];

const products = [...Array(20)].map(() => ({
  name: faker.commerce.productName(),
  price: Number(faker.commerce.price()),
  rating: faker.random.number(5),
  featured: faker.random.boolean(),
  company: faker.random.arrayElement(company),
  createdAt: faker.date.past().toISOString(),
}));

const filePath = join(__dirname, "products.json");
writeFileSync(filePath, JSON.stringify(products));
console.log("products generated");
