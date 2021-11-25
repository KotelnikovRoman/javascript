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
let direction = "right";
let x_left = 0;
let y_top = 0;
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
setInterval("animation('#main-heading')", 100);