//создание объектов
let dog = {
    name: "Той",
    legs: 4,
    isAwesome: true
};

console.log(dog.name);
dog.age = 14;

/*
console.log(dog.age);
console.log(dog);
*/

dog.bark = function() {
    //в стрелочной функции this не работает
    console.log("Гав-гав, меня зовут " +this.name+ "!");
};

dog.bark();

let speak = function() {
    console.log(this.sound+ " Меня зовут " +this.name+ "!");
}

let cat = {
    sound: 'Мяу',
    name: 'Варежка',
    speak: speak
};

let pig = {
    sound: 'Хрю',
    name: 'Чарли',
    speak: speak
};

let horse = {
    sound: 'И-го-го',
    name: 'Мэри',
    speak: speak
};

cat.speak();
pig.speak();
horse.speak();

//создание объектов с помощью конструктора
let Car = function(x, y, speed, url) {
    this.x = x,
    this.y = y,
    this.url = url,
    this.width = "100px",
    this.speed = speed;
    /*автомотически запускает метод
    при создании объекта
    */
    this.draw()
};

varDraw = function(car) {
    carHtml = '<img src="' +car.url+ '" alt="tesla">';
    let carElement = $(carHtml);
    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y,
        width: car.width
    });
    $("body").append(carElement);
};

/**
 * add function draw in Car.prototype
 */
Car.prototype.draw = function() {
    let carHtml = '<img src="' +this.url+ '" alt="">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y,
        width: this.width
    });
    $("body").append(this.carElement);
};

//движение в право
Car.prototype.moveRight = function(speed) {
    this.x += speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

//движение в лево
Car.prototype.moveLeft = function(speed) {
    this.x -= speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

//движение в верх
Car.prototype.moveUp = function(speed) {
    this.y += speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

//движение в низ
Car.prototype.moveDown = function(speed) {
    this.y -= speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

//кол-во сдвигов
let play_N = 0;

//движение
Car.prototype.play = function(obj, speed) {
    //двигаться до правого края
    //вычитаем размер объекта 
    //чтобы не зайти за край
    this.x < window.innerWidth - Math.floor(parseInt(this.width)) ? this.moveRight(speed) : clearInterval(obj);
    play_N++;
    console.log(play_N);
}

/**
 * при использовании varDraw 
 * не работает moveRight()
 */
//varDraw(tesla);


let tesla = new Car(10, 20, 5, "https://telegra.ph/file/2b51d404ca05470ae875b.png");
let nisan = new Car(100, 250, 15, "https://www.supercars.net/blog/wp-content/uploads/2016/02/Screenshot-2016-02-02-08.29.09-1.png");

/*
tesla.draw();
nisan.draw();
*/

play_tesla = setInterval("tesla.play(play_tesla, 10)", 30);
play_nisan = setInterval("nisan.play(play_nisan, 30)", 70);