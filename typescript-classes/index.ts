// class Person {
//     firstName:string;
//     lastName:string;
//     age:number;
    
//     private salary:number;
//     protected job:string;

// q

//     constructor(firstName:string,lastName:string,age:number,salary:number,job:string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.salary = salary;
//         this.job = job;
//     }

//     setters(salary:number) {
//         this.salary = salary;
//     }

//     getters() {
//         return this.salary;
//     }

//     getFullName():string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const somebody = new Person('Bob' , 'Mark' , 23 , 300 , 'software engineer');

// console.log(somebody.getFullName());

// console.log(somebody.getters());

// somebody.setters(2000);

// console.log(somebody.getters());
// class Person {
//     private _age:number;
//     private _firstName:string;
//     private _lastName:string;

//     constructor(firstName:string , lastName:string , age:number) {
//         this._age = age;
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     public get age() {
//         return this._age;
//     }

//     public set age(theAge:number) {
//         if(theAge <= 0 || theAge >= 200) {
//             throw new Error('The age is invalid');
//         }
//         this._age = theAge;
//     }

//     public getFullName():string {
//         return `${this._firstName} ${this._lastName}`;
//     }
// }

// let person = new Person('Bob' , 'Rice' , 20);


// console.log(person.age);

// person.age = 21;

// console.log(person.getFullName());

// console.log(person.age);

//TypeScript Classes Inheritance
class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

const person = new Person('James' , 'Bond');

console.log(person.describe());

class Employee extends Person {
    constructor(firstName:string , lastName:string , private jobTitle:string) {
        // call the constructor of the Person class:
        super(firstName,lastName);
    }

    //You can also override a paren class methods
    describe(): string {
        return super.describe() + ` I'm a ${this.jobTitle}`;
    }
}

const employee = new Employee('John' , 'Doe' , 'Full Stack Developer');

console.log(employee.getFullName());

console.log(employee.describe());



