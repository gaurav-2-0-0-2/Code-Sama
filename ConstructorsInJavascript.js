///

// function Dog(name) {
//   this.name = name;
// }

// function Bird(name){
//   this.name = name;
// }


// let beagle = new Dog("Tommy");
// let sanam = new Bird("Helen");

// // Only change code below this line
// function joinDogFraternity(candidate) {
//     if(candidate.constructor === Dog){
//       return true
//     }else{
//       return false
//     }
// }

// print(joinDogFraternity(beagle));
// print(joinDogFraternity(sanam));

////////////////////////////////////////////////////////////////////////////////////////

// Change the prototype to a new object 

// function Dog(name){
//   this.name = name;  // own property
// }  // This is a constructor

// prototype property of Dog

// Dog.prototype = { // This is an object
//   constructor: Dog,
//   numLegs: 4,
//   eat: function(){
//       print("Hum Hum Hum");
//   },
//   describe: function(){
//       print("My name is "+ this.name);
//   }
// }
// let dog1 = new Dog("Tommy");
// print(dog1.constructor === Dog);



// dog1.describe()




//////////////////////////////////////////////////////////////////////////////////////////////

// function Animal() {
    
// }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     print("nom nom nom");
//   },
// }

// function Dog(name) { 
//     this.name = name; 
// }

// // Only change code below this line

// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog("Tommy");

// beagle.eat();

////////////////////////////////////////////////////////////////////////////////

function Animal(){ }

Animal.prototype.eat = function(){
 print("nom nom nom");
}

function Dog(){ }

Dog.prototype.bark = function(){
  print("Woof!");
}

Dog.prototype = Object.create(Animal.prototype);


let beagle = new Dog();
beagle.bark();
beagle.eat();


















