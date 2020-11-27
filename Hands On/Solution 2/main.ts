class Animal{
  height:number;
  weight:number;
  legs:number;

  constructor(height:number, weight:number, legs:number){
    this.height = height;
    this.weight = weight;
    this.legs = legs;
    console.log("hello animal");
  }

  display():void{
      console.log("Height: "+ this.height);
      console.log("Weight: "+ this.weight);
      console.log("Legs: "+ this.legs);
      
  }
}

class Dog extends Animal{
  name:string;
  color:string;

  constructor(name:string,color:string,height:number, weight:number, legs:number){
    super(height,weight,legs);
    this.name = name;
    this.color = color;  
    console.log("hello dog");  
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
let rocky = new Dog('Rokey','black',3.4,20,4);
rocky.displayAll();