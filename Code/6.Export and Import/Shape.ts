export class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 

   disp():void { 
      console.log("Area of the circle:  "+this.Area) 
   } 
} 