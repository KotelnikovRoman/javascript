//properties (свойства)
//количество посещённых страниц
len = history.length;

//methods
function his_back() {
	history.back();
}

function his_forward() {
	history.forward();
}

function go_back() {
	history.go(-3);
}

function go_forward() {
	history.go(2);
}

function page_five() {
	window.history.go(1);
	if(window.history.length > 4) {
		window.history.go(5);
	}
}