myImg2 = document.getElementById('myImg2');
flag = false;

function changingImg() {
    if(flag) {  // false
        myImg2.src = 'img/johnny5_s.jpg';
    }
    else {  //true
        myImg2.src = 'img/johnny5_b.jpg';
    }
    //smenit znachenie
    flag = !flag;
}

myImg3 = document.getElementById('myImg3');

function changingImg2() {
    setInterval("move()", 1000);
    move();
}

function move() {
    if(flag) {
        myImg3.src = 'https://pbs.twimg.com/media/DQDAJ8YXUAAm4lc.jpg';
    }
    else {
        myImg3.src = 'http://rk.karelia.ru/wp-content/uploads/2018/01/j7p4q9awq54c8c8g8ko.jpg';
    }
    flag = !flag;
}

changingImg2();

var apict1 = ['img/slide1_s.jpg', 'img/slide2_s.jpg', 'img/slide3_s.jpg', 'img/slide4_s.jpg'];
var apict2 = ['img/slide1_b.jpg', 'img/slide2_b.jpg', 'img/slide3_b.jpg', 'img/slide4_b.jpg'];
var aflags = [apict1.length];
var xstr = "";

for(var i=0; i < apict1.length; i++) {
    /*при x =... выведетится последняя картинка*/
    xstr += '<img id="i' + i + '" src="' + apict1[i] + '" onclick="imgchange()" /> <br>';
}

document.write(xstr);

function imgchange() {
    var xid = event.srcElement.id;
    var n = parseInt(xid.substr(1));

    if(aflags[n]) {
        document.all[xid].src = apict1[n];
    }
    else{
        document.all[xid].src = apict2[n];
    }
    aflags[n] = !aflags[n];
}