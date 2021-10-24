var nObject = null;
var sObject = String(nObject);
var iObject = parseInt(nObject);
var fObject = parseFloat(nObject);
var s = nObject + ' : ' + sObject + ' : ' + iObject + ' : ' + fObject;
var x = 3;
var y = 5;
var str1 = "text1";
var str2 = "text2";
undens = undefined;

function ab(a, b) {
    if(a == b) {
        return true;
    }
    return false;
}

res = ab(nObject, undens);

/*
    при объявлении пустой переменной
    значение будет undefined
*/

var unD;
