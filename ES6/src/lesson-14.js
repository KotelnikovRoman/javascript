let person = {
    firstname: 'John',
    lastname: 'Doe'
};

let person2 = {
    Name: 'Roman',
    Family: 'Proger'
};

let person3 = {
    Name: 'Vlad',
    Family: 'Stashevskiy',
    social: {
        facebook: 'facebook/roma',
        twitter: 'twitter/roma',
        vk: 'vk/roma'
    }
};

let firstname = person.firstname;
let lastname = person.lastname;

function fun() {
    console.log(firstname, " ", lastname);
}

function fun1() {
    let {firstname, lastname} = person;
    console.log(firstname, " : ", lastname);
}

function fun2() {
    let {firstName, lastName} = person2;
    console.log(firstName, " - ", lastName);    //undefined, undefined
}

function fun3() {
    let {Name: firstName, Family: lastName} = person2;
    console.log(firstName, " - ", lastName);    //Roman - Proger
}

function fun4() {
    let{Name, Family, age = 30} = person2;
    console.log(Name, Family, age); //Roman - Proger 30
}

function fun5() {
    let {Name, Family, social:{facebook, vk}} = person3;
    console.log(Name, Family, vk);
}

//es5
function post(url, config) {
    config.data;
    config.cache;
}

//es6
function post1(url, {data, cache}) {
    console.log(data, cache);
}
post1();
let result = post('api/users', {data: user, cache: false});
console.log(result);