// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.
// -----------------------------------------------------------------------------------------------------------

function checkSign(num) {
  return (num>0)?"positive":(0>num)?"negative":"zero";
}

checkSign(10);