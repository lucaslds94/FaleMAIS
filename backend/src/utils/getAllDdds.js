const fakeDatabase = require("../database/fakeDatabase");

const getAllDdds = () => {
  let allOrigins = [
    ...new Set(fakeDatabase.map((tableLine) => tableLine.originDDD)),
  ];

  allOrigins = allOrigins.sort();

  let allDestinies = [
    ...new Set(fakeDatabase.map((tableLine) => tableLine.destinyDDD)),
  ];

  allDestinies = allDestinies.sort();

  return [allOrigins, allDestinies];
};

module.exports = getAllDdds;
