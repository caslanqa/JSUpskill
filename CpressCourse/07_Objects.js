let person = {
    firstName : 'John',
    lastName : 'Doe'
} // type is object

console.log(typeof person);
console.log(person);
console.log(person.firstName);
console.log(person.lastName);


let address = {
    'building no' : 5555,
    street : 'Keowee',
    state : 'Kentucky'
}

console.log('======================');
console.log(address);
console.log(address['building no']);// if you want to get string property value, you should use square brackets
console.log(address['street']);
console.log(address);

// add new property
console.log('======================');
person.age = 36;
console.log(person);


// delete a property
delete person.age
console.log(person);

// check a property if it exists
console.log('street' in address); //returns boolean

console.log('=========================');
// you can put arrays inside objects
let course = {
    name : 'JS',
    url : 'www.course.com',
    subjects : ['Objects','Arrays','Loops','Functions','Live Server']
}

console.log(course);
console.log('=========================');
// loop using keys of the objects

for (let key in course) {
    console.log(key+' : '+course[key]);
}


console.log('=========================');
//create an object which include array,object and function

let car = {
    make : 'Opel',
    year : 2005,
    color : 'Blue',
    engine : {
        cylinders : 4,
        size : 1.6
    },
    extras : ['AC','Sound system'],
    drive : function () {
        console.log('Using LPG for running');
    }
}

car.drive();
console.log(car.extras[1]);