//property (свойства)
document.bgColor = 'black';
document.fgColor = 'white';
site = document.domain;
site_title = document.title;
//изменение последней даты
site_modified = document.lastModified;

//collections
tegs_all = document.all;
all_images = document.images;
all_scripts = document.scripts;
all_styles = document.styleSheets;
all_ankors = document.anchors;
all_forms = document.forms;
all_frames = document.frames;
all_links = document.links;

//methods
text = document.getElementById('del');
function text_delete(){
	text.innerHTML = '';
}
text_delete();
text_p = document.getElementById('text_p');
function text_write(){
	//method write
	document.write(text_p.innerHTML);
}
text_write();

//events (события)
imgs = document.getElementById('imgs');
imgs.ondblclick = function() {
	alert('dblclick')
}
/*onkeydown = function() {
	alert('вы нажали какую-то клавишу');
}*/
times = document.getElementById("times");
onkeypress = function() {
	times.innerHTML = setInterval(site_modified, 1000);
}

imgs.onmousedown = function() {
	assessment = prompt('нравится девочка?');
	if(assessment == 'да') {
		alert('а у тебя есть вкус');
	}
	else {
		alert('странно, а тебе вообще девочки нравяться?\n или ты из этих?');
	}
}

imgs.onmouseout = function() {
	alert('что насмотрелся?');
}