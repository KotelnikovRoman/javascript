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
let Car = function(x, y, url) {
    this.x = x,
    this.y = y,
    this.url = url,
    this.width = "100px"
};

let tesla = new Car(10, 20, "https://telegra.ph/file/2b51d404ca05470ae875b.png");
let nisan = new Car(100, 250, "https://www.supercars.net/blog/wp-content/uploads/2016/02/Screenshot-2016-02-02-08.29.09-1.png");

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

Car.prototype.moveRight = function() {
    this.x += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.play = function() {
    if(this.x < 100) {
        this.moveRight();
    }
    else {
        clearInterval(play);
    }
}

/**
 * при использовании varDraw 
 * не работает moveRight()
 * 
 */
//varDraw(tesla);
tesla.draw();
nisan.draw();

play = setInterval("tesla.play()", 30);