var Car = /** @class */ (function () {
    //constructor 
    function Car(details) {
        this.Name = details.Name;
        this.Engine = details.Engine;
        this.Color = details.Color;
        this.Seats = details.Seats;
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
var Car1 = new Car({ Name: "BMW", Engine: "XX213", Seats: 4, Color: "Blue" });
var Car2 = new Car({ Name: "Ferrari", Engine: "RX2Z7", Seats: 4, Color: "Red" });
// let Car2 = new Car({Name:"Ferrari", Engine:"RX2Z7", Color:"Red"});
//Access the field 
console.log("Reading attribute value Engine as :  " + Car1.Engine);
//Access the function
Car1.disp();
Car2.disp();
console.log("Ferrari Color : " + Car2.Color);
