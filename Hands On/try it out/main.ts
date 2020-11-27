import details from './details';
import { Animal} from './animal.class'
import Dog from './dog.class';

const data_animal: details={
    height: 12,
    weight: 20,
    legs: 4
}
const cat = new Animal(data_animal);
cat.display();
const data: details = {
    height: 15,
    name: "Rokey",
    color: "Black",
    legs: 4,
    weight: 23
}
const rokey = new Dog(data);
rokey.display();
rokey.displayAll();