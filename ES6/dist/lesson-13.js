'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

/*ES5 */
function fun() {
    var js = languages[0];
    var php = languages[1];
    var py = languages[2];
    var rb = languages[3];

    //'JavaScript', 'PHP', 'Python', 'Ruby'
    console.log(js, php, py, rb);
}

//ES6
function fun1() {
    var js = void 0,
        php = void 0,
        py = void 0,
        rb = void 0;


    //'JavaScript', 'PHP', 'Python', 'Ruby'
    js = languages[0];
    php = languages[1];
    py = languages[2];
    rb = languages[3];
    console.log(js, php, py, rb);
}

function fun2() {
    var js = languages[0],
        php = languages[1],
        py = languages[2],
        rb = languages[3];

    //'JavaScript', 'PHP', 'Python', 'Ruby'

    console.log(js, php, py, rb);
}

function fun3() {
    var js = "javascript",
        php = "php",
        py = "python",
        rb = "ruby";

    //"javascript", "php", "python", "ruby"

    console.log(js, php, py, rb);
}

/*если не объявить массив
функция не выведит значений*/
var scores = [1, 3, 5];

function fun4() {
    var low = scores[0],
        mid = scores[1],
        high = scores[2],
        higher = scores[3];

    //1, 3, 5, undefined

    console.log(low, mid, high, higher);
}

function fun5() {
    var low = scores[0],
        high = scores[2];
    //1, 5

    console.log(low, high);
}

function fun6() {
    var low = scores[0],
        rest = scores.slice(1);

    //1, [3, 5]

    console.log(low, rest);
}

function fun7() {
    var low = scores[0],
        mid = scores[1],
        high = scores[2],
        _scores$ = scores[3],
        higher = _scores$ === undefined ? 10 : _scores$;

    //1, 3, 5, 10

    console.log(low, mid, high, higher);
}

var scores2 = [1, 2, [3, 4]];

function fun8() {
    var low = scores2[0],
        mid = scores2[1],
        high = scores2[2];
    //1, 2, Array

    console.log(low, mid, high);
}

function fun9() {
    var low = scores2[0],
        mid = scores2[1],
        _scores2$ = _slicedToArray(scores2[2], 2),
        high = _scores2$[0],
        higher = _scores2$[1];

    //1, 2, 3, 4


    console.log(low, mid, high, higher);
}

function computeScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    console.log(low, mid);
}

function getScores() {
    return [3, 4, 5];
}

function fun10() {
    var scores = getScores();

    //[3, 4, 5]
    console.log(scores);

    var _getScores = getScores(),
        _getScores2 = _slicedToArray(_getScores, 3),
        low = _getScores2[0],
        mid = _getScores2[1],
        high = _getScores2[2];

    //3, 4, 5


    console.log(low, mid, high);
}

function fun11() {
    var yes = "Yes";
    var no = "None";
    var _ref3 = [no, yes];
    yes = _ref3[0];
    no = _ref3[1];

    console.log("Yes is ", yes);
    console.log("None is ", no);
    console.log('o_O');
}
fun11();