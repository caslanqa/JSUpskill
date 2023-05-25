// Order of operators in JS is same with JAVA
console.log(4+4*(-1)-8/2);
// assignment operator
let x = 5;
x+=5;
console.log(x); //10

// comparison: similar to Java. But there is some diff points

let one = 1;
let one2 = 1;

let one_str = '1';
let one_str2 = '2';

console.log(one == one2); //looking value
console.log(one_str == one_str2);
console.log(one == one_str); //looking value
console.log(one === one_str); //looking value and data type together



//logical operators same like Java. We have only short circuit &&(and), ||(or) operators