//Primative Type 
let age:number;
age = 21;


console.log(`age => ${age}`);

let first_name: string = 'John';
let active: boolean = true;

console.log(`first_name => ${first_name}`);

console.log(`active => ${active}`);

//Array types

let array_names:string[] = ['John' , 'Bob' , 'Lary'];

let array_scores:number[] = [4.5 , 3.5 , 5];

console.log(`array_names => ${array_names}`);

console.log(`array_scores => ${array_scores}`);

array_names.forEach(name => {
    console.log(name);    
});

array_scores.forEach(score => {
    console.log(score);
});


//Object Type

let programmer : {
    name:string,
    age:number,
    position:string,
    salary:number,
    experience:number
};

programmer = {
    name:'Jakhongir',
    age:21,
    position:'Strong Junior',
    salary:400,
    experience:2
}

//Function arguments & return types

let greeting:(name:string) => string;

greeting = (name:string) => {
    return `Hi ${name}`;
}

console.log(greeting('Jakhongir'));



