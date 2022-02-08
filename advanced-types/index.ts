//Introduction to TypeScript intersection types

interface BusinessPartner {
    name:string;
    credit:number;
}

interface Identity {
    id:number;
    name:string;
}

interface Contact {
    email:string;
    phone:string;
}



type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact


let e:Employee = {
    id:100,
    name:'John Doe',
    email:'john.doe@example.com',
    phone:'123456789'
}

console.log(e);

let c:Customer = {
    credit:102,
    name:'jack',
    email:'jack@gmail.com',
    phone:'123456789'
}

console.log(c);

//Declaring intersection type

type EmployeeMoreDetails = BusinessPartner & Contact & Identity;

let employeeMoreDetails = {
    id:101,
    name:'Sam',
    credit:203,
    email:'sam@gmail.com',
    phone:'909-09-201'
}

console.log(employeeMoreDetails);


//Declaring Union type

type visitor = BusinessPartner | Contact | Identity;

let visitor = {
    id:44,
    name:'Visitor',
    email:'visitor@gmail.com'
}

console.log(visitor);
