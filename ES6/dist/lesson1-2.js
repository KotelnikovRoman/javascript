"use strict";

var name = "Вася";

if (true) {
    var version = "ES5";
}

console.log(version);

var new_version; //undefined

console.log(new_version);

new_version = "ES6";

var buttons = document.querySelectorAll("button");

/*в данном случае let делает i индивидуальной
для каждой кнопки*/

var _loop = function _loop(i) {
    button = buttons[i];

    button.innerText = i;
    button.onclick = function (e) {
        console.log(i);
    };
};

for (var i = 0; i < buttons.length; i++) {
    var button;

    _loop(i);
}