const getPrice = require("../utils/getPrice");
const getCallValueWithPlan = require("../utils/getCallValueWithPlan");
const getCallValueWithoutPlan = require("../utils/getCallValueWithoutPlan");
const getDddMathes = require("../utils/getDddMatches");
const getAllDdds = require("../utils/getAllDdds");

module.exports = {
  consult(req, res) {
    const { originDDD, destinyDDD, callTime, callPlan } = req.query;

    const price = getPrice(originDDD, destinyDDD);

    if (!price)
      return res.status(400).json({
        error: "This DDD combination does not exist in our database",
      });

    const valueWithPlan = getCallValueWithPlan(
      price,
      callTime,
      callPlan
    ).replace(".", ",");

    const valueWithoutPlan = getCallValueWithoutPlan(price, callTime).replace(
      ".",
      ","
    );

    return res.json({
      valueWithPlan,
      valueWithoutPlan,
    });
  },

  index(req, res) {
    const { originDDD, destinyDDD } = req.query;

    if (originDDD) {
      const dddMatches = getDddMathes(originDDD, destinyDDD);
      return res.json({ originMatches: dddMatches[0] });
    }

    if (destinyDDD) {
      const dddMatches = getDddMathes(originDDD, destinyDDD);
      return res.json({ destinyMatches: dddMatches[1] });
    }

    const allOrigins = getAllDdds();

    return res.json({ origins: allOrigins[0], destinies: allOrigins[1] });
  },
};
