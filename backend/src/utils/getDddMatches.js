const fakeDatabase = require("../database/fakeDatabase");

const getDddMatches = (originDDD, destinyDDD) => {
  let originMatches = fakeDatabase.map((tableLine) => {
    if (tableLine.originDDD == originDDD) return tableLine.destinyDDD;
    return null;
  });

  originMatches = originMatches.filter((match) => match !== null);

  let destinyMatches = fakeDatabase.map((tableLine) => {
    if (tableLine.destinyDDD == destinyDDD) return tableLine.originDDD;
    return null;
  });

  destinyMatches = destinyMatches.filter((match) => match !== null);

  return [originMatches, destinyMatches];
};

module.exports = getDddMatches;
