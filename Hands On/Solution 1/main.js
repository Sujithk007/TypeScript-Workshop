var Animal = /** @class */ (function () {
    function Animal(height, weight, legs) {
        this.height = height;
        this.weight = weight;
        this.legs = legs;
    }
    Animal.prototype.display = function () {
        console.log("Height: " + this.height);
        console.log("Weight: " + this.weight);
        console.log("Legs: " + this.legs);
    };
    return Animal;
}());
var cat = new Animal(2, 10, 4);
cat.display();
