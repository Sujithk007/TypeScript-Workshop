import details from './details';

export class Animal implements details {
    height: number;
    weight: number;
    legs: number;

    constructor(data_animal: details) {
        this.height = data_animal.height;
        this.weight = data_animal.weight;
        this.legs = data_animal.legs;
    }

    display(): void {
        console.log("Animal class");
        console.log("Height= " + this.height);
        console.log("Weight= " + this.weight);
        console.log("Legs= " + this.legs);
    }
}
