// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
// ------------------------------------------------------------------------------------------------

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => {
  return (max + min) / 2;
};
// Only change code above this line

const result = half(stats);
console.log(result); // Output: 28.015
