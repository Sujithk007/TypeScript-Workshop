var Car = /** @class */ (function () {
    //constructor 
    function Car(Name, Engine, Seats, Color) {
        if (Color === void 0) { Color = "White"; }
        this.Name = Name;
        this.Engine = Engine;
        this.Color = Color;
        this.Seats = Seats;
    }
    //function 
    Car.prototype.disp = function () {
        console.log("Function displays Name is  :   " + this.Name);
        console.log("Function displays Engine is  :   " + this.Engine);
        console.log("Function displays Color is  :   " + this.Color);
    };
    return Car;
}());
//Create an object 
var Car1 = new Car("BMW", "XX213", 4, "Blue");
var Car2 = new Car("Ferrari", "RX2Z7", 2);
//Access the field 
console.log("Reading attribute value Engine as :  " + Car1.Engine);
//Access the function
Car1.disp();
// Car2.disp();
console.log("Ferrari Color : " + Car2.Color);
