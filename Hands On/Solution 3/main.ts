interface details {
  height: number;
  weight: number;
  legs: number;
  name: string;
  color: string;
}

class Animal{
  height:number;
  weight:number;
  legs:number;

  constructor(height:number, weight:number, legs:number){
    this.height = height;
    this.weight = weight;
    this.legs = legs;
  }

  display():void{
      console.log("Height: "+ this.height);
      console.log("Weight: "+ this.weight);
      console.log("Legs: "+ this.legs);
      
  }
}

class Dog extends Animal implements details{
  name:string;
  color:string;

  constructor(data:details){
    super(data.height,data.weight,data.legs);
    this.name = data.name;
    this.color = data.color;  
  }

  displayAll():void{
    console.log("****This is Dog class****");
    console.log("Name: "+this.name);
    console.log("color: "+this.color);
    console.log("Height: "+this.height);
    console.log("Weight: "+this.weight);
    console.log("Legs: "+this.legs);
  }
}


let cat = new Animal(2,10,4);
cat.display();
const dog_details: details = { 
  name: 'Rokey', 
  color:'black',
  height: 3.4,
  weight: 20,
  legs: 4
}
let rocky = new Dog(dog_details);
rocky.displayAll();