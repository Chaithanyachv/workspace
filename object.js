let a = [{ "name": "Sham", "age": 25, "salary": 30000 },
{ "name": "HareRam", "age": 10, "salary": 60000 },
{ "name": "Ram", "age": 30, "salary": 90000 }
];

//Print all the person names from the array.
let names = a.map(mapNames)
function mapNames(value) {
    return value.name
}

//Print all age to the new array.(use map method)
let ages = a.map(mapAges)
function mapAges(value) {
    return value.age;
}
console.log(`person names = `, names)
console.log(`person age = `, ages)

//Print the persons based on  names in the ascending order.
let ascending = a.sort(ascendingOrder);
function ascendingOrder(o1, o2) {
    return o1.name.localeCompare(o2.name)
}
console.log(ascending);

//Print the persons based on the salary in the descending order.
let descending=a.sort(descendingOrder);
function descendingOrder(o1,o2){
    return o2.salary-o1.salary;
}
console.log(descending);
// Print the persons based on the age in the descending order.
let descending1=a.sort((descendingOrder1)=>(o1,o2),o2.age-o1.age)


//Print the persons who salary is greater than 50000
let grather=a.filter(greatherSalary)
    function greatherSalary(value){
        return value.salary>=50000;
}
console.log(grather)

//Print the persons whose age is lessthan 20
let age=a.filter(agePerson);

function agePerson( value){
    return value.age<=20
}
console.log(age)