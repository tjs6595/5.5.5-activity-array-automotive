//this includes the vehicle class as a module
const vehicleModule = require("./vehicle")

class Car extends vehicleModule.Vehicle(){
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger = function(num){
        if (num + this.passenger < this.maximumPassengers){
            availableRoom = true;
        }
        else{
            availableRoom = false;
        }
        return availableRoom;
    }

    start = function(){
        if (this.fuel > 0){
            start = true;
        }
        else{
            start = false;
        }
        return start;
    }

    checkService = function(mileage){
        if (this.mileage > 30000){
            this.scheduleService = true;
        }
        else{
            this.scheduleService = false;
        }
        return this.scheduleService;
    }

}

//this shows how to call from this module...
let car1 = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

car1.start();
car1.loadPassenger(3);
car1.stop();
car1.checkService();

console.log(car1)