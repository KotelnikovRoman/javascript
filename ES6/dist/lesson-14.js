'use strict';

var person = {
    firstname: 'John',
    lastname: 'Doe'
};

var person2 = {
    Name: 'Roman',
    Family: 'Proger'
};

var person3 = {
    Name: 'Vlad',
    Family: 'Stashevskiy',
    social: {
        facebook: 'facebook/roma',
        twitter: 'twitter/roma',
        vk: 'vk/roma'
    }
};

var firstname = person.firstname;
var lastname = person.lastname;

function fun() {
    console.log(firstname, " ", lastname);
}

function fun1() {
    var firstname = person.firstname,
        lastname = person.lastname;

    console.log(firstname, " : ", lastname);
}

function fun2() {
    var firstName = person2.firstName,
        lastName = person2.lastName;

    console.log(firstName, " - ", lastName); //undefined, undefined
}

function fun3() {
    var firstName = person2.Name,
        lastName = person2.Family;

    console.log(firstName, " - ", lastName); //Roman - Proger
}

function fun4() {
    var Name = person2.Name,
        Family = person2.Family,
        _person2$age = person2.age,
        age = _person2$age === undefined ? 30 : _person2$age;

    console.log(Name, Family, age); //Roman - Proger 30
}

function fun5() {
    var Name = person3.Name,
        Family = person3.Family,
        _person3$social = person3.social,
        facebook = _person3$social.facebook,
        vk = _person3$social.vk;

    console.log(Name, Family, vk);
}

//es5
function post(url, config) {
    config.data;
    config.cache;
}

//es6
function post1(url, _ref) {
    var data = _ref.data,
        cache = _ref.cache;

    console.log(data, cache);
}
post1();
var result = post('api/users', { data: user, cache: false });
console.log(result);