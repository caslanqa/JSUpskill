
//Loops (while, do-while and for) same as Java

for (let index = 0; index < 5; index++) {
    console.log(index);    
}
//console.log(index); //will throws error. Because let is block sense
console.log('--------------------------------');
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); //var type is global and function scope
console.log('--------------------------------');
let x = 0;

while (x<5) {
    console.log(x);
    x++
}
console.log('--------------------------------');
let y = 0;

do {
    console.log(y);
    ++y
} while (y<8);
console.log('--------------------------------');

