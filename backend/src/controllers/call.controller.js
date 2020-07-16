const getPrice = require("../utils/getPrice");
const getCallValueWithPlan = require("../utils/getCallValueWithPlan");
const getCallValueWithoutPlan = require("../utils/getCallValueWithoutPlan");

module.exports = {
  index(req, res) {
    const { originDDD, destinyDDD, callTime, callPlan } = req.query;

    const price = getPrice(originDDD, destinyDDD);

    let valueWithPlan = getCallValueWithPlan(
      price,
      callTime,
      callPlan,
    );

    const valueWithoutPlan = getCallValueWithoutPlan(price, callTime);

    return res.json({ valueWithPlan, valueWithoutPlan });
  },
};
