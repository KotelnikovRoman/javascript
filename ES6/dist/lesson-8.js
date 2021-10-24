'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'gates@mail.ru';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    //добавление методов get, set in ES6
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

//добавление методов get, set in ES5
/*
Object.defineProperty(person, 'fullName', {
    get:function(){
        return this.firstName + ' ' + this.lastName;
    },
    set:function(value) {
        this.firstName = value;
    }
});
*/

var person2 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    Hello: function Hello() {
        console.log('Hi my name is ' + firstName + ' ' + lastName);
    }
};

console.log(person);
//доступ к элементам
var property = 'email';
/*если не объявить переменую 
document.write отображаться не будет*/
document.write(person.firstName + " " + person['lastName'] + "<br>");
document.write('email: ' + person[property]);

console.log(person2);
person2.Hello();

function createCar(property, value) {
    var car = {};

    car[property] = value;

    return car;
}

function createCar2(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
        return this[property];
    }), _ref;
}

console.log(createCar('vin', 1));
console.log(createCar2('Volga', 2));