let timeUp = () => {
    console.log("время вышло");
};

let timeUp2 = text => console.log(text);

/*setTimeout(timeUp, 3000);
setTimeout('timeUp2("повторенье мать ученье")', 6000);*/

let timeUp3 = (x, y, z) => {
    setTimeout('console.log("' + x + '")', 2000);
    setTimeout('console.log("' + y + '")', 4000);
    setTimeout('console.log("' + z + '")', 6000);
};

//setTimeout('timeUp3("начало", "повторение", "конец")', 3000);

//отмена таймера
let do_homework_alarm = () => console.log("Пора учить программирование");
let timeoutId = setTimeout(do_homework_alarm, 2000);
//clearTimeout(timeoutId);
//console.log(timeoutId);

let random_num = Math.floor(Math.random() * 3) + 1;
console.log(random_num);
if(random_num == timeoutId) {
    clearTimeout(timeoutId);
    console.log("отмена действия");
}

let counter = 5;
var print_message = function() {
    if(counter >= 25) clearInterval(intervalId);
    console.log("ты сюда смотришь уже " +counter+ " сек.");
    counter += 5;
}

let intervalId = setInterval(print_message, 5000);
clearInterval(intervalId);

//счёт до 10
let schet = document.getElementById("schet");
let num = 0;
let message = () => {
    if(num == 10) clearInterval(intervalId2);
    $(schet).text(num);
    num++;
};
let intervalId2 = setInterval(message, 1000);

let left_offset = 0;
//анимация движения
let move_heading = () => {
    $("#main-heading").offset({left: left_offset}).offset({top: left_offset});
    left_offset++;
    if(left_offset > 200) {
        left_offset = 0;
    }
};
//setInterval(move_heading, 30);

let left_offset2 = 0;
let right_offset2 = 200;
let move_heading2 = () => {
    $("#main-heading").offset({left: left_offset2});
    left_offset2++;
    if(left_offset2 > 200) {
        $("#main-heading").offset({left: right_offset2});
        right_offset2--;
        if(right_offset2 == 0) clearInterval(moveId);
    }
};
//let moveId = setInterval(move_heading2, 30);

//события click
let click_handler = (event) => {
    console.log("x: " +event.pageX+ "; y: " +event.pageY+ ";");
}

//$("body").click(click_handler);

//mousemove перемещение мышью
/*$("html").mousemove(function(event) {
    $("#main-heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});*/

//перемещение объекта с помощью мыши
let go_obj = (obj) => {
    $("html").mousemove(function(event){
        $(obj).offset({
            left: event.pageX,
            top: event.pageY
        });
    });
};

//упражнения
//перемещение с помощью клика
let go_click = (obj) => {
    $("html").click(function(event){
        $(obj).offset({
            left: event.pageX,
            top: event.pageY
        });
    });
};