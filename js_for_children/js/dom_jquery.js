let main_heading = document.getElementById("main-heading");
console.log(main_heading.innerHTML);
main_heading.innerHTML = "Айтишечку надо?";

function new_title() {
    let newHeadingText = prompt("new text");

    $("#main-heading").text(newHeadingText);
}

//$("body").append("<p>Новый параграф</p>");

function my_hobby() {
    for(let i = 0; i < 3; i++) {
        let hobby = prompt("язык программирования который надо выучить");
        $("body").append("<p>" + hobby + "</p>");
    }
}

function hidden(id, N) {
    $(id).fadeOut(N);
}

function display(id, N) {
    $(id).fadeIn(N);
}

function blink(id, N) {
    hidden(id, N);
    display(id, N);
}

let slide = document.getElementById("slide");
let flag = true;

function stop() {
    return flag = !flag;
}
function slide_show(img) {
    $(img).slideUp(1000).slideDown(1000);
}

function show_hide(id, N) {
    for(let i = 0; i < N; i++) {
        $(id).show(1000).hide(1000);
    }
}

//show_hide("#my_text", 5);

function frends() {
    $("#main-heading").text("Мои друзья");
    let arr = ["Алёша", "Илья", "Никита"];
    for(let i = 0; i < arr.length; i++) {
        $("body").append("<p>" +arr[i]+ "</p>");
        $("p").hide().fadeIn(3000);
    }
    $("p").append(" лучший");
}

function title_blink() {
   let y = 1000;
    for(let i = 0; i < 5; i++) {
        $("h1").fadeOut(y).fadeIn(y);
        y += 1000;
    }
}

function pause_fadeIn() {
    $("h1").click(function(){
        $(this).fadeOut(3000).delay(5000).fadeIn(3000);
    });
}

function title_To(second, N) {
    //прозрачность объекта
    $("h1").fadeTo(second, N);
}

title_To(3000, 0.5);