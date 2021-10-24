let firstName = 'Bill',
    lastName = 'Gates',
    email = 'gates@mail.ru';

let person = {
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

let person2 = {
    firstName,
    lastName,
    email,
    Hello() {
        console.log(`Hi my name is ${firstName} ${lastName}`);
    }
};

console.log(person);
//доступ к элементам
let property = 'email'; 
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
    return {
        [property]: value,
        ['_' + property]: value,    //с добавлением подчёркивания
        [property.toUpperCase()]: value, //большими буквами
        ['get' + property]() {
            return this[property];
        }
    };
}

console.log(createCar('vin', 1));
console.log(createCar2('Volga', 2));