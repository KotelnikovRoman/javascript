function greet(greeting, name) {
    console.log(`${greeting} ${name}`)
}

greet('Hi', 'Bill');
greet('Hi'); //Hi undefined
greet(undefined, 'Bill'); //undefined Bill

//не правильно
function greet2(greeting, name) {
    if (greeting !== undefined && name !== undefined) {
        console.log(`${greeting} ${name}`);
    }
    else if (greeting === undefined && name !== undefined) {
        console.log(`Hello ${name}`);
    }
    else if (greeting !== undefined && name === undefined) {
        console.log(`${greeting} friend`);
    }
    else {
        console.log('Hello friend');
    }
}

//правильно
function greet3(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet3();

function summ() {
    console.log(arguments instanceof Array);
    var sum = 0;
    Array.prototype.forEach.call(arguments, function(value){
        sum += value;   //работает со строками и числами
    });
    console.log(sum);
}
summ(1, 2, 3, 5, 10);

function sum(...values) {
    console.log(values instanceof Array);
    let sum = 0;
    values.forEach(function(value) {
        sum += value;
    });
    console.log(sum);
}
sum(1, 5, 3, 2);

function sum2(...values) {
    console.log(values.reduce(function(prevValue, currentValue){
        return prevValue + currentValue;
    }));
}

sum2(1, 2, 3, 4);