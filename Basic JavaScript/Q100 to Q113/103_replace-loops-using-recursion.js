// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
// ---------------------------------------------------------------------------------------------

function sum(arr, n) {
  // Only change code below this line
  //  Base case: if n is 0, return 0
    if (n == 0){
        return 0;
        }
    //  Recursive case: sum the first n-1 elements and add the nth element
    else{
        return sum(arr, n-1) + arr[n-1];
    }


  // Only change code above this line
}