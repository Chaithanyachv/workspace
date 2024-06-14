//Generate the 4 digit OTP code
let c = Math.random() * 10000; //math.random() gives the ramdon values
c = c.toFixed(0); // toFixed(0) give the exact values
console.log("4 digit otp:-", c);

//Generate the Aadhaar Number
let Aadhaar = Math.random() * 1000000000000; //math.random() gives the ramdon values
Aadhaar = Aadhaar.toFixed(0); // toFixed(0) give the exact values
console.log("Aadhaar number:-", Aadhaar);

//Find the biggest number between 2 variables.
let Input1 = 250;
let Input2 = 340;
let value = Math.max(Input1, Input2);
console.log(" biggest number ", value);

//Find the smallest number between 2 variables.
let Input3 = 250;
let Input4 = 340;
let minimum = Math.min(Input3, Input4);
console.log(" smallest number", minimum);

//Find the difference between the biggest number and smallest number in the below numbers.
let a = 250;
let b = 340;
let d = 34;
let max = Math.max(a, b, d);
let min = Math.min(a, b, d);
let difference = max - min;
console.log(
    "difference between the biggest number and smallest number",
    difference
);

//round,ceil,floor-----
let number = 99.5;
let roundedNumber = Math.round(number);
let ceilNumber = Math.ceil(number);
let floorNumber = Math.floor(number);
console.log("oiginal number", number);
console.log("roundedNumber", roundedNumber);
console.log("ceilNumber", ceilNumber);
console.log("floorNumber", floorNumber);

// ///take value from the user
// let value1=prompt("enter a number");         //Text to number we use parseint,parsefloat
// let value2=30;
// let total=parseInt(value1)+value2;
//  console.log("total",total);

////---------------------BOOLEAN ----------------- it shows only true or false
let I = 0; //apart from 0 any positive or negative value is true
let k = Boolean(I); //apart from "" any string value it shows true
console.log(k);


let variable = 10 / "a";
let Status = Boolean(variable);
console.log(Status);

//Calculate the sum of the numbers for the given string?
  let z = "254 1 2 568";
  let x=z.split(" ");
  let p=x.reduce((acc, curr) => acc + parseInt(curr), 0);
  
  console.log(`total = ${p}`)
//---------------------DATE---------------------------- DATE TO STRING-----WE USE toString()---------------
//print the today date in dd-mm-yyyy 
let date=new Date();
let day=date.getDate()-1;
let month=date.getMonth()+1;
let year=date.getFullYear();
console.log(day,"-",month,"-",year)


