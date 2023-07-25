// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.
// ---------------------------------------------------------------------------------------------------------------------------------------------------

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(items=> `<li class="text-warning">${items}</li>`);
  return failureItems;

  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);