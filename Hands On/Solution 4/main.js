"use strict";
exports.__esModule = true;
var Animal_1 = require("./Animal");
var Dog_1 = require("./Dog");
var cat = new Animal_1.Animal(2, 10, 4);
cat.display();
var dog_details = {
    name: 'Rokey',
    color: 'black',
    height: 3.4,
    weight: 20,
    legs: 4
};
var rocky = new Dog_1.Dog(dog_details);
rocky.displayAll();
