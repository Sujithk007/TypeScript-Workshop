"use strict";
exports.__esModule = true;
var animal_class_1 = require("./animal.class");
var dog_class_1 = require("./dog.class");
var data_animal = {
    height: 12,
    weight: 20,
    legs: 4
};
var cat = new animal_class_1.Animal(data_animal);
cat.display();
var data = {
    height: 15,
    name: "Rokey",
    color: "Black",
    legs: 4,
    weight: 23
};
var rokey = new dog_class_1["default"](data);
rokey.display();
rokey.displayAll();
