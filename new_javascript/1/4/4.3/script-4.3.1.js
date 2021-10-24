function test(o) {
    var i = 0;
    if (typeof o == "object") {
        var j = 0;
        for(var k = 0; k < 10; k++) {
            document.write(k);
        }
        document.write(k);
    }
    document.write(j);
}

var txt = "text";
var obj = {}

test(txt);  //undefined

document.write("<br>");

test(obj);  ////0123456789100

document.write("<br>");

var score = "Global";

function f() {
    document.write(score);  //undefined
    document.write("<br>");
    var score = "Local";
    document.write(score);  //Local
}
f();

var u;
console.log(u)
u = 3;

function funTxt() {
    alert(txt);
    /*если объявить тут локальную переменную txt
    то значение выше будет undefined */
    function loc() {
        var txt = "drugoj text";
        alert(txt);
    }
    loc();
}
funTxt();

document.write("<br>");
document.write(txt);