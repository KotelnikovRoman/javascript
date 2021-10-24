//переменная в виде функций
//с параметром howManyTimes
//n-ое количество 
var drawCats = function (howManyTimes) {
    for (var i = 0; i <= howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
}

//запускаем функцию
//drawCats(10);

var dannie = function () {
    console.log(99 * 123);
    console.log("Вот длиная строка".slice(0, 3));
    console.log(true && false);
}

//dannie();

let brothers = 1, sisters = 3, candy = 8;

function division(x, y, z) {
    return x / (y + z);
}

let res = division(candy, brothers, sisters)
console.log(res);

function multiplication(x, y, z) {
    return (x + y) * z;
}

let shariki = multiplication(15, 9, 2);
console.log(shariki);

let name;
console.log(name);

let secondsInMinutes = 60;
let minutesInHour = 60;
let secondsInAnHour = secondsInMinutes * minutesInHour;
let hoursInDay = 24;
let secondsInDay = secondsInAnHour * hoursInDay;
let daysInYear = 365;
let secondsInYear = secondsInDay * daysInYear;
let age = 36 * secondsInYear;   //1135296000 возвраст в милисекундах

//инкримент, дикримент
function ink_dik() {
    num_in1 = 0;
    num_in2 = 0;
    console.log("Инкримент");
    console.log(0 + ++num_in1); //1
    console.log(0 + num_in2++); //0
    console.log(num_in1 + " : " + num_in2); //1 : 1

    /** 
     * сначало выведит 2 : 1
     * после прибавит к num_in2 + 1
     */
    console.log(++num_in1 + " : " + num_in2++);
    console.log((++num_in1) + 1);   //4
    console.log((num_in2++) + 1);   //3

    console.log("\nДикримент");
    num_dik1 = 10;
    num_dik2 = 10;
    console.log(--num_dik1 - 1);    //8
    console.log(num_dik2-- - 1);    //9
    console.log(num_dik1 + " : " + num_dik2);   //9 : 9
    console.log(--num_dik1 + " : " + num_dik2--);

}

function plus_minus() {
    var x = 10;
    x = x + 5;
    x += 5;
    x -= 9;
    var score = 10;
    score += 7;
    score -= 3;
    x = 5;
    var y = x + 4;
    var z = 2;
    z *= y + 1; // = z * (y + x)
    console.log(z);
}

function myStr() {
    var myString = "моя крутая строка на js!!!";
    myString += " Я самый крутой прогер";

    var myThing = 5;
    myThing = "теперь это строка";

    var num = 9;
    var str = "9";
    var num2 = num + num;
    var str2 = str + str;
    var num3 = 0;
    num3 += str2;

    var hello = "Привет, ";
    var name = "Лера";
    hello += name;
    console.log(num2 + " : " + str2 + " : " + num3 + "\n" + hello);
}

function len() {
    var str = "суперДлиннаяСтрокаНаЯзыкеПрограммирования";
    var strLen = str.length;
    document.write(str);
    document.write("<br>");
    for (var i = strLen - 1; i >= 0; i--) {
        document.write(str[i]);
    }
    console.log(strLen);
}

var java = "Java";
var script = "Script";
var javascript = java + script;
console.log(javascript);
console.log(javascript.length);

function cipher() {
    var codeWord1 = "Обернись";
    var codeWord2 = "Неужели";
    var codeWord3 = "Огурцы";
    var codeWord4 = "Липкие";
    var codeWord5 = "?!";
    var code = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
    console.log(code);
}

function str_slice(x, y) {
    var str = "Это очень длинная строка, которая возможно никогда не кончится";
    console.log(str.slice(x, y) + '...');   //Это о...
}

//текст большими буквами
function str_upper(str) {
    console.log(str.toUpperCase());
}

//текст маленькими буквами
function str_lower(str) {
    console.log(str.toLowerCase());
}

function title(str) {
    //выводет текст с заглавной буквы
    console.log(str[0].toUpperCase() + str.slice(1, str.length).toLowerCase());
}

function str_title(str) {
    strLower = str.toLowerCase();
    strUpper = strLower[0].toUpperCase();
    text = strUpper + strLower.slice(1);
    console.log(text);
}

function str_title2() {
    var sillyString = "эЙ Как ДеЛа";
    var str = sillyString[0].toUpperCase() + sillyString.toLowerCase().slice(1);
    console.log(str);
}

function jsIsCool() {
    var javascriptIsCool = true;
    document.write(javascriptIsCool);
}

