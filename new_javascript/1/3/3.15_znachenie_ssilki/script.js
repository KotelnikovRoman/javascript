//копирование по значению
var message = "Hello world";
var text = message;
message = "new text";
document.write(text + "<br>");

var n = 2;
var m = 3;

function add_to_total(total, x) {
    total = total + x;
    return total;
}

document.write(add_to_total(n, m) + "<br>");
document.write(n + "<br>");

if (n == 2) m = 5;

document.write(m + "<br>");

//копирование по ссылке
var user = {name:"Василий"}
var admin = user;
user.name = "Romanich";
document.write(admin.name + "<br>");

var arr1 = [1, 2, 3, 4, 5];

var arr2 = arr1;

arr2[0] = 10;

document.write(arr1[0] + "<br>");   //10

//object
var xmas = new Date(2007, 11, 25);
var solstice = xmas;    //ссылаются на один объект

solstice.setDate(21);

document.write(xmas.getDate() + "<br>");

function add_to_total_2(totals, x) {
    totals[0] = totals[0] + x;
    totals[1] = totals[1] + x;
    totals[2] = totals[2] + x;
    return totals;
}

var arr3 = [2, 5, 10];
var arr4 = add_to_total_2(arr3, 2);
var arr5 = arr4;
arr5[1] = 25;
document.write(arr3 + "<br>");

if(arr4 == arr5) {
    document.write('True <br>');
}
else {
    document.write('False <br>');
}

xmas2 = new Date(2019, 10, 19);
solstice2 = new Date(2019, 10, 19);

//date true
if (solstice2 != xmas2) {
    document.write('date true <br>');
}
else {
    document.write('date false <br>');
}

function add_to_total_3(totals, x) {
    newtotals = new Array(3);
    newtotals[0] = totals[0] + x;
    newtotals[1] = totals[1] + x;
    newtotals[2] = totals[2] + x;
    totals = newtotals;
    document.write(totals);
}

arr_total = [2, 4, 6];

add_to_total_3(arr_total, 3);