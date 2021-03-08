// strict mode - will be more sensitive
// will do more error checking 
// if silent fail - turn into exceptions
// change behaviour of 'this'
// 'use strict'
// const Circle = function (){
//     this.draw = function (){
//         console.log(this);
//     }
// }

// const c = new Circle();
// //method call
// c.draw();

// const draw = c.draw;
// // function call -not part in the object
// draw(); // window object

// by default. body of classes are executed in the strict mode 
// prevent us from accidentally modifying the global object
class Circle {
    draw(){
        console.log(this);
    }
}

const c =  new Circle();
const draw = c.draw;
draw()// undefined 