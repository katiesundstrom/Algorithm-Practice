// Algorithm Practice from The Grace Hopper Program

/* RIVER SIZES
You are given a two-dimensiona array (matrix) of potentially unequal height and width containing only 0s and 1s.Each 0 represents land, and each 1 represents part of a river. A river consists of any number of adjacent 1s forming a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input matrix. Note that these sizes do not need to be in any particular order. */

function riverSizes() {}

/* MULTIPLICATIVE PERSISTENCE
Using the JavaScript language, have the function MultiplicativePersistence(num)
take the num parameter being passed which will always be a positive integer and return
its multiplicative persistence, which is the number of times you must multiply the digits
in num until you reach a single digit. For example: if num is 39 then your program should
return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. */

function multiplicativePersistence(num) {}

/* BALANCED BRACKETS
Write a function that takes in a string made up of brackets ("(", "[", "{") and other optional characters.  The function should return a boolean representing whether or not the string is balanced in regards to brackets.  A string is said to be balanced if it has as many opening brackets of a given type as it has closing brackets of that type and if no bracket is unmatched.  Note that a closing bracket cannot match a corresponding opening bracket that comes after it.  Similarly, brackets cannot overlap each other as in '[(])' */

function balancedBrackets(string) {}

/* BINARY SEARCH
Write a function that implements binary search.
Given a sorted array of numbers, locate the index of a specified value according to the following algorithm. First, identify the middle number in the array.Next determine if the value to be found is greater than, lower than, or equal to the middle number.If it is equal, you are finished, and output the index of the found value.If not, repeat the procedure for a smaller array, formed from by taking half of the given array that the specified number falls into. */

function binarySearch(sortedArray) {}

/* PAIR SUM
Given an array of numbers sorted in ascending order (least to greatest), and a
separate number (a "sum"), determine if any 2 numbers in the array add up to the sum.
Return true if any 2 different numbers within the array add up to sum.
Return false if no 2 numbers in the array add up to sum. */

function pairSum(numArray) {}
