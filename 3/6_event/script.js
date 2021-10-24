//properties (свойства)
block_img = document.all['block_img'];
but = document.all['key_but'];
button_but = document.all['button_but'];
ctrl_but = document.all['ctrl_but'];
shift_but = document.all['shift_but'];

but.onclick = function() {
	//проверяет была ли нажата клавиша alt
	alert(event.altKey);
}

button_but.onclick = function() {
	alert(event.button);
}

block_img.onclick = function(e) {
	alert(event.clientX + ' : ' + event.clientY);
}

ctrl_but.onclick = function() {
	alert(event.ctrlKey);
}

shift_but.onclick = function() {
	alert(event.shiftKey);
}

block_img.onmouseout = function() {
	//элемент с которого убрали курсор
	alert(event.fromElement)
}

window.onkeypress = function() {
	alert(event.keyCode);
}

offX = document.getElementById('offX');
offY = document.getElementById('offY');
clientX = document.getElementById('clientX');
clientY = document.getElementById('clientY');
screenX = document.getElementById('screenX');
screenY = document.getElementById('screenY');

offX.innerHTML = 'X';
offY.innerHTML = 'Y';

window.onmousemove = function() {
	offX.innerHTML = event.offsetX;
	offY.innerHTML = event.offsetY;
	clientX.innerHTML = event.clientX;
	clientY.innerHTML = event.clientY;
	screenX.innerHTML = event.screenX;
	screenY.innerHTML = event.screenY;
}

ret = document.getElementById('ret');
retValue = document.getElementById('retValue');

ret.onclick = function() {
	retValue.innerHTML = event.returnValue;
}