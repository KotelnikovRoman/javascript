//меньше или больше
function less_more(x, y) {
    //если числа равны результат будет больше
    return x < y ? "меньше" : "больше";
}

function comparison(x, y) {
    itog = "";
    if (x < y) {
        itog = x + " < " + y;
    }
    else if (x > y) {
        itog = x + " > " + y;
    }
    else if (x == y) {
        itog = x + " == " + y;
    }
    else {
        itog = false;
    }

    return itog;
}

//оператор in
function fun_in() {
    var point = { x: 1, y: 2 }
    var x_coord = "x" in point;
    var y_coord = "y" in point;
    var z_coord = "z" in point;
    var ts = "toString" in point;
    console.log(ts);
}

function alphabet_comparison() {
    abc1 = "a"; //латиница
    abc2 = "а"; //кирилица

    if (abc1 < abc2) {
        document.write(abc1 + " < " + abc2);
    }
    else if (abc1 > abc2) {
        document.write(abc1 + " > " + abc2);
    }
    else {
        document.write(abc1 + " == " + abc2);
    }
}

function alphabet_comparison2(x, y) {
    x.toLowerCase();
    y.toLowerCase();
    if (x < y) {
        console.log("x < y");
    }
    else if (x > y) {
        console.log("x > y");
    }
    else {
        console.log("x == y");
    }
}

// оператор instanceof

var d = new Date();
var a = [2, 3, 5];

function proverka_object(x, type_obj) {
    x_type = type_obj;
    console.log(x instanceof x_type);
}

//Object = true
//Number = false
proverka_object(d, Date);

proverka_object(a, Array);