//случайный выбор
//Math.random() возвращает случайное число 0 до 1
// например 0.7
function fun_random() {
    console.log(Math.random() + "\n");
    console.log(Math.random() + "\n");
    console.log(Math.random() + "\n");
}

//Math.random() не возвращает 1
// Если нужно чтобы Math.random() 
// возращал случайное число до числа N
// нужно Math.random() * N

function random_N(N) {
    console.log(Math.random() * N);
}

// Округление в меньшую сторону Math.floor()
function math_floor() {
    console.log(Math.floor(Math.random() * 10));
}

// случайный элемент в массиве
var randomWords = ["взрыв", "пищера", "принцеса", "карандаш"];
var phrases = [
    "звучит неплохо",
    "Это надо сделать",
    "Это плохая идея",
    "Может не сегодня",
    "Аракул говорит нет"
];

function arr_random(x) {
    var randomIndex = Math.floor(Math.random() * x.length);
    console.log(x[randomIndex]);
}

function arakul(arr) {
    var input = prompt("Задайте вопрос");
    if (input) {
        document.write(arr[Math.floor(Math.random() * arr.length)]);
    }
    else {
        document.write("вы ничего не ввели");
    }
}

// дразнилки версия 2.0
let pickRandomWord = function(words) {
    return words[Math.floor(Math.random() * words.length)];
};
let generateRandomInsulte = function() {
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    var randomString = "У тебя " 
    + pickRandomWord(randomBodyParts) 
    + " словно " + pickRandomWord(randomAdjectives) 
    + " " + pickRandomWord(randomWords) 
    + "!!!";
    return randomString;
};
function draznilki() {
    // склейка
    document.write(generateRandomInsulte());
}

function draznilki2() {
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
    var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
    var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    var randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");

    document.write(randomInsult);
}

var body_parts = ["голова", "туловище", "задница", "рука", "нога", "глаз", "рот", "нос", "ухо"];
var adjectives = ["вонючая", "унылая", "дурацкая", "занудная", "кривая", "гнилая", "испорченная"];
var words = ["муха", "выдра", "макака", "крыса", "баба", "собака", "кошка", "пиньчушка", "рыба"];
var animals = ["собаки", "кошки", "крысы", "выдры", "скунса", "змеи", "макаки", "свиньй", "курицы"];

function my_draznilki(x, y, z) {
    var x_random = x[Math.floor(Math.random() * x.length)];
    var y_random = y[Math.floor(Math.random() * y.length)];
    var z_random = z[Math.floor(Math.random() * z.length)];
    return ["У тебя", x_random, "словно", y_random, z_random + "!!!"].join();
}

function my_draznilki2(a, b, c) {
    var a_random1 = a[Math.floor(Math.random() * a.length)];
    var a_random2 = a[Math.floor(Math.random() * a.length)];
    var b_random = b[Math.floor(Math.random() * b.length)];
    var c_random = c[Math.floor(Math.random() * c.length)];

    return "У тебя " + a_random1 + " ещё более " + b_random + " чем " + a_random2 + " у " + c_random + "!!!";
}

var draznilka = my_draznilki2(body_parts, adjectives, animals);

console.log([3, 2, 1].join(" больше чем "));