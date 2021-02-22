function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log('drawing');
    }
}

const circle = new Circle();

//adding 

circle.location = {x:1};


const propertyName = 'center location';
circle[propertyName] = {x:1};

// delete

delete circle['location'];

// enumerating properties 
// key stores value in the object

for(let key in circle){
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

// return all the keys in the array 

let keys = Object.keys(circle);
console.log(keys);

// add a name of operator in the string 
if( 'radius' in circle)
    console.log('Circle has a radius');

// to enumerate all the members in an object
// using the for loop to get all the keys 
// and an object uses Object.key to check for the existence of the property
// or a method in an object, use in operator
