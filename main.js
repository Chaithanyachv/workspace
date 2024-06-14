//1. Find the addition of 2 numbers
let a = 23;
let b = 54;
sum = a + b;
console.log("sum:-", sum);

//2. Find the substraction of 2 numbers
var c = 34;
var d = 45;
sub = c - d;
console.log("subtraction:-", typeof sub, sub);

//3. Find the multiplication of 2 numbers
const e = 23;
const f = 67;
const mul = e * f;
console.log("multiplication:-", typeof mul, mul);

//4. Find the division of 2 numbers
input1 = 33;
input2 = 77;
division = input1 / input2;
console.log("division:-", typeof division, division);

//5. Find the average of 2 numbers
let input3 = 123;
let input4 = 34;
let average = (input3 + input4) / 2;
console.log("average:-", average);

//6. Take 5 variables for the student marks and find the average marks
let sub1 = 50;
let sub2 = 70;
let sub3 = 60;
let sub4 = 40;
let sub5 = 80;
let sub6 = 55;
avg = (sub1 + sub2 + sub3 + sub4 + sub5 + sub6) / 6;
console.log("average of 6 values:-", avg);

//7. Take 5 variables for the student marks and find the percentage
let sub7 = 50;
let sub8 = 70;
let sub9 = 60;
let sub10 = 40;
let sub11 = 80;
let sub12 = 55;
per = (sub7 + sub8 + sub9 + sub10 + sub11 + sub12) / 600;
let final = per * 100;
console.log(" percentage of 6 values:-", final);

/*8. Calculate the interest of money. Below are the parameters.
  total amount given is 1lakh
  interest rate is 24% per anum.
  What is the interest for the 1 year.*/
let princpal = 100000;
let rate = 24;
let year = 1;
let intrest = (princpal * rate * year) / 100;
console.log("Intrest:-", intrest);

//9. Swap the 2 numbers.
let inputa = 20;
let inputb = 30;
temp = inputa;
inputa = inputb;
inputb = temp;
console.log(inputa, inputb);

///-----function method
function add(a, b) {
  let c = a + b;
  console.log(c);
}
add(12, 30);

function substraction(d, e) {
  let f = d - e;
  console.log(f);
}
substraction(12, 30);

//12 Banana cost is 240RS.  Write a function to calculate cost of 3 Bananas?

function bananaCost() {
  let a = 12;
  let b = 240;
  let c = b / a;
  let d = c * 3;
  console.log("cost of 3 bananas:-", d);
}
bananaCost();
// Write a function Find the time for travel.
//  For example, Travelling with 50KMPH and how much time it will take to reach the 30KM?
//time=distance /speed

function timeForTravel() {
  speed = 50;
  distance = 30;
  time = distance / speed;
  console.log("time for travel:", time, "hours");
}
timeForTravel();

//1 Leo brand Shirt cost is 2500. In pongal offer they are giving 20% discount then what is the cost of the shirt after the discount?

//discount cost=original cost(originalcost-discount percentage/100)---formula

function discountCost(){
  originalCost=2500;
  discountPercentage=20;
  prize=originalCost-(originalCost*discountPercentage/100);
  console.log("discount prize of shirt:",prize)
}
discountCost()

//Online React course fees after discount of 30% is 12000. Then what is the original price of course?
//originalprice=discountprice/(1-discountpercentage/100)--------formula
function originalPrice(){
  discountPrice=1200;
  discountPercentage=30;
  price=discountPrice/(1-discountPercentage/100)
  console.log("original price of shirt:",price.toFixed(2))
}
originalPrice()

