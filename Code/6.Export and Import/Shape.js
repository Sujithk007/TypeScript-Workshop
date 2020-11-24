"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    Shape.prototype.disp = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    return Shape;
}());
exports.Shape = Shape;
