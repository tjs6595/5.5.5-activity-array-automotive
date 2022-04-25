//this includes the vehicle class as a module
const vehicleModule = require("./vehicle")

class Truck extends vehicleModule.Vehicle(){
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.timeOfDay = 'dawn';
        this.lightsOn = false;
    }

    lightsOn = function(){
        if(this.timeOfDay === 'dusk' || this.timeOfDay === 'evening' || this.timeOfDay === 'night'){
            lightsOn = true;
        }
        else{
            lightsOn = false;
        }
        return lightsOn;
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

    checkService = function(){
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
let truck1 = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

truck1.lightsOn();
truck1.start();
truck1.loadPassenger(3);
truck1.stop();
truck1.checkService();

console.log(truck1)