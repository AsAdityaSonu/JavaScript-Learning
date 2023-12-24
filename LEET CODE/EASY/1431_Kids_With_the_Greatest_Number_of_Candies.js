/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const m = Math.max(...candies);     // Spread operator

    //  arrow function
    var result = candies.map(kidCandies => kidCandies + extraCandies >= m);

    return result;
};