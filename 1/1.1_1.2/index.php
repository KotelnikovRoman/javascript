<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<textarea id="myCode" cols="70" rows="10"></textarea>
	<br>
	<textarea id="myRez" cols="70" rows="3"></textarea>
	<br>
	<button onclick="document.all.myRez.value=eval(myCode.value)">Выполнить</button>
	<button onclick="document.all.myCode.value='';document.myRez.value='';">Очистить</button>
	<br>
	<script src="script.js"></script>
	<script>
		document.write(z);
	</script>
</body>
</html>