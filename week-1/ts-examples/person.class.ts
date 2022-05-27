import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//Instantiate a new Person object.
let myName = new Person('Laura', 'Kendl');
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
