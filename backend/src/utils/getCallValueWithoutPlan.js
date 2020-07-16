const getCallValueWithoutPlan = (price, callTime) => {
  return (callTime * price).toFixed(2);
};

module.exports = getCallValueWithoutPlan;
