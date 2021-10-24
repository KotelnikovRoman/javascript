//5.9 присваивание

a = 3;
b = 0;
c = 5;

i = j = k = 0;

function fun1(a, b) {
    return (a = b) == 0;
}

document.write(fun1(i, j));