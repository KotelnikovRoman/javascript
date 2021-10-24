function greet(name) {
    console.log(`hello ${name}`.toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('Djo@mail.ru', 'Fibi@mail.ru', 'чё как?', 'Ну чё как дела?');

function add(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
}

add(3, 7);

let name = "Romich";
console.log(upperName`Hello ${name}`);

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}