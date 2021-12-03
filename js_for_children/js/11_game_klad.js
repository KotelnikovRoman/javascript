//version 1.2

//получаем случайные координаты клада
var getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

//растояние от клика до клада
var getDistance = function(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    //sqrt - вычисляет корень числа
    return parseInt(Math.sqrt((diffX * diffX) + (diffY * diffY)));
};

//получить подсказку
var getDistanceHint = function(distance) {
    if(distance < 10) return "обожжёшься";
    else if (distance < 20) return "Очень горячо";
    else if (distance < 40) return "Горячо";
    else if (distance < 80) return "Тепло";
    else if (distance < 160) return "Холодно";
    else if (distance < 320) return "Очень холодно";
    else if (distance < 640) return "Очень, очень холодно";
    else return "Замёрзнешь";
};

var width = parseInt($("#map").css('width'));
var height = parseInt($("#map").css('height'));
var clicks = 0;
var attempts = 100;

//случайная позиция клада
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

//обработчик клика
$("#map").click(function(event) {
    clicks++;
    attempts--;
    //растояние между кликом и кладом
    var distance = getDistance(event, target);
    
    if (clicks < 101) {
        //подсказка
        var distanceHint = getDistanceHint(distance);

        //изменить текст подсказки
        $("#main-schet").text("Клики: " +clicks+ "; кол-во попыток: " +attempts);
        $("#distance").text(distanceHint);

        if(distance < 8) {
            $("#main-schet").text("Клад найдет, сделано кликов " +clicks);
            $("#schet-number").text("растояние от клада: " +distance);
        }
    }
    else {
        $("#main-schet").text("Вы просрали свой шанс, истратив " +clicks+ " клик");
        $("#schet-number").text("растояние от клада было: " +distance);
    }
});