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
var animal_class_1 = require("./animal.class");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(datas) {
        var _this = _super.call(this, datas) || this;
        _this.name = datas.name;
        _this.color = datas.color;
        return _this;
    }
    Dog.prototype.displayAll = function () {
        console.log("Dog Class");
        console.log("Name= ", this.name);
        console.log("Color= ", this.color);
        console.log("Height= " + this.height);
        console.log("Weight= " + this.weight);
        console.log("Legs= " + this.legs);
    };
    return Dog;
}(animal_class_1.Animal));
exports["default"] = Dog;
