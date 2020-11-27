import details from './Details';
import {Animal} from './Animal';
import {Dog} from './Dog';

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