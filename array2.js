// 7. Use the MDN Documentation to determine which of these methods would be best for reversing elements in this array:

// const reverseMe = ["h", "e", "l", "l", "o"];
// pop()
// push()
// reverse()
// shift()
// splice()

// What would be the best array method to sort the elements in this array:

// const sortMe = [2, 1, 10, 7, 6];
//    1.	concat()
//    2. join()
//    3. unshift()
//    4. sort()
//    5. organize()

// Consider the following array, removeFirstElement:
// var removeFirstElement = ["a", "b", "c"];
// Let's say that you want to modify (i.e., mutate) removeFirstElement by removing the first element within it. Which method(s) could you use?
//    1.	pop()
//   2. push()
//   3. shift()
//   4. unshift()
//   5. splice()
// slice()

// What method would be best for changing this array into a string?
// const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
// join()
// concat()
// fill()
// copyWithin()

// To Reverse the Array
let reverseMe = ["h", "e", "l", "l", "o"];
//   console.log(reverseMe);
  reverseMe=reverseMe.reverse();
 console.log(reverseMe);

//  To Sort

const sortMe = [2, 1, 10, 7, 6];
console.log(sortMe.sort());
// To remove first element
var removeFirstElement = ["a", "b", "c"];
removeFirstElement.shift();
console.log(removeFirstElement);
// To Convert Array to String
const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];

console.log(turnMeIntoAString.join());

// 8. Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

// const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
// /*
// * Programming Quiz: Another Type of Loop
// * QUIZ REQUIREMENTS
// * Use the existing `test` variable and write a `forEach` loop
// * that adds 100 to each number that is divisible by 3.
// *
// * Things to note:
// *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
// *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
// *  - Outside the loop, you can use `console.log` to verify the `test` variable
// */

// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//    19, 300, 3775, 299, 36, 209, 148, 169, 299,
//    6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// Write your code here

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
 ];
 
 test.forEach((element,index, test) =>{
   
 
     if (element%3===0){
         test[index]=element+100;
 //       test+= 100;
      
     }
     else
     {
         test[index]=element;
 
 
     }
     return test;
 
     
 
 
 
     })
       console.log(test);



       
// 9. Use the map() method to take the array of bill amounts shown below, and create a second array of numbers called totals that shows the bill amounts with a 15% tip added.

// const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
// Print out the new totals array using console.log.
// TIP: Check out the toFixed() method for numbers to help with rounding the values to a maximum of 2 decimal places. Note, that the method returns a string to maintain the "fixed" format of the number. So, if you want to convert the string back to a number, you can cast it or convert it back to a number:
// Number("1"); // returns 1
/*
* Programming Quiz: I Got Bills
*
* Use the .map() method to take the bills array below and create a second array
* of numbers called totals. The totals array should contains each amount from the
* bills array but with a 15% tip added. Log the totals array to the console.
*
* For example, the first two entries in the totals array would be:
*
* [57.76, 21.99, ... ]
*
* Things to note:
*  - each entry in the totals array must be a number
*  - each number must have an accuracy of two decimal points
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `bills` and `totals`
* - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
* - Your `totals` array should be an array of numbers
* - Your code should print the `totals` array to the console
* - The output must be as described above.
*/
const bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
 ];
 
 let billsWithTip= bills.map(x =>{
     let totals= x + (x*0.15);
     totals=Number(totals.toFixed(2));
     return totals;
 
 
 
 
 })
 
 console.log(billsWithTip);

 
// 10. Use a nested for loop to take the numbers array below and replace all of the values that are divisible by 2 (even numbers) with the string "even" and all other numbers with the string "odd".


// const numbers = [
//    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];
/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */
// your code goes here


const numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
 ];
 
 
 
 
 for (let i = 0; i < numbers.length; i++) {
 
 for (let j = 0; j < numbers[i]
   .length; j++) {
 
   if (numbers[i][j] % 2 === 0) {
 
    numbers[i][j] = "even";
 
   } else {
    numbers[i][j] = "odd";
 
   }
 }
 }
 console.log(numbers); 
 
 
     
 
 




