var Car = (function () {
    function Car(position) {
        this.position = position;
    }
    //Fecthes the position of the car
    Car.prototype.getPosition = function () {
        return "Position of car is : " + this.position;
    };
    Car.prototype.start = function () {
        if (this.position === "still") {
            return "car is started";
        }
        else {
            return "car is moving";
        }
    };
    //interface method implemented in the class
    Car.prototype.drive = function () {
        return "car must be moving with a speed of 50kmph";
    };
    return Car;
}());
var carV = new Car("still"); // creates the object of car
console.log(carV.getPosition());
console.log(carV.start());
console.log(carV.drive());
