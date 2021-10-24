//игра виселица 1.3
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
    'работа'
];
attempt = 0;

function pickWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setupAnswerArray(word) {
    let arr = [];
    for(i = 0; i < word.length; i++) {
        arr.push("_");
    }
    return arr;
}

function showPlayerProgress(arr) {
    alert(arr.join(" "));
}

function getGuess(word) {
    let letter = prompt("Введите букву или нажмите отмена для выхода из игры");
    if(word.indexOf(letter) == -1) {
        attempt++;
    }
    return letter;
}

function updateGameState(letter, word, arr) {
    let N = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            arr[i] = letter;
            N++;
        }
    }
    return N;
}

function showAnswerAndCongratulatePlayer(arr) {
    alert(arr.join(" "));
    let text = "";
    remainingLetters == 0 ? text += "Поздравляю вы выйграли\n" : text += "Вы проиграли\n";
    text += "Было данно 7 попыток\n";
    text += "Вам понадобилось " + attempt + "\n";
    text += "Это было слово " + word;
    alert(text);
}


let word = pickWord(words);
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
while(remainingLetters > 0 && attempt < 7) {
    showPlayerProgress(answerArray);
    let quess = getGuess(word);
    if(quess === null) {
        break;
    }
    else if(quess.length !== 1) {
        alert("Введите только 1 букву");
    }
    else {
        let correctGuesses = updateGameState(quess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);