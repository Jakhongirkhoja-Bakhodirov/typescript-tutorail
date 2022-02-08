function getFullName(person:Person) {
    if(person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`
    }
    return `${person.firstName} ${person.lastName}`;
}

interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;   
    middleName?:String 
}

let person: Person;

person = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}
//You don't change the readonly properties,In this case person.ssn
console.log(person.ssn);

//Function Types Interface

interface StringFormat {
    (str:StringFormat , isUpper:Boolean):string
}

let format:StringFormat;

// format = function (str: string, isUpper: boolean) {
//     return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
// };

// console.log(format('hi', true));

// let lowerCase: StringFormat;
// lowerCase = function (str: string) {
//     return str.toLowerCase();
// }

// console.log(lowerCase('Hi', false));

//Class Types

interface Json {
    toJson():string
}

class Student implements Json {
    constructor(private first_name:string , private last_name:string) {
       
    }
    toJson():string {
        return JSON.stringify(this);
    }
}

const student = new Student('James' , 'Bond');

console.log(student.toJson());
