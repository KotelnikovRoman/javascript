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
    //движение в право
    if(direction == "right") {
        x_left += 1;
        $(obj).offset({left: x_left});
        if(x_left == 200) direction = "bottom";
    }
    //движение в низ
    if(direction == "bottom") {
        y_top += 1;
        $(obj).offset({top: y_top});
        if(y_top == 200) direction = "left";
    }
    //движение в лево
    if(direction == "left") {
        x_left -= 1;
        $(obj).offset({left: x_left});
        if(x_left == 0) direction = "top";
    }
    //движение в верх
    if(direction == "top") {
        y_top -= 1;
        $(obj).offset({top: y_top});
        if(y_top == 0) direction = "right";
    }
};

//переключение скорости
function my_speed(obj) {
    let speed = 11;
    let number = 0;
    let animationId = setInterval("animation('" +obj+ "')", speed);

    $(obj).click(function(){
        //увеличение скорости
        if(speed > 1) {
            speed -= 1;
            number += 1;
            clearInterval(animationId);
            animationId = setInterval("animation('" +obj+ "')", speed);
            $(obj).text("Количество попаданий " +number);
        }
        //победа
        if(speed == 1) {
            clearInterval(animationId);
            $(obj).text("Ура победа");
        }
    });
}

my_speed("#main-heading");