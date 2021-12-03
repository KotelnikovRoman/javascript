function goSchool() {
    var hadShower = true;
    var hasbackpad = true;
    return hadShower && hasbackpad;
}

function food() {
    var hasApple = true;
    var hasOrange = false;
    return hasApple || hasOrange;
}

function none() {
    var isWeekend = true;
    var needToShowerToday = !isWeekend;
    return needToShowerToday;
}


function goSchool2() {
    var isWeekend = false;
    var hadShower = true;
    var hasApple = false;
    var hasOrange = true;
    var sholdGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
    return sholdGoToSchool;
}

function growth_check() {
    var height = parseInt(prompt("ваш рост? "));
    var heightRestriction = 150;

    //true если height
    console.log(height >= heightRestriction);
}

function growth_check2() {
    var height = 150;
    var heightRestriction = 120;
    console.log(height <= heightRestriction);
}

function secretNum() {
    var SecretNumber = 5;
    var chicoGuess = prompt(" Угодай число от 1 до 9 ");
    parseInt(chicoGuess);

    while (SecretNumber != chicoGuess) {
        chicoGuess = prompt(" Попробуй ещё раз ");
        parseInt(chicoGuess);
        console.log(SecretNumber == chicoGuess);   // true
    }

    var number = 5;

    console.log(SecretNumber === chicoGuess);   //false потому что разные типы данных
    console.log(SecretNumber === number);   //true
}

function sravnenie() {
    var number1 = "5";
    var number2 = 5;

    console.log(number1 == number2);    //true
    console.log(number1 === number2);   //false
}

function sravnenie2() {
    console.log(0 == false);    //true
    console.log("false" == false);  //false
    console.log(0 === false);   //false
    console.log("false" === false); //false
}


function go_to_the_movies() {
    var age = 11;
    var accompanied = true;

    if (age >= 12 || accompanied == true) {
        return console.log(true);
    }
    return console.log(false);
}


//undefined, null
//undefined означает что переменная пуста
function varUndefined() {
    var myVariable;
    console.log(myVariable);    //undefined
}

function varNull() {
    // указываем, что тут пусто
    var myNullVariable = null;
    console.log(myNullVariable);
}
varNull();

