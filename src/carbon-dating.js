const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(value) {

  if (typeof value !== "string") {
    return false;
  }
  value = parseFloat(value);
  if (isNaN(value) || value <= 0 || value > 15) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / value) / K)
};
