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

//перемещение по квадрату
//направление
let direction = "right";
let x_left = 0;
let y_top = 0;
let speed = 100;
let animation = (obj) => {
    if(direction == "right") {
        x_left += 1;
        $(obj).offset({left: x_left});
        if(x_left == 200) direction = "bottom";
    }
    if(direction == "bottom") {
        y_top += 1;
        $(obj).offset({top: y_top});
        if(y_top == 200) direction = "left";
    }
    if(direction == "left") {
        x_left -= 1;
        $(obj).offset({left: x_left});
        if(x_left == 0) direction = "top";
    }
    if(direction == "top") {
        y_top -= 1;
        $(obj).offset({top: y_top});
        if(y_top == 0) direction = "right";
    }
};

//переключение скорости
function my_speed(obj, speed) {
    let N = speed;
    let animationId = setInterval("animation('" +obj+ "')", speed);
    $(obj).click(function(){
        speed -= 25;
        if(speed == 0) speed = N;
        clearInterval(animationId);
        animationId = setInterval("animation('" +obj+ "')", speed);
        console.log(speed);
    });
}

my_speed("#main-heading", 100);