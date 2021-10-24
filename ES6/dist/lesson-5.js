'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('hello ' + name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}

createEmail('Djo@mail.ru', 'Fibi@mail.ru', 'чё как?', 'Ну чё как дела?');

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (x + y));
}

add(3, 7);

var name = "Romich";
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}