// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
// ------------------------------------------------------------------------------------

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total=0;
let i;

for(i=0;i<myArr.length;i++){
  total=total+myArr[i];
}

console.log(total);