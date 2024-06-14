// Display numbers from 1 to 50
//a. Using the for loop
// b. Using the while loop
// c. Using the do while loop.
// for(i=1;i<=50;i++){
//     console.log(i)
// }
// let i=1;
// while (i<=50) {
//     console.log(i);
//     i++;
// }
// let i=1
// do {
//     console.log(i)
//     i++
// } while (i<=50);
//Print the even numbers from 100 to 30
// for(i=100;i>=30;i--){
//     if(i % 2 === 0
//     console.log(i)
// }
// let i = 100;
// while (i >= 30) {          //condition
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i--;
// }
// let i=100
// do {
//     if(i % 2==0){
//         console.log(i)
//     }
//     i--;
// } while (i>=30);

//print odd number 1 to 50 using for,while & do while;
// for(num=1;num<=50;num++){
//     if(num % 2 !==0)
//     console.log(`odd numbers ${num}`)
// }

// let num=1
// while(num<=50){
//     if(num%2!==0){
//         console.log(num)
//     }
//     num++;
// }

// let i=1;
// do{
// if(i%2!==0){
//     console.log(i)
// }
// i++
// }
// while(i<=50)

// let a="level1";
// let b=a.split("") ////split stringformat into an array format
// let c=b.reverse().join("")///join array format to string format
// console.log(c);

// let arr=["mango",'apple',"grapes"];
// let revS=arr.reverse().join(" , ")
// console.log(revS)

//========================================set======================================
//Below is the sample array. donot print the duplicate number
// let arr = [10, 20, 30, 50, 10, 5, 5, 5];
// let arr1 = new Set(arr);
// arr1.forEach((rollset) => console.log(rollset)); //forEACH - PRINTING THE VALUES INDIVIDUALLY
// //console.log(arr1)

// let str = "chennai";
// let str1 = new Set(str);
// console.log(str1.size);
// //=========================================Map======================================
let a = [10, 20, 30, 50, 10, 5, 5, 5];
let map = new Map();
for (let g of a) {
  let z = map.get(g) || 0;
  map.set(g, z + 1);
  console.log(map);
}
// //   Here is the given string. Print each character and how many it is appearing.
// let words = "hello world ";
// let wordArr = words.split(" ");
// let wordMap = new Map();
// for (let word of wordArr) {
//   let count = wordMap.get(word) || 0;
//   wordMap.set(word, ++count);
// }
// wordMap.forEach((value,key)=>{
//    console.log(`${key} = ${value}`)
// }
// let str = "India japan US India india us japan china";
// let str2 = str.split(" ");
// let strmap = new Map();
// for (let sentance of str2) {
//   let count = strmap.get(sentance) || 0;
//   strmap.set(sentance, (count = count + 1));
// }

// strmap.forEach((value, key) => {
//   if(value==1)
//   console.log(`${key}=${value}`);
// });
