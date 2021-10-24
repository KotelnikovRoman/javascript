//классы

class Task {
    constructor() {
        this.title = "убрать комнату";
        console.log("создание задачи");
    }
}

let task = new Task()

console.log(typeof Task);
console.log(task instanceof Task);
console.log(task.title);

class Task2 {
    constructor(title = Task2.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task2.count += 1;
        console.log("Задача");
    }

    get done() {
        return this._done === true ? 'выполненно' : 'не выполненно';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        }
        else {
            console.error("Ошибка - укажите true/false");
        }
    }

    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }

    //method dlya class ne object
    static getDefaultTitle() {
        return "Задача";
    }
}

Task2.count = 0;

let task2 = new Task2("Прибраться");
let task3 = new Task2("купить продукты");
let task4 = new Task2();

console.log(task2.title);
console.log(task3.title);

task2.complete();

console.log(Task2.count);
console.log(task4.title);
console.log(task3._done);    //false and for task2 = true
console.log(task4.done + " = " + task4._done);