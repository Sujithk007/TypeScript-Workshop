"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(data_animal) {
        this.height = data_animal.height;
        this.weight = data_animal.weight;
        this.legs = data_animal.legs;
    }
    Animal.prototype.display = function () {
        console.log("Animal class");
        console.log("Height= " + this.height);
        console.log("Weight= " + this.weight);
        console.log("Legs= " + this.legs);
    };
    return Animal;
}());
exports.Animal = Animal;
