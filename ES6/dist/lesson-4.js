'use strict';

var staticLanguages = ['c', 'c++', 'java'];
var dynamicLanguages = ['javascript', 'php', 'ruby'];
var languages = [].concat(staticLanguages, ['c#'], dynamicLanguages, ['python']);

console.log(languages);

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);