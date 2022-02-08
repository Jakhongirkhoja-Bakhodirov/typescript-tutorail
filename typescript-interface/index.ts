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


interface Mailable {
    send(email:string):boolean
    queue(email:string):boolean
}

interface FutureMailable extends Mailable {
    later(email:string , after:number) : boolean
}

class Mail implements FutureMailable {
    email;
    after;
    constructor(email:string , after:number) {
        this.email = email;
        this.after = after;
    }
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }

    send(email: string): boolean {
        console.log(`Send message to ${email}`);
        return true;
    }

    queue(email: string): boolean {
       console.log(`Queue an email to ${email}`);
        return true;
    }
}

const mailToJack = new Mail('jack@gmail.com' , 12);

mailToJack.later('otherjack@gmail.com' , 12);

interface C {
    c():void
}

interface B {
    b():void
}
interface D extends B , C {
    d():void
}

//Interfaces extending classes

class Control {
    public state:boolean
}

interface StatefulControl extends Control {
    enable():void 
}

class Button extends Control implements StatefulControl {
    enable(): void {
        
    }
}


class TextBox extends Control implements StatefulControl {
    enable(): void {
        
    }
}

class Label extends Control {

}

// class Chart implements StatefulControl {
//     enable(): void {
        
//     }
// }
