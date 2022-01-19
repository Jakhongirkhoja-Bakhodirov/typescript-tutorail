// function echo(message:string):void {
//     console.log(message.toUpperCase());
// }

// echo('something new');

// function add(a:number , b:number) {
//     return a + b;
// }

// let multiple : (a:number , b:number) => number = function(x:number , y:number) {
//     return x*y;
// }

// let multiple = function(x:number , y:number):number {
//     return x*y;
// }


// let multiple = function(x:number , y:number , z:number=2):number {
    
//     if(typeof z!=='undefined')
//         return x * y * z;
//     return x * y;
// }

// console.log(multiple(3,4));

//Rest Parametrs
// function getTotal(...numbers:number[]):number{
//     let total = 0 ;
//     numbers.forEach(element => {
//         total+=element;
//     });
//     return total;
// }

// console.log(getTotal(10,20,30));

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//    return a + b;
// }

// function sum(a: number, b: number): number;
// function sum(a: number, b: number, c: number): number;
// function sum(a: number, b: number, c?: number): number {
//     if (c) return a + b + c;
//     return a + b;
// }

// console.log(sum(2,3,3))

// console.log(add(2,3));
// console.log(add('2','3'));

