function add(x, y) {
    return x + y;
}

//let add (error)
let add2 = (x, y) => x + y;

let square = function(x) {
    return x * x;
}



//если параметр один скобки можно не ставить
let square2 = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log('login');

/*
если в теле функции несколько строк
ставяться фигурные скобки
*/
let multiply = (x, y) => {
    let result = x * y;
    return result;
}

let getPerson = function() {
    return {
        name: 'Roman'
    };
};

let getPerson2 = () => ({name: "Romich" });

(function(){
    console.log('LIFE');
})();

//strelochnaya function
(() => console.log('LIFE 2'))();

console.log(add(2, 5));
console.log(typeof add2);
console.log(add2(5, 15));
console.log(square(3));
console.log(square2(4));
console.log(giveMeAnswer());
log();
console.log(multiply(2, 3));
console.log(getPerson());
console.log(getPerson2());

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach(function(num){
    sum += num;
});

console.log(sum);

sum = 0;

numbers.forEach(num => sum += num);

//перебирает каждый элемент массива
let squared = numbers.map(n => n * n);

console.log(sum);
console.log(squared);

let person = {
    name: "Bob",
    greet: function(){
        console.log("Hello my name is " + this.name);
        console.log(this);
    }
};

//ES5
let person2 = {
    name: "Djon",
    greet: function() {
        var that = this;
        window.setTimeout(function(){
            console.log("I is " + that.name);
            console.log(this);
            console.log(that);
        }, 2000);
    }
};

//ES6
let person3 = {
    name: "Maks",
    greet: function() {
        setTimeout(() => {
            console.log("My name is " + this.name);
            console.log(this);
        });
    }
};

person.greet();
person2.greet();
person3.greet();