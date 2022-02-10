
type alphanumeric = string | number;

// typeof

function add(a:alphanumeric , b:alphanumeric) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    
    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

console.log(add(2,3));

console.log(add('2','3'));

//it will throw error

// console.log(add('2',3));

// console.log(add(2,'3'));


class Customer {
    isCreditAllow():boolean {
        //...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner = Supplier | Customer;

function signContract(partner:BusinessPartner):string {
    let message:string;

    if(partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if(partner instanceof Customer) {
        message = partner.isCreditAllow() ? 'Sign a new contract with the customer' : 'Need to evaluate further'
    }

    return message;
}


