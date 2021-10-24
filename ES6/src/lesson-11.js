//обявление функции
//1
function Task() {
    document.write("Task" + "<br>");
}

//2
let Task1 = function Task1() {
    document.write("Task1" + "<br>");
}

let task = new Task();
task;
let task1 = new Task1();
task1;

//объявление классов
//1
class MyTask1 {
    constructor() {
        console.log("constructor 1");
    }
}

let MyTask2 = class MyTask2 {
    constructor() {
        console.log("constructor 2");
    }
}

let MyTask3 = class {
    constructor() {
        console.log("constructor 3");
    }
}

let MyTask4 = class extends MyTask2 {
    constructor() {
        super();
        console.log("subtask constructor 2");
    }
}

let myTask = new MyTask1();
let myTask2 = new MyTask2();
let myTask3 = new MyTask3();
let myTask4 = new MyTask4();