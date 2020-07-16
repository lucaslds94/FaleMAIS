const ADDITION_PERCENT_ON_VALUE = 0.1;

const getCallValueWithPlan = (price, callTime, callPlan) => {
  let valueWithPlan =
    (callTime - callPlan) * price * (1 + ADDITION_PERCENT_ON_VALUE);

  valueWithPlan = valueWithPlan > 0 ? valueWithPlan : 0;

  return valueWithPlan.toFixed(2);
};

module.exports = getCallValueWithPlan;
