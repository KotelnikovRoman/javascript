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

let left_offset3 = 0;
let top_offset = 0;
function move_heading3(x, y) {
    x = Math.floor(x);
    y = Math.floor(y);
    $("#main-heading").offset({left: left_offset3}).offset({top: top_offset});
    if(left_offset3 < x) left_offset3++;
    if(top_offset < y) top_offset++;
    if(left_offset3 > x && top_offset > y) clearInterval(moveId3);
}

//mousemove (перемещение)
$("html").click(function(event){
    moveId3 = setInterval('move_heading("' +event.pageX+ '", "' +event.pageY+ '")', 30);
});