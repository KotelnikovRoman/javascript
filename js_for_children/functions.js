let our_first_function = function() {
    return "Hello world";
}

let sayHelloTo = function(name) {
    return "Hello " + name;
};

let draw_cats = function(howManyTimes) {
    for(let i = 0; i < howManyTimes; i++) {
        console.log(i + "(=^.^=)");
    }
};

let print_multiple_times = function(howManyTimes, whatToDraw) {
    for(let i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};

let plus = function(num) {
    return num + Math.floor(1.2345);
};

let double = function(number) {
    return number * 2;
};

let numLetter = function(name, number) {
    if(name.length < number) {
        return;
    }
    return number + "буква твоего имени " + name[number - 1];
};

let medalForScore = function(score) {
    if(score < 3) {
        return "бронзавая медаль";
    }
    if(score < 7) {
        return "серебрянная медаль";
    }
    return "золотая медаль";
};

function multiply(n1, n2) {
    return n1 * n2;
}

const multiply2 = (n1, n2) => n1 * n2;

function add(elem1, elem2) {
    return elem1 + elem2;
}

function areArraysSame(arr1, arr2) {
    flag = true;
    if(arr1.length != arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            flag = !flag;
            return flag;
        }
    }
    return flag;
}

function areArraysSame2(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}