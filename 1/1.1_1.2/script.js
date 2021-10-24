x = 5;
y = 3;
z = x + y;
text = "простое сообщение";

function textAlert() {
	alert(text);
}

function nameUser(){
	name=prompt('Как вас зовут? ');
	alert('Привет ' + name);
}

function YesNo() {
	yn = confirm('Хотите перейти в вк?');
	if(yn == true){
		open('http://www.vk.com');
	}
	else {
		alert('вы отказались от перехода');
	}
}
YesNo();