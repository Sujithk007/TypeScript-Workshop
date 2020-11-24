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
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(Length, Area) {
        var _this = _super.call(this, Area) || this;
        _this.Length = Length;
        return _this;
    }
    Circle.prototype.area = function () {
        this.Area = 3.14 * (Math.pow(this.Length, 2));
        console.log('Area of Circle inside circle class = ' + this.Area);
    };
    return Circle;
}(Shape_1.Shape));
var obj = new Circle(12);
obj.disp();
console.log("Length = " + obj.Length);
obj.area();
obj.disp();
