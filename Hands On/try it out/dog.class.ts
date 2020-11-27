import details from './details';
import { Animal } from './animal.class'

export default class Dog extends Animal {
    name: string;
    color: string;

    constructor(datas: details) {
        super(datas);
        this.name = datas.name;
        this.color = datas.color;
    }


    displayAll(): void {
        console.log("Dog Class");
        console.log("Name= ", this.name);
        console.log("Color= ", this.color);
        console.log("Height= " + this.height);
        console.log("Weight= " + this.weight);
        console.log("Legs= " + this.legs);
    }
}
