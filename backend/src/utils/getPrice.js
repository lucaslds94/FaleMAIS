const fakeDatabase = require("../database/fakeDatabase");

const getPrice = (originDDD, destinyDDD) => {
  const call = fakeDatabase.find(
    (tableLine) =>
      tableLine.originDDD == originDDD && tableLine.destinyDDD == destinyDDD
  );
  return call.price;
};

module.exports = getPrice;
