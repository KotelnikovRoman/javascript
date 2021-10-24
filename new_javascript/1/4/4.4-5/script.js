//элементарнае типы
function fun1() {
    var a = 3.14;
    var b = a;
    a = 4;
    document.write(a + " : " + b + "<br>");
}
fun1()

//ссылочные типы
function fun2() {
    var a = [1, 2, 3];
    var b = a;
    a[0] = 99;
    document.write(a + "<br>" + b + "<br>");
}
fun2();

//строки
function fun3() {
    var a = "простой текст";
    var b = a;
    a = "другой текст";
    document.write(a + "<br>" + b + "<br>");
    var s = "hello";
    var u = s.toUpperCase();
    s = u;
    document.write(s + "<br>" + u + "<br>");
}
fun3();