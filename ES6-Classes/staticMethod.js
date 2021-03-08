// static method vs instance method
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    //instance method
    // this method is available on an instance of class- an object
    draw(){

    }
    //static method is available on the class itself
    // not object instance
    // use them to create utility function - not specific to a given object
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{"radius" : 1}');
console.log(circle);