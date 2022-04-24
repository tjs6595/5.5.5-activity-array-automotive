//this includes the vehicle class as a module
const vehicleModule = require("./vehicle")

class Car extends vehicleModule.Vehicle(){
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger = function(num){
        if (Car.passenger < Car.maximumPassengers){
            return availableRoom = true;
        }
        else{
            return availableRoom = false;
        }
    }

    start = function(){
        if (Car.fuel > 0){
            return super.start = true;
        }
        else{
            return super.start = false;
        }
    }

    scheduleService = function(mileage){
        if (mileage > 30000){
            return Car.scheduleService = true;
        }
        else{
            return Car.scheduleService = false;
        }
    }

}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)