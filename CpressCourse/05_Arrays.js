/**
 * There is no collections in JS. There is only Arrays and Maps
 * No fixed size. It is flexible
 * There are 2 important Brackets in JS
 * 1. [] -> creates array
 * 2. {} -> creates object
 * 
 * we can add multiple different type of data in one array
 */

let scores = new Array(); //creates empty array
let scores2 = []; //creates empty array
let scores3 = new Array(10); //creates an array with size 10

let mixedArray = new Array(3,'str',true);
let sampleArray = ['orange','red','blue'];

sampleArray.push('white') // add element to last index of array
console.log(sampleArray);

console.log('-----------');

sampleArray.unshift('green') // add element to first index of array
console.log(sampleArray);

console.log('-----------');

console.log(sampleArray.pop());// returns last element of array and deletes it from array
console.log(sampleArray);

console.log('-----------');

for (let index = 0; index < sampleArray.length; index++) {
    console.log(sampleArray[index]);    
}
console.log('-----------');
for (let element of sampleArray) {
    console.log(element);
}
console.log('-----------');
sampleArray.forEach(element => {
    console.log(element);
});