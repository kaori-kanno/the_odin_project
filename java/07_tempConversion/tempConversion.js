const convertToCelsius = function(temp) {
  new_temp = (temp - 32) * 5 / 9
  rounded = Math.round(new_temp * 10) / 10
  return rounded
};

const convertToFahrenheit = function(temp) {
  new_temp = temp * 9 / 5 + 32
  rounded = Math.round(new_temp * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
