"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//обявление функции
//1
function Task() {
    document.write("Task" + "<br>");
}

//2
var Task1 = function Task1() {
    document.write("Task1" + "<br>");
};

var task = new Task();
task;
var task1 = new Task1();
task1;

//объявление классов
//1

var MyTask1 = function MyTask1() {
    _classCallCheck(this, MyTask1);

    console.log("constructor 1");
};

var MyTask2 = function MyTask2() {
    _classCallCheck(this, MyTask2);

    console.log("constructor 2");
};

var MyTask3 = function MyTask3() {
    _classCallCheck(this, MyTask3);

    console.log("constructor 3");
};

var MyTask4 = function (_MyTask) {
    _inherits(MyTask4, _MyTask);

    function MyTask4() {
        _classCallCheck(this, MyTask4);

        var _this = _possibleConstructorReturn(this, (MyTask4.__proto__ || Object.getPrototypeOf(MyTask4)).call(this));

        console.log("subtask constructor 2");
        return _this;
    }

    return MyTask4;
}(MyTask2);

var myTask = new MyTask1();
var myTask2 = new MyTask2();
var myTask3 = new MyTask3();
var myTask4 = new MyTask4();