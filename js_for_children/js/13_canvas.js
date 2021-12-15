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

man(200, 200);