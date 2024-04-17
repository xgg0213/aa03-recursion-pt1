/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(n) {
  // Your code here 
  if (n < 0) return null; 
  // where does the null go? it simply gets popped out of the stack, it's more of a stopping point
  // the null is added to the evaluation down, and null + any number = any number
  return n + sumToN(n-1);

  // version 2: write it out with sum & n = n-1
  // this requires a default parameter in the function setup: sumToN(n, sum = 0)
  // the benefit of a default parameter is to have a place temporarily hold the value of sum
  // sum += n;
  // n = n-1;
  // return sum + sumToN(n)

  //question: how to write it out like sum += n?
}

debugger
console.log(sumToN(5))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
