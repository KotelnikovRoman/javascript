var s = "prosto moy neboshoy text javascript";  //значение строкового типа
function fun_s(x) {
    /*индекс с которого начинается последнее слово
    и количество символов в предложении чтоб захватить последнюю букву в слове
    если указать индекс последней буквы она не выведется*/
    var last_word = x.substring(x.lastIndexOf(" ") + 1, x.length);
    return last_word;
}

var num = fun_s(s);

window.document.write(num);

/* String(), Number(), Boolean() 
являются обёртками Для одноимённых типов данных */

window.document.write("<br>");

function fun_len(x) {
    var len = x.length;
    window.document.write(len);
}


function fun_str(){
    var s = "String";
    var S = String("I super proger");   //обект String
    window.document.write("type: " + typeof s + "; type: " + typeof S);
    msg = S + "!";
    window.document.write("<br>");
    window.document.write(msg);
}

function fun_obj() {
    var n = null;
    var s = String(n);
    var num = Number(n);
    var b = Boolean(n);
    var o = Object(n);
    window.document.write(n + "<br>");
    window.document.write(s + "<br>");
    window.document.write(num + "<br>");
    window.document.write(b + "<br>");
    window.document.write(o + "<br>");
}

fun_obj();