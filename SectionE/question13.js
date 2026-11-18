// 13. Array Manipulation (push, pop, unshift, shift)
/*Start with an empty array: let marketBasket = [];. Write step-by-step code to perform the
following operations in order, then log the final array:
1. use .push() to add "Rice" , "Palm Oil" , and "Onions" to the end of the array.
2. use .pop() once to remove the last item.
3 use.unshift() to add "Pepper" and then "Salt" to the beginning of the array
4.use ..shift() once to remove the first item from the beginning of the array.
5.Log the final marketBasket array and state what elements remain inside it.
*/

// Answer


let marketBasket = [];

// 1. push Rice, Palm Oil, Onions
marketBasket.push("Rice", "Palm Oil", "Onions");
console.log("After push:", marketBasket);

// 2. pop once to remove last item
marketBasket.pop();
console.log("After pop:", marketBasket);

// 3. unshift Pepper and then Salt to beginning
marketBasket.unshift("Pepper");
marketBasket.unshift("Salt");
console.log("After unshift:", marketBasket);

// 4. shift once to remove first item
marketBasket.shift();
console.log("After shift:", marketBasket);

// 5. Final
console.log("Final marketBasket:", marketBasket);
// What remains: ["Pepper", "Rice", "Palm Oil"] - Salt was removed by shift, Onions by pop
