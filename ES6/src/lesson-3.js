/*
нельзя выводить константу до её объявления
console.log(PI);
*/

const PI = 3.14;
//нельзя делать
//const PI;
//const num = 3;
//num = 5;

const MATH = {
    NUM: 3
};

/*
так лучше не делать
переменные написанные большими буквами
являются константами, которые не меняются
*/
MATH.NUM = 3*3;

console.log(PI);
console.log(MATH.NUM);