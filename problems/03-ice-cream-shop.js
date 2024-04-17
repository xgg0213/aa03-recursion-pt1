/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


function iceCreamShop(flavors, favorite) {
  // Your code here 
  if (flavors.length === 0) return false;
  if (flavors.pop() === favorite) return true; //this is different from 01 where the evaluation continues until the 1st condition is satisfied
  return iceCreamShop(flavors, favorite);

  //question: why this time only 1 return works: i.e when return true runs, the returned value is stored to false, even when return false is finally met, the returned value stays true
  // if no evaluation is happening with recursive step (in addition to a simple return),
  // then the final answer stops when true happens; or
}

console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon'));
debugger
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
