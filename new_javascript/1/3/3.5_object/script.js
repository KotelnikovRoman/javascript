//object
var square3 = new Function('x', 'return x*x;'); //нежелательно
var o = new Object();
var d = new Date();
var pat = new RegExp('\\sjava\\s', 'i');

//new properties
o.x = 3;
o.y = 1.3;

var pat2 = {x:5, y:10};

//вложеные литералы
var rectangle = {
    upperLeft: {x:1, y:2},
    lowerRight: {x:3, y:4}
}

//array
var a = new Array();
a[0] = {x:1.2, y:3};

var b = new Array(3);

//literali array
var c = [1.2, 'javascript', true, {x:3.3, y:5}];
var d = [[1,2,3], [4,5,6], [7,8,9]];

base = 100;
var table = [base, base+1, base+2, base+3];

//Date
var now = new Date();
var xmas = new Date(2000, 11, 25);
var set_xmas = xmas.setFullYear(xmas.getFullYear() + 1);    //замена следующим годом
var weekDay = xmas.getDay();    //указывает день
var str_xms = now.toLocaleString(); //дата и время в виде строки

//строки
var s = 'тут текст про людей вот и всё.';
var last_s = s.substring(s.lastIndexOf(' ')+1, s.length);

var s1 = 'new string';  //string
var s2 = new String('new string');  //object

s2 += '!';

/*if(typeof s1 == typeof s2) {
    alert('yes');
}
else {
    alert('none');
}*/

var num = '3';
var num_wrap = Object(num);
var type_num = typeof num_wrap;

var boo1 = new Boolean(false);
var num1 = new Number(0);
var str1 = new String('');
var arr1 = new Array();

var image = document.getElementById('img');
w = image.width;
h = image.height;

var button = document.getElementById('myform_button');
button.value = 'click me';

var arr_img = [];
arr_img['width'] = w;
arr_img['height'] = h;

var point = new Object();
var now = new Date();
var pattern = new RegExp('\\sjava\\s','i');

point.x = 2.3;
point.y = 1.3;

point = {x:5, y:10}

var rectangle = {
    upperLeft: {x:2, y:3},
    lowerRight: {x:100, y:100}
};