// function Dog (dogName, dogBreed, dogAge){
//     this.name = dogName,
//     this.breed = dogBreed,
//     this.age = dogAge
// }

// var puppy = new Dog ('Raleigh', 'Chow', 1);
// console.log(puppy);

// var ridasDog = new Dog ('Tyson', 'Chihuahua', 3);
// console.log(ridasDog)

class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}!`);
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    greet() {
        console.log(`Hello ${this.name}! + ${this.level}`);
    }
}
const o1 = new Person('Quinton', 21);
const o2 = new Student('Will', '12th Grade');
const o3 = new Student('Rida', '11th Grade');

console.log(o1);
console.log(o2);
console.log(o3);

o1.greet();
o2.greet();
o3.greet();