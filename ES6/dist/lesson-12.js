'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function add(x, y) {
    return x + y;
}

//let add (error)
var add2 = function add2(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};

//если параметр один скобки можно не ставить
var square2 = function square2(x) {
    return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};

var log = function log() {
    return console.log('login');
};

/*
если в теле функции несколько строк
ставяться фигурные скобки
*/
var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};

var getPerson = function getPerson() {
    return {
        name: 'Roman'
    };
};

var getPerson2 = function getPerson2() {
    return { name: "Romich" };
};

(function () {
    console.log('LIFE');
})();

//strelochnaya function
(function () {
    return console.log('LIFE 2');
})();

console.log(add(2, 5));
console.log(typeof add2 === 'undefined' ? 'undefined' : _typeof(add2));
console.log(add2(5, 15));
console.log(square(3));
console.log(square2(4));
console.log(giveMeAnswer());
log();
console.log(multiply(2, 3));
console.log(getPerson());
console.log(getPerson2());

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

numbers.forEach(function (num) {
    sum += num;
});

console.log(sum);

sum = 0;

numbers.forEach(function (num) {
    return sum += num;
});

//перебирает каждый элемент массива
var squared = numbers.map(function (n) {
    return n * n;
});

console.log(sum);
console.log(squared);

var person = {
    name: "Bob",
    greet: function greet() {
        console.log("Hello my name is " + this.name);
        console.log(this);
    }
};

//ES5
var person2 = {
    name: "Djon",
    greet: function greet() {
        var that = this;
        window.setTimeout(function () {
            console.log("I is " + that.name);
            console.log(this);
            console.log(that);
        }, 2000);
    }
};

//ES6
var person3 = {
    name: "Maks",
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            console.log("My name is " + _this.name);
            console.log(_this);
        });
    }
};

person.greet();
person2.greet();
person3.greet();