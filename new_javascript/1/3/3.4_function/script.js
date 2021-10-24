//function
var x = 3;
function square(x) {
    return x * x;
}

var square1 = square(5);
//literali
var square2 = function(x) {return x*x}

//определение новой функции
var square3 = new Function("x", "return x*x*x;");

function plus_y(x, y) {
    s = x + y;
    alert(parseInt(s));
}

function move() {
    alert('end script');
}

var y1 = Math.sin(x);
var y2 = square(x);
var y3 = plus_y(y1, y2);
//move();