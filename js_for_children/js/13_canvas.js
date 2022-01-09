let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//ctx.fillRect(0, 0, 10, 10);

/*
for(var i = 0; i < 8; i++) {
    ctx.fillRect(i * 10, i * 10, 10, 10);
}
*/

let Robot = function(arr_head, arr_neck, arr_torso, arr_ra, arr_la, arr_rl, arr_ll) {
    //цвет рисования
    ctx.fillStyle = "orange";
    this.head(arr_head);
    this.neck(arr_neck);
    this.torso(arr_torso);
    this.right_arm(arr_ra);
    this.left_arm(arr_la);
    ctx.fillStyle = "#DEB887";
    this.right_leg(arr_rl);
    this.left_leg(arr_ll);
};

//golova
Robot.prototype.head = function(arr) {
    ctx.fillRect(arr[0], arr[1], arr[2], arr[3]);
};

//sheya
Robot.prototype.neck = function(arr) {
    ctx.fillRect(arr[0], arr[1], arr[2], arr[3]);
};

//tulovizhe
Robot.prototype.torso = function(arr) {
    ctx.fillRect(arr[0], arr[1], arr[2], arr[3]);
};

//pravaya_ruka
Robot.prototype.right_arm = function(arr) {
    ctx.fillRect(arr[0], arr[1], arr[2], arr[3]);
};

//levaya ruka
Robot.prototype.left_arm = function(arr) {
    ctx.fillRect(arr[0], arr[1], arr[2], arr[3]);
};

//right noga
Robot.prototype.right_leg = function(arr) {
    ctx.fillRect(arr[0], arr[1], arr[2], arr[3]);
};

//left noga
Robot.prototype.left_leg = function(arr) {
    ctx.fillRect(arr[0], arr[1], arr[2], arr[3]);
};

/*
head();
neck();
torso();
right_arm();
left_arm();
right_leg();
left_leg();
*/
//coordinats for robot
let arr_head = [75, 10, 50, 50];
let arr_neck = [95, 60, 10, 30];
let arr_torso = [65, 90, 70, 70];
let arr_right_arm = [35, 90, 30, 10];
let arr_left_arm = [135, 90, 30, 10];
let arr_right_leg = [65, 160, 10, 30];
let arr_left_leg = [125, 160, 10, 30];
/**
 * создаёт и рисует объект Валли
 */
//let Valli = new Robot(arr_head, arr_neck, arr_torso, arr_right_arm, arr_left_arm, arr_right_leg, arr_left_leg);

/*
ctx.fillStyle = "#0000FF";
ctx.fillRect(0, 0, 50, 200);
ctx.fillStyle = "#7FFF00";
ctx.fillRect(50, 0, 50, 200);
ctx.fillStyle = "#DC143C";
ctx.fillRect(100, 0, 50, 200);
ctx.fillStyle = "#BDB76B";
ctx.fillRect(150, 0, 50, 200);
*/
let my_color = () => {
    ctx.fillStyle = "#F0F8FF";
    ctx.fillRect(0, 0, 200, 65);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 65, 200, 65);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 130, 200, 65);
}

let rectangle = () => {
    //color
    ctx.strokeStyle = "DeepPink";
    //size line
    ctx.lineWidth = 4;
    //rectangle
    ctx.strokeRect(10, 10, 100, 20);
}

let cross = () => {
    ctx.strokeStyle = "Turquoise";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(60, 60);
    ctx.moveTo(10, 60);
    ctx.lineTo(60, 10);
    ctx.stroke();
};


let man = (width, height) => {
    let center_x = width / 2;
    let center_y = height / 2;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(center_x - 15, center_y - 25);
    ctx.lineTo(center_x + 15, center_y - 25);
    ctx.moveTo(center_x - 15, center_y - 25);
    ctx.lineTo(center_x - 15, center_y + 5);
    ctx.moveTo(center_x - 15, center_y + 5);
    ctx.lineTo(center_x + 15, center_y + 5);
    ctx.moveTo(center_x + 15, center_y + 5);
    ctx.lineTo(center_x + 15, center_y - 25);
    ctx.moveTo(center_x, center_y + 5);
    ctx.lineTo(center_x, center_y + 55);
    ctx.moveTo(center_x, center_y + 15);
    ctx.lineTo(center_x - 30, center_y + 5);
    ctx.moveTo(center_x, center_y + 15);
    ctx.lineTo(center_x + 30, center_y + 5);
    ctx.moveTo(center_x, center_y + 55);
    ctx.lineTo(center_x - 10, center_y + 90);
    ctx.moveTo(center_x, center_y + 55);
    ctx.lineTo(center_x + 10, center_y + 90);
    ctx.stroke();
};

let house = () => {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 60);
    ctx.lineTo(130, 30);
    ctx.lineTo(160, 60);
    ctx.lineTo(160, 100);
    ctx.lineTo(100, 100);
    ctx.fill();
};

//рисует с справо на лево
let circle = function() {
    ctx.lineWidth = 3;
    ctx.strokeStyle = "orange";

    //false рисует по часовой стрелки
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
    ctx.stroke();

    //true рисует против часовой стрелки
    ctx.beginPath();
    ctx.arc(20, 50, 20, 0,  Math.PI / 2, true);
    ctx.stroke();

    
    ctx.beginPath();
    ctx.arc(100, 50, 20, 0, Math.PI, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 30, 10, Math.PI, Math.PI / 2, true);
    ctx.stroke();
};

let circle2 = (x, y, r, n, c, b) => {
    ctx.lineWidth = 5;
    ctx.strokeStyle = c;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, n, b);
    ctx.stroke();
};

let circle3 = (x, y, r, n1, n2, c, b) => {
    ctx.lineWidth = 3;
    ctx.strokeStyle = c;

    ctx.beginPath();
    ctx.arc(x, y, r, n1, n2, b);
    ctx.stroke();
};

let circle4 = (x, y, r) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.stroke();
};

ctx.lineWidth = 4;
/*
ctx.strokeStyle = "#37474f";
circle4(100, 100, 10);
ctx.strokeStyle = "#bdbdbd";
circle4(100, 100, 20);
ctx.strokeStyle = "#4e342e";
circle4(100, 100, 30);
ctx.strokeStyle = "#ff6e40";
circle4(100, 100, 40);
ctx.strokeStyle = "#ffd180";
circle4(100, 100, 50);
ctx.strokeStyle = "#ff6f00";
circle4(100, 100, 60);
*/

let circle5 = (x, y, r, c, b) => {
    if (b === true) ctx.fillStyle = c;
    else ctx.strokeStyle = c;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    if(b === true) ctx.fill();
    else ctx.stroke();
}

/*
ctx.strokeStyle = "black";
circle4(100, 50, 20);
circle5(93, 48, 3, "black", true);
circle5(107, 48, 3, "black", true);
circle5(100, 55, 3, "orange", true);
circle4(100, 110, 40);
circle5(100, 90, 4, "black", true);
circle5(100, 110, 4, "black", true);
circle5(100, 130, 4, "black", true);
*/

let drawSnowman = (x, y) => {
    head = 15;
    body = 25;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.arc(x, y, head, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y + 40, body, 0, Math.PI * 2, true);
    ctx.stroke();

    glas = 3;
    ctx.fillStyle = "black";

    ctx.beginPath();
    ctx.arc(x - 8, y, glas, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + 8, y, glas, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = "orange";

    ctx.beginPath();
    ctx.arc(x, y + 7, glas, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = "black";

    ctx.beginPath();
    ctx.arc(x, y + 30, glas, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y + 40, glas, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y + 50, glas, 0, Math.PI * 2, true);
    ctx.fill();
};

let drawPoints = (arr) => {
    ctx.beginPath();
    for (item of arr) {
        ctx.lineTo(item[0], item[1]);
    }
    ctx.stroke();
};


let points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
let mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];
//drawPoints(mysteryPoints);

//1 ================
/*
for (let i = 0; i < points.length; i++) {
    console.log(points[i][0]+ " " +points[i][1]);
}
*/

//2 =================
//доступ к ключу
/*
for (let key in points) {
    console.log(key);
}
//доступ к значению
for (let key in points) {
    console.log(points[key][0]+ " " +points[key][1]);
}
*/

//3 ==================
/*
for (let item of points) {
    console.log(item[0]+ " " +item[1]);
}
*/

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
