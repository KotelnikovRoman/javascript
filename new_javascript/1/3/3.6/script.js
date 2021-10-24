img1 = document.images[0];
img2 = document.images[1];
img3 = document.images[2];

//Создание массива

//new Array() не желательно
arr = [];
arr[0] = 1.2;
arr[1] = "JavaScript";
arr[2] = true;
arr[3] = {x:1, y:3};

//2 вариант
arr2 = new Array(
    1.2,
    "JavaScript",
    true,
    {x:1, y:3}
);

//массив с пустыми значениями по умолчанию
arr3 = new Array(3);
arr3[0] = 1;
arr3[1] = 2;
arr3[2] = 3;

//литералы массивов
var arr4 = [1.2, "JavaScript", true, {x:1, y:3}];
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
var base = 1024;
var table = [base+1, base+2, base+3];
//не желательно
var sparseArray = [1, , , ,5];