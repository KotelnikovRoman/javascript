function dinosaurs() {
    var myTopThreeDinosaurs = [
        "Тироназавр",
        "Велоцираптор",
        "Стегозавр"
    ];

    console.log(myTopThreeDinosaurs[0]);
}

function allDinosaurs() {
    var dinosaurs = [
        "Тироназавр",
        "Велоцираптор",
        "Стегозавр",
        "Трицерапторс",
        "Брахиозавр"
    ];

    console.log(dinosaurs[0]);
}

function fun() {
    var i = 0;
    var arr = [];
    arr[i++] = "text";
    arr[i++] = "music";
    arr[i++] = "kino";

    console.log(arr[1]);
}

function dinoAndNumber() {
    var arr = [3, "динозавры", ["Трицерапторс", "Стегозавр", 3625.7], "10"];

    // [3, "динозавры", Array(3), "10"]
    console.log(arr[2][0]);
}

function maniacs() {
    var arr = ["Якко", "Вакко", "Дакко"];
    console.log(arr[arr.length - 1]);
}

function animals() {
    var arr = [];

    // добавляет элемент в конец массива
    arr.push("Кот");
    arr.push("Пёс");
    arr.push("Лама");

    //указывать когда массив уже полный, 
    //иначе результат будет undefined
    var len = arr.length;

    console.log(arr[len - 1]);
}

function animals2() {
    var arr = [];

    // добавляет элемент в начало
    arr.unshift("Кот");
    arr.unshift("Пёс");
    arr.unshift("Лама");
    arr.unshift("Макака");
    arr.unshift("белый медведь");

    // удаление и сохранение последнего элемента в переменную
    var lastAnimal = arr.pop();

    for (var i = 0; i < arr.length; i++) {
        document.write(arr[i] + "<br>");
    }

    document.write("Last element: " + lastAnimal + "<br>");
}

function animals3(animal1, animal2, animal3) {
    //shift удаляет и возвращает значение первого элемента
    var arr = [animal1, animal2, animal3];
    var firstElement = arr.shift();

    console.log("first element: " + firstElement + "<br>");
    console.log(arr);
}
var furryAnimals = ["Альпака", "Баран", "Йети"];
var scalyAnimals = ["Удав", "Годзила"];
var featheredAnimals = ["Ара", "Додо"]
// объединение массивов
function concatArray(arr1, arr2) {
    var furryAndScaly = arr1.concat(arr2);

    document.write(furryAndScaly);
}

function concatArray2(arr1, arr2, arr3) {
    return arr1.concat(arr2, arr3);
}

var colors = ["красный", "зелёный", "синий"];

function arrIndexOf(arr, e) {
    //если элемента нет в массиве
    //вернёт значение -1

    return arr.indexOf(e);
}

function funJoin(arr) {
    // вернёт строку из массива
    join1 = arr.join();
    join2 = arr.join(":");
    join3 = arr.join(" ");
    join4 = arr.join(" - ");

    document.write(join4);
}

function Names() {
    let myNames = ["Роман", "Михайлович", "Котельников"];
    // заменяет выражение
    // myNames[0] + " " + myNames[1] и т.д.
    document.write(myNames.join(" "));
}

numbers = [11, 25, 79];
function myAges(x) {
    document.write(x.join(" : "));
}

//дорога домой
var landmarks = [];
landmarks.push("мой дом");
landmarks.push("дорожка к дому");
landmarks.push("мигающий фонарь");
landmarks.push("протекающий гидрант");
landmarks.push("приют для кошек");
landmarks.push("моя бывшая школа");
landmarks.push("дом подруги");

function landmarks_pop(x) {
    for (var i = x.length - 1; i >= 0; i--) {
        document.write(x.pop() + "<br>");
    }
}

//случайный выбор
