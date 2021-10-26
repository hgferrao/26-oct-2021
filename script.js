/*
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false

function lessThanOrEqualToZero(num) {
  return num >= 0 ? true : false;
}
console.log(lessThanOrEqualToZero(-5));
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
  return a + b < 100 ? true : false;
}
console.log(lessThan100(5, 57));
console.log(lessThan100(77, 30));
console.log(lessThan100(0, 59));
console.log(lessThan100(78, 35));
console.log(lessThan100(63, 11));
console.log(lessThan100(37, 99));
console.log(lessThan100(52, 11));
console.log(lessThan100(82, 95));
console.log(lessThan100(17, 44));
console.log(lessThan100(74, 53));
console.log(lessThan100(3, 77));

function isSeven(x) {
  return x === 7 ? true : false;
}
console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
  return str1.length == str2.length ? true : false;
}
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));
console.log(comp("meow", "woof"));
console.log(comp("jrnvjrnnt", "cvjknfjvmfvnfjn"));
console.log(comp("jkvnjrt", "krnf"));
console.log(comp("Facebook", "Snapchat"));

// Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
  return s == "" ? true : false;
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("!?@&"));

// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.


function intWithinBounds(n, lower, upper) {
  if (!Number.isInteger(n)) return false;
  return n >= lower && n < upper ? true : false;
}
console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(4.5, 3, 8));
console.log(intWithinBounds(-5, -10, 6));
console.log(intWithinBounds(4, 0, 0));
console.log(intWithinBounds(10, 9, 11));
console.log(intWithinBounds(6.3, 2, 6));
console.log(intWithinBounds(6.3, 2, 10));
console.log(intWithinBounds(9, 2, 3));
console.log(intWithinBounds(9, 9, 9));
console.log(intWithinBounds(-3, -5, -2));
console.log(intWithinBounds(-3, -5, -3));
console.log(intWithinBounds(-3, -10, 10));
console.log(intWithinBounds(0, -3, 3));
console.log(intWithinBounds(0, 0, 1));
console.log(intWithinBounds(7, 7, 12));


//Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
//The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

function areaOfCountry(name, area) {
  let totalArea = 148940000;
  return `${name} is ${((area * 100) / totalArea).toFixed(
    2
  )}% of the total world's landmass`;
}
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("Iran", 1648195));
console.log(areaOfCountry("India", 3287590));
console.log(areaOfCountry("China", 9706961));
console.log(areaOfCountry("Yemen", 527968));
console.log(areaOfCountry("Switzerland", 41284));

///////////////////////////// do it///////////
// function testJackpot(result) {
//   return result.every((el) => el);
// }
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));

// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
function reverseAndNot(i) {
  const str = i.toString().split("").reverse().join("");
  return str + i;
}
console.log(reverseAndNot(123)); // 321123
console.log(reverseAndNot(496)); //694496
console.log(reverseAndNot(298));
console.log(reverseAndNot(532));
console.log(reverseAndNot(211));
console.log(reverseAndNot(602));
console.log(reverseAndNot(804));
console.log(reverseAndNot(195));
console.log(reverseAndNot(271));
console.log(reverseAndNot(449));
console.log(reverseAndNot(938));
console.log(reverseAndNot(257));
console.log(reverseAndNot(205));
console.log(reverseAndNot(345));
console.log(reverseAndNot(365));
console.log(reverseAndNot(112));
console.log(reverseAndNot(792));
console.log(reverseAndNot(777));
console.log(reverseAndNot(759));
console.log(reverseAndNot(239));
console.log(reverseAndNot(469));
console.log(reverseAndNot(953));
console.log(reverseAndNot(574));
console.log(reverseAndNot(155));
*/
