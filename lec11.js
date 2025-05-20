// Oject-oriented programming (OOP)


//objects one way
// let person = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }   
    
// };

// person.greet(); // Output: Hello, my name is John


//prototypes
// let employee = {
//     calcTax(){
//         console.log("Calculating tax for employee");
//     }
// };
// employee.calcTax(); // Output: Calculating tax for employee

// let isha = {
//     salary : 50000,
// };

// let akshay = {
//     salary : 60000,
//     calcTax(){
//         console.log("Calculating tax for akshay");
//     }
// };
// isha.__proto__ = employee;
// akshay.__proto__ = employee;
// isha.calcTax(); // Output: Calculating tax for employee
// akshay.calcTax(); // Output: Calculating tax for akshay


// Classes

// class Car {

//     constructor(brand, model, year) {
//         console.log("Car created");
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     start() {
//         console.log("Car started");
//     }

//     stop() {
//         console.log("Car stopped");
//     }

//     Color (color) {
//         this.Color = color;
//         console.log(`Car color is ${this.Color}`);
//     }

//     cardetails(){
//         console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
//     }
// }

// let myCar = new Car("Toyota", "Camry", 2020);
// let yourCar = new Car("Honda", "Civic", 2018);
// // myCar.start(); // Output: Car started
// // myCar.stop(); // Output: Car stopped
// // yourCar.start(); // Output: Car started
// // yourCar.stop(); // Output: Car stopped
// // myCar.Color("Red");
// // myCar.cardetails();
// // yourCar.cardetails();
// console.log(myCar);


// Inheritance

// class Animal{
//     start(){
//         console.log("Animal started");
//     }
    
// }

// class Dog extends Animal{

//     bark(){
//         console.log("Dog barked");
//     }
//     start(){
//         console.log("Dog started");
//     }
// }

// let myDog = new Dog();
// myDog.start(); // Output: Animal started
// myDog.bark(); // Output: Dog barked

// Super keyword

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     start() {
//         console.log("Animal started");
//     }

// }
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
//     start() {
//         super.start();
//         console.log("Dog started");
//     }   

//     details() {
//         console.log(`Name: ${this.name}, Breed: ${this.breed}`);
//     }

// }
// let myDog = new Dog("Max", "Golden Retriever");
// myDog.details(); // Output: Name: Max, Breed: Golden Retriever

// practice set

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log(`Name: ${this.name}, Email: ${this.email}`);
//     }
// }

// let user1 = new User("John Doe", "johndoe@example.com");

// user1.viewData(); // Output: Name: John Doe, Email: johndoe@example.com


// qus 2
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log(`Name: ${this.name}, Email: ${this.email}`);
//     }
// }

// class Admin extends User {

//     constructor(name,email){
//         super(name, email);
//     }
        
//      editData(newEmail) {
//         this.email = newEmail;
//         console.log(`Email updated to: ${this.email}`);
//     }
// }

// let admin = new Admin("admin", "johndoe@example.com"); 
// admin.viewData(); 
// admin.editData("admin@gmail.com"); 

// Error handling
let a = 10;
console.log(a/5); // Output: 10
try {
    console.log(a/b); // Output: Infinity
    
} catch (error) {
    console.log("Error: Division by zero");
}
console.log(a/2); // Output: NaN