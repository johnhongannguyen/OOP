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