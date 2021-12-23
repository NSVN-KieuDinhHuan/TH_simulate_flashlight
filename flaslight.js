class Battery{
    _energy;
 constructor(energy) {
     this._energy = energy;
 }

    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }
    decreaseEnergy(){
        if (this._energy > 0) {
            this._energy--;
        }
    }
}

class FlashLamp{
    constructor(battery) {
        this._battery = battery;
    }

    set battery(value) {
        this._battery = value;
    }

    get battery() {
        return this._battery;
    }


    getBatteryInfo() {
        return this._battery.energy;
    };


    light() {
        if(this.status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    }
    turnOn (){
        this.status = true;
    }

   turnOff () {
        this.status = false;
    }
}