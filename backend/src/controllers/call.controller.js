const getPrice = require("../utils/getPrice");
const getCallValueWithPlan = require("../utils/getCallValueWithPlan");
const getCallValueWithoutPlan = require("../utils/getCallValueWithoutPlan");

module.exports = {
  index(req, res) {
    const { originDDD, destinyDDD, callTime, callPlan } = req.query;

    const price = getPrice(originDDD, destinyDDD);

    if (!price)
      return res
        .status(400)
        .json({
          error: "This DDD combination does not exist in our database",
        });

    let valueWithPlan = getCallValueWithPlan(price, callTime, callPlan);

    const valueWithoutPlan = getCallValueWithoutPlan(price, callTime);

    return res.json({ valueWithPlan, valueWithoutPlan });
  },
};
