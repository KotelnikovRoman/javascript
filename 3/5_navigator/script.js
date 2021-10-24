//properties (свойства)
codeName = navigator.appCodeName;	//код браузера
Name = navigator.appName;	//имя браузера
Version = navigator.appVersion;	//версия браузера
cookie_boolen = navigator.cookieEnabled;	//включён ли cookie
Agent = navigator.userAgent;	//версия браузера посылаемая через http

//collection
files = navigator.mimeTypes[];	//все типы документов поддерживающих браузером
all_plugins = navigator.plugins[]; //поддержка всех плагинов

//methods
//taintEnabled() вызывает ошибку
taint = 'taint ' + navigator.taintEnabled;	//проверяет на совместимость с Netscape, Navigator
java = navigator.javaEnabled();	//проверка на возможность запуска script