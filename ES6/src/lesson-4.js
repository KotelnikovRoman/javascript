let staticLanguages = ['c', 'c++', 'java'];
let dynamicLanguages = ['javascript', 'php', 'ruby'];
let languages = [...staticLanguages,'c#', ...dynamicLanguages, 'python'];

console.log(languages);

function add(x, y, z) {
    console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers);