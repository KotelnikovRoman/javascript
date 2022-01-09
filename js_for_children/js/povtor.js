let x = 0;
let y = 0;
let canvas = document.getElementById("canvas");
canvas.style.background = "yellow";
let ctx = canvas.getContext("2d");

pointing = (obj) => {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    $("html").mousemove(function(event) {
        //$(obj).offset({});
        x = event.clientX;
        y = event.clientY;
        ctx.beginPath();
        ctx.moveTo(x, y)
        ctx.lineTo(x + 1, y + 1);
        ctx.stroke();
        console.log(x, y);
    });
};

pointing("canvas");