function vivod(obj) {
    document.write(obj);
    console.log(obj);
}

// объект
var cat = {
    // ключ / значение
    legs: 3,
    name: "Глория",
    // ключ с пробелом должен быть в скобках
    /* так лучше не делать, 
    желательно использовать подчёркивание */
    "full name": "Гармония филомена Уси-пусички морган",
    color: "Черепаховый"
};

var dog = {
    name: "Бобик",
    age: 6,
    color: "белый",
    bark: "Гав-гав-гав"
};

console.log(cat["full name"]);
// eror console.log(cat.full name);
console.log(cat.legs);
// узнать кол-во ключей
console.log(Object.keys(cat) + " and " + Object.keys(dog));

// добавление элементов в объект
var cat2 = {};
cat2["name"] = "Гарфилд";
cat2.legs = 5;
cat2.color = "белый";

//console.log(cat2.isBro); undefined

// array in object
var dinosaurs = [
    { name: "Тироназавр Рекс", period: "Верхнемеловой" },
    { name: "Стегозавр", period: "Верхнеюрский" },
    { name: "Платеозавр", period: "Триасовый" }
];

var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 13, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };
var friends = [anna, dave, kate];

var owedMoney = {};
owedMoney["Djimi"] = 5;
owedMoney["Anna"] = 7;
owedMoney["Djimi"] += 3;

var movies = {
    "В поисках Немо": {
        releaseDate: 2003,
        duration: 100,
        acters: ["Альберт Брукс", "Эллен Делженерес", "Александр Гоулд"],
        format: "DVD"
    },
    "Звёздные войны: Эпизод 6": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Марк Хэмилл", "Хэрисон Форд", "Кэрри Фишер"],
        format: "DVD"
    },
    "Гарри Поттер и кубок огня": {
        releaseDate: "2005",
        duration: 157,
        actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руппер Гринт"],
        format: "Blu-ray"
    }
}

//добавить объект в переменную
var findingNemo = movies["В поисках Немо"];

var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
    format: "Blu-ray"
};

movies["тачки"] = cars;

vivod(findingNemo.releaseDate);
document.write("<br>");

//показать названия всех фильмов
vivod(Object.keys(movies));

//упражнения
var scores = {
    "Djon": {
        score: 0
    },
    "Alen": {
        score: 0
    },
    "Mariya": {
        score: 0
    },
    "Erik": {
        score: 0
    }
}

var Djon = scores["Djon"];
var Alen = scores["Alen"];
var Mariya = scores["Mariya"];
var Erik = scores["Erik"]

Djon.score += 3;
Alen.score += 1;
Mariya.score += 5;
Erik += 7;

document.write("<br>");
document.write(Djon.score);

var myCrazyObject = {
    "name": "Nelepiy object",
    "some array": [1, 2, { purpose: "putanica", number: 123 }, 3.4],
    "random animal": "Banana akula"
};

console.log(myCrazyObject["some array"][2].number);