// we have a single object base in memory 
// A prototype is just a regular object in memory 

// multilevel inheritance 
// my array derives from array base
// array base derive from object base 
// Objects created by a given constructor will have the same prototype

// circle object inherit circleBase 
// circleBase inherit objectBase 

// Constructor Prototype
// obj.__proto__ === Object.prototype
// prototype for obj is prototype for this Object Constructor 

// let array = [];
// array.__proto__ === Array.prototype

// Prototype vs Instance Members 

function Circle(radius){
    // Instance members
    this.radius = radius;

}
// Prototype members 
Circle.prototype.draw = function() {

    console.log('drawing');
}

const c1 = new Circle(1);
const c2 = new Circle(1);
