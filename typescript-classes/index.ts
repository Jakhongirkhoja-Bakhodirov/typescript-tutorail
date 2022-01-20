class Person {
    firstName:string;
    lastName:string;
    age:number;
    
    private salary:number;
    protected job:string;


    constructor(firstName:string,lastName:string,age:number,salary:number,job:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
        this.job = job;
    }

    setters(salary:number) {
        this.salary = salary;
    }

    getters() {
        return this.salary;
    }

    getFullName():string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const somebody = new Person('Bob' , 'Mark' , 23 , 300 , 'software engineer');

console.log(somebody.getFullName());

console.log(somebody.getters());

somebody.setters(2000);

console.log(somebody.getters());