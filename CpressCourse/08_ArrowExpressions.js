//classic usage
let x = function (a) {
    return 5*a;
}

//After ES6
let y = a => 5*a;

console.log(y(3));


// map function comes with arrowExp

let arr = [5,10,6,3]

arr = arr.map(x => x*2)

console.log(arr);