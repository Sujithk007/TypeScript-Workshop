import {Animal} from './Animal';
import details from './Details';

export class Dog extends Animal implements details {
    name: string;
    color: string;

    constructor(data: details) {
        super(data.height, data.weight, data.legs);
        this.name = data.name;
        this.color = data.color;
    }

    displayAll(): void {
        console.log("****This is Dog class****");
        console.log("Name: " + this.name);
        console.log("color: " + this.color);
        console.log("Height: " + this.height);
        console.log("Weight: " + this.weight);
        console.log("Legs: " + this.legs);
    }
}
