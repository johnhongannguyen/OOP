// const circle = {
//     radius: 1,
//     location : {
//         x: 2,
//         y: 5
//     },
//     draw(){
//         console.log('draw');
//     }
// }
// circle.draw();

// factory function
function createCircle(radius,location){
    return {
        radius,
        location,
        draw(){
            console.log('draw');
        }
    }
}

const circle = createCircle(1);


// constructor function

function Circle(radius,location){
    this.radius = radius;
    this.location = location;
    this.draw = function(){
        console.log('drawing');
    }
}
Circle.call({},1); // this is exactly the line 38
Circle.apply({},[1,2,3,4]);
const another = new Circle(2);
let number = 10;
function increase(number) {
    number++;
}

increase(number);

console.log(number);

let number1 = {value:10};

function increase1(number1){
    number1.value++;

}

increase1(number1);
console.log(number1);