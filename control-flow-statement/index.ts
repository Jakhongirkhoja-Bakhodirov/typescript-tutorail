//if-else
// const max = 100;
// let counter = 100;

// if (counter < max) {
//     counter++;
// } else {
//     counter = 1;
// }

// console.log(counter);

let discount: number = 32;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else if (discount > 10) {
    discount = 15; // 15%
} else {
    throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `)

//A simple switch-case example
let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}

//A group swtich-case example

// change the month and year
let month = 1,
    year = 2022;

let day = 10;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);

//A simple for example
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

//Optional block
// let i = 0;
// for(; i < 5 ; i++) {
//     console.log(i);
// }

// let j = 0;
// for (; ;) {
//     console.log(j);
//     j++;
//     if (j > 9) break;
// }

//While Loop
// let counter = 0;

// while (counter < 5) {
//     console.log(counter);
//     counter++;
// }

//do-while loop
// let i = 0;

// do {
//     console.log(i);
//     i++
// } while (i < 10);

//Break To terminate a loop
// let products = [
//     { name: 'phone', price: 700 },
//     { name: 'tablet', price: 900 },
//     { name: 'laptop', price: 1200 }
// ];

// for (var i = 0; i < products.length; i++) {
//     if (products[i].price == 900)
//         break;
// }

// // show the products
// console.log(products[i]);

//Use break statement to break a switch
// let salary = [
//     { position: 'junior', price: 700 },
//     { position: 'middle', price: 900 },
//     { position: 'senior', price: 1200 }
// ];

// let discountSalary = 0;
// let juniorSalary = salary[1];

// switch (juniorSalary.position) {
//     case 'junior':
//         discount = 5;
//         break;
//     case 'middle':
//         discount = 10;
//         break;
//     case 'senior':
//         discount = 15;
//         break;
// }

// console.log(`There is a ${discount}% on ${juniorSalary.position}.`);

//Continue statement
// for (let index = 0; index < 9; index++) {
    
//     // if index is odd, skip it
//     if (index % 2)
//         continue;

//     // the following code will be skipped for odd numbers
//     console.log(index);
// }

let index = 9;
let count = 0;

do {
    index += 1;

    if (index % 2)
        continue;
    count += 1;
} while (index < 99);


console.log(count); // 45