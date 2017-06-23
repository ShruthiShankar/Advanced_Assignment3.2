//interface which has only one method to be implemented by the extending class
interface Drivable {
	drive() : string;
}


class Car implements Drivable{
    position: string;
    constructor(position: string) {
        this.position = position;
	}

	//Fecthes the position of the car
	getPosition(){
		return `Position of car is : ` + this.position;
	}


	start(){
		if(this.position === "still"){
		 return `car is started`;
		} else {
			return `car is moving`;
		}
	}

	//interface method implemented in the class
	drive(){
		return `car must be moving with a speed of 50kmph`;
	}

}

let carV = new Car("still");	// creates the object of car

console.log(carV.getPosition());

console.log(carV.start());

console.log(carV.drive());