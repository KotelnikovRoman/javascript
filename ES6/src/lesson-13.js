let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

/*ES5 */
function fun() {
    let js = languages[0];
    let php = languages[1];
    let py = languages[2];
    let rb = languages[3];

    //'JavaScript', 'PHP', 'Python', 'Ruby'
    console.log(js, php, py, rb);
}


//ES6
function fun1() {
    let js, php, py, rb;
    [js, php, py, rb] = languages;

    //'JavaScript', 'PHP', 'Python', 'Ruby'
    console.log(js, php, py, rb);
}


function fun2() {
    let [js, php, py, rb] = languages;

    //'JavaScript', 'PHP', 'Python', 'Ruby'
    console.log(js, php, py, rb);
}

function fun3() {
    let [js, php, py, rb] = ["javascript", "php", "python", "ruby"];

    //"javascript", "php", "python", "ruby"
    console.log(js, php, py, rb);
}

/*если не объявить массив
функция не выведит значений*/
let scores = [1, 3, 5];

function fun4() {
    let [low, mid, high, higher] = scores;

    //1, 3, 5, undefined
    console.log(low, mid, high, higher);
}

function fun5() {
    let [low, ,high] = scores;
    //1, 5
    console.log(low, high);
}

function fun6() {
    let [low, ...rest] = scores;

    //1, [3, 5]
    console.log(low, rest);
}

function fun7() {
    let [low, mid, high, higher = 10] = scores;

    //1, 3, 5, 10
    console.log(low, mid, high, higher);
}

let scores2 = [1, 2, [3, 4]];

function fun8() {
    let [low, mid, high] = scores2;
    //1, 2, Array
    console.log(low, mid, high);
}

function fun9() {
    let [low, mid, [high, higher]] = scores2;
    
    //1, 2, 3, 4
    console.log(low, mid, high, higher);
}

function computeScore([low, mid]){
    console.log(low, mid);
}

function getScores() {
    return [3, 4, 5];
}

function fun10() {
    let scores = getScores();

    //[3, 4, 5]
    console.log(scores);

    let [low, mid, high] = getScores();

    //3, 4, 5
    console.log(low, mid, high);
}

function fun11() {
    let yes = "Yes";
    let no = "None";
    [yes, no] = [no, yes];
    console.log("Yes is ", yes);
    console.log("None is ", no);
    console.log('o_O');
}
fun11();