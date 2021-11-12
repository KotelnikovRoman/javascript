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
let animation = () => {
    let direction = "";
}
setInterval(animation, 300);