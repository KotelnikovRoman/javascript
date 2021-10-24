a = 55;
b = 4;
c = a == b;
d = a != b;

function bool() {
    if(d == false) {
        alert('eto false');
    }
    else {
        alert('eto true');
    }
}

a1 = 0;
b1 = 4;

while(a1 != b1) {
    if(a1 != b1) {
        a1 += 1;
    }
}

x = "false";    //nepreobrazietcya
x1 = 0; //preobrazuetcya
x_bool = Boolean(x1);
x_bool2 = !!x1; //yavnoe preobrazovanie

if(x_bool2 == false) {
    alert('takzhe preobrazovano');
}
else {
    alert('nepreobrazovano');
}