// &&
a = 5;
b = 5;
var c = null;
var d = 3;

function stop() {
    console.log("stop");
}
// выражения эквиволенты
function funAnd(x, y) {
    if (x == y) stop();
}
/*
если вырожение слева истино 
запускаем функцию
*/
function funAnd2(x, y) {
    (x == y) && stop();
}

function funAnd3() {
    if ((c == null) && (b++ > 10)) stop();
}

// || (или)

function minMax(min_width, max_width) {
    this.min_width = min_width;
    this.max_width = max_width;
}

function fun() {
    var max_width;
    performance = new minMax(0, 350);
    /* сначала проверяется значение max_width
    потом проверяется значение из объекта preference
    если они не определены показывается значение по умолчанию 500 */
    var max = max_width || performance.max_width || 500;
    document.write(max);
}

// ! (HE)

function funNone(x) {
    // false = true
    // 0 = true
    // 1 = false
    // -1 = false
    // "text" = false
    document.write(!x ? true : false);
}

function funNone2(x, y) {
    // если true 0 иначе 1
    document.write(!(x == y) ? "0" : "1");
}

function funNone3(x, y) {
    if (!x == 5 && y < x) {
        document.write(true);
    }
    else {
        document.write(false);
    }
}

function funNone4(x, y) {
    if (!(x == 5 && y < x)) {
        document.write(true);
    }
    else {
        document.write(false);
    }
}
funNone4(d, a);