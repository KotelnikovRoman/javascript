'use strict';

function greet(greeting, name) {
    console.log(greeting + ' ' + name);
}

greet('Hi', 'Bill');
greet('Hi'); //Hi undefined
greet(undefined, 'Bill'); //undefined Bill

//не правильно
function greet2(greeting, name) {
    if (greeting !== undefined && name !== undefined) {
        console.log(greeting + ' ' + name);
    } else if (greeting === undefined && name !== undefined) {
        console.log('Hello ' + name);
    } else if (greeting !== undefined && name === undefined) {
        console.log(greeting + ' friend');
    } else {
        console.log('Hello friend');
    }
}

//правильно
function greet3() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ' ' + name);
}

greet3();

function summ() {
    console.log(arguments instanceof Array);
    var sum = 0;
    Array.prototype.forEach.call(arguments, function (value) {
        sum += value; //работает со строками и числами
    });
    console.log(sum);
}
summ(1, 2, 3, 5, 10);

function sum() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    console.log(values instanceof Array);
    var sum = 0;
    values.forEach(function (value) {
        sum += value;
    });
    console.log(sum);
}
sum(1, 5, 3, 2);

function sum2() {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
    }

    console.log(values.reduce(function (prevValue, currentValue) {
        return prevValue + currentValue;
    }));
}

sum2(1, 2, 3, 4);