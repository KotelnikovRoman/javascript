var x = 9;
var sin_x = Math.sin(x);    //0.4121184852417566

//вычесление квадратного корня
var y = 3;
var z = Math.sqrt(x*x + y*y);   // 9.486832980505138
var isFin = Infinity;   //бесконечность
var min_val = Number.MIN_VALUE; //наименьшее число
var max_val = Number.MAX_VALUE; //максимальное число
var N_nan = Number.NaN;
var n_pos = Number.POSITIVE_INFINITY;
var n_neg = Number.NEGATIVE_INFINITY;

//isNaN
n = 0 / 0;  //NaN
isN = isNaN(n); //true
isN_max = isNaN(min_val);  //false
isN_f = isNaN(isFin);   //false

//isFinite
isF = isFinite(n);  //false
n_max = isFinite(max_val); //true
n_min = isFinite(min_val); //true
isF_f = isFinite(isFin);    //false

function n_and_nan() {
    if(n == N_nan) {
        document.write('n and N_nan равны');
    }
    else {
        document.write('n and N_nan неравны');
    }
}

var n = 123456.789;
 //toFixed преобразует в строку,
 // отображает нужное число знаков после точки
 var n1 = n.toFixed(0); //123457
 var n2 = n.toFixed(2); //123456.79
 //toExponential преобразует в строку
 //и экспоненциальную форму
var n3 = n.toExponential(1);    //1.2e+5
var n4 = n.toExponential(3);    //1.235e+5
//toPrecision
var n5 = n.toPrecision(4);    //1.235e+5
var n6 = n.toPrecision(7);    //123456.8

//преобразования строки в число
str = "21" * "2";
str1 = "10" - 0;
str2 = "7";
n_str = Number(str2);