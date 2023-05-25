// no acces modifiers, no method overloading/overriding/overhiding

function add(a,b) {
    console.log('Total is: '+(a+b));
}
add(2,5)
add(6,8,7,3) // ignores after 2nd param
function multiply(a,b) {
    return a*b;
}

console.log(multiply(10,50));


/**
 * 1. You can pass as an arg to other functions
 * 2. You can return a function from a function
 * 3. You can store a function into a variable*******
 */

let divide = function (a,b) {
    return a/b;
}

console.log(divide(30,5));

let functionVariable = divide;

console.log(functionVariable(60,32));