let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//ctx.fillRect(0, 0, 10, 10);

/*
for(var i = 0; i < 8; i++) {
    ctx.fillRect(i * 10, i * 10, 10, 10);
}
*/

let Robot = function(arr_head, arr_neck, arr_torso, arr_ra, arr_la, arr_rl, arr_ll) {
    this.head(arr_head);
    this.neck(arr_neck);
    this.torso(arr_torso);
    this.right_arm(arr_ra);
    this.left_arm(arr_la);
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
let arr_head = [75, 10, 50, 50];
let arr_neck = [95, 60, 10, 30];
let arr_torso = [65, 90, 70, 70];
let arr_right_arm = [35, 90, 30, 10];
let arr_left_arm = [135, 90, 30, 10];
let arr_right_leg = [65, 160, 10, 30];
let arr_left_leg = [125, 160, 10, 30];
let Valli = new Robot(arr_head, arr_neck, arr_torso, arr_right_arm, arr_left_arm, arr_right_leg, arr_left_leg);