"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dog = void 0;
var Animal_1 = require("./Animal");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(data) {
        var _this = _super.call(this, data.height, data.weight, data.legs) || this;
        _this.name = data.name;
        _this.color = data.color;
        return _this;
    }
    Dog.prototype.displayAll = function () {
        console.log("****This is Dog class****");
        console.log("Name: " + this.name);
        console.log("color: " + this.color);
        console.log("Height: " + this.height);
        console.log("Weight: " + this.weight);
        console.log("Legs: " + this.legs);
    };
    return Dog;
}(Animal_1.Animal));
exports.Dog = Dog;
