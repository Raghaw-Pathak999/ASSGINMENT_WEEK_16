const items = [
  {
      name: "Iphone 7",
      category: "Mobile",
      priceUSD: 99,
  },
  {
      name: "Airbag",
      category: "CAR",
      priceUSD: 199,
  },
  {
      name: "Rolex Watch",
      category: "Watches",
      priceUSD: 120,
  },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
  return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
  ...item,
 priceINR: convertToINR(item.priceUSD)
}));

console.log(itemsInINR);