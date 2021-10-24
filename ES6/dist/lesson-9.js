"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//классы

var Task = function Task() {
    _classCallCheck(this, Task);

    this.title = "убрать комнату";
    console.log("создание задачи");
};

var task = new Task();

console.log(typeof Task === "undefined" ? "undefined" : _typeof(Task));
console.log(task instanceof Task);
console.log(task.title);

var Task2 = function () {
    function Task2() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task2.getDefaultTitle();

        _classCallCheck(this, Task2);

        this.title = title;
        this._done = false;
        Task2.count += 1;
        console.log("Задача");
    }

    _createClass(Task2, [{
        key: "complete",
        value: function complete() {
            this.done = true;
            console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \"" + this.title + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
        }

        //method dlya class ne object

    }, {
        key: "done",
        get: function get() {
            return this._done === true ? 'выполненно' : 'не выполненно';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.error("Ошибка - укажите true/false");
            }
        }
    }], [{
        key: "getDefaultTitle",
        value: function getDefaultTitle() {
            return "Задача";
        }
    }]);

    return Task2;
}();

Task2.count = 0;

var task2 = new Task2("Прибраться");
var task3 = new Task2("купить продукты");
var task4 = new Task2();

console.log(task2.title);
console.log(task3.title);

task2.complete();

console.log(Task2.count);
console.log(task4.title);
console.log(task3._done); //false and for task2 = true
console.log(task4.done + " = " + task4._done);