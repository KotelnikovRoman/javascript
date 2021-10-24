function str1() {
    //сравнение строк по значению
    s1 = "hello";
    s2 = "hell" + "o";
    if(s1 == s2) document.write('сравниваются строки по значению <br>');
}

str1();

//тоже самое
function str2() {
    s1 = "hello";
    s2 = s1;
    if(s1 == s2) document.write('true <br>');
}

str2();

function fun() {
    o = "hello";
    
    for(var i in o) document.write(i, "<br>");
}

fun();