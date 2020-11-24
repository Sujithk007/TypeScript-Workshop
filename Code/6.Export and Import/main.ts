import {Shape} from './Shape';

class Circle extends Shape { 
   Length:number;

   constructor(Length:number, Area?:number){
      super(Area);
      this.Length=Length;
   }
r̥
   area():void{
      this.Area= 3.14*(this.Length**2);
      console.log('Area of Circle inside circle class = ' + this.Area);
   }
}
  
var obj = new Circle(12); 
obj.disp();
console.log("Length = " + obj.Length);
obj.area();
obj.disp();