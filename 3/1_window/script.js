window.status = 'javascript работает';

window.status = 'window.status изменён';

function openVk() {
	window.open('http://www.vk.com');
}

//лучше чем window.navigator
function local(){
	window.location = 'http://www.yandex.ru';
}

function inter() {
	setInterval("alert('hello Romka')", 3000);
}

function setTime() {
	setTimeout("alert('setTimeout')", 3000);
}