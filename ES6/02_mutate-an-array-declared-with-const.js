// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
// -------------------------------------------------------------------------------------------------------

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0]=2;
  s[1]=5;
  s[2]=7;
  // Using s = [2, 5, 7] would be invalid
  console.log(s)
  // Only change code above this line
}
editInPlace();