const _ = require("lodash");

const listA = [
  { name: "Kevin Brian", id: 1 },
  { name: "Christian", id: 2 },
  { name: "Reis", id: 3 },
  { name: "Kim", id: 4 },
  { name: "kito", id: 5 },
];
const selected = [
  { name: "Reis", id: 3 },
  { name: "Kim", id: 4 },
  { name: "kito", id: 5 },
];

const dif = _.differenceBy(listA, selected,'name');
console.log({ dif });
