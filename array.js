//Create the 2 arrays with each data type and print the values from each array.
let a = [23, 45, 67, 89, 0];
console.log("numbers:", a);
let b = ["string", "number", "date"];
console.log("string", b);
//write a number array and find out the minimum value.
let c = [23, 33, 44, 55, 65, 99];
let d = Math.max(...c);
console.log(d);
//Create an array as below and find the sum of the array elements.(use reduce method)
let e = [20, 50, 20, 500];
let f = e.reduce(addNumber);
console.log(f);

function addNumber(value, total) {
  return value + total;
}
//Filter the array whose age is greater than 18?
let g = [10, 200, 120, 40, 0, -20]; // filter the array we use this
let h = g.filter(gratherArray);
console.log(h);
function gratherArray(value) {
  return value >= 18;
}
// . Student marks are given in the below array. If all subjects marks are greater than 35,

let i = [40, 56, 89, 54, 77, 55];
let j = i.every(subjectMarks);
console.log("All subjects are - ", j); //in this every student should be pass otherwise it shows false
function subjectMarks(value) {
  return value >= 18;
}

//Students are going for a marriage. If atleast one guy has invitation, then allow for the function. Allowed student id is: 89
let k = [40, 56, 89, 54, 77, 55];
let l=k.some(marriageInvitation)
console.log("All students are allowed -",l)
function marriageInvitation(value){
    return value>79;
}

// Write a function called removeLastElement that takes an array of numbers as an argument. 
// The function should remove the last element from the array using the pop() method and return 
// the modified array.

function removeLastElement(arr){
arr.pop()
return arr;
}
console.log(removeLastElement([2,3,4,5,6,7]))

//Write a function called sortStrings that takes an array of strings as an argument. The function should use the sort() method to sort the strings in alphabetical order.
// Sample Input
//sortStrings(['banana', 'apple', 'orange']);

function sortStrings(arr){
   return arr.sort()
}
console.log(sortStrings(['banana', 'apple', 'orange']))

//Write a program to change each word in the reverse?
let text = "the reverse";
let arr=text.split("")//string to array use split method
let m=arr.reverse().join("")//array elements into a string
console.log(m)

