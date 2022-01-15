//игра виселица 1.5
let words = [
    'программа',
    'марка',
    'очки',
    'макака',
    'тачка',
    'земля',
    'змея',
    'экватор',
    'трактор',
    'попугай',
    'телевизор',
    'работа',
    'бутылка',
    'магазин',
    'столик',
    'тетрадь'
];

//выбор случайного слова
function pickWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//шифровка слова
function setupAnswerArray(word) {
    let arr = [];
    for (let item of word) {
        arr.push("_");
    }
    return arr;
}

//разделитель между буквами
function showPlayerProgress(arr) {
    return arr.join(" ");
}

let secret_word = $(".main_word");
let form = document.forms.main_form;
let elem = form.elements.main_quess;
elem.value = "Hi";

/*function getGuess(word) {
    if (word.indexOf(main_quess.value) == -1) {
        attempt++;
    }
    alert(main_quess.value);
}*/

function game() {
    word = pickWord(words);
    answerArray = setupAnswerArray(word);
    remainingLetters = word.length;
    attempt = 0;
}

game();