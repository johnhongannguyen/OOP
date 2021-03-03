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
    this.move = function() {
        console.log('move');
    }
}

const c1 = new Circle(1);
// Prototype members 
Circle.prototype.draw = function() {

    console.log('drawing');
}

c1.draw();

// return only instance members , not prototype members 
console.log(Object.keys(c1));
const c2 = new Circle(1);


for(let key in c1)
// return all the instances and prototypes
// c1.hasOwnProperty('radius'); -  return 'true'
//c1.hasOwnProperty('draw'); -  return 'false' because of prototype property
console.log(key);

// Avoid extending the built in Object
// don't modify objects you don't own 
// because somewhere else you might be using 
// there might be a code that dependent 