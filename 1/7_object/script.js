//вставка s2 в s1
function insStr(s1, s2, n) {
	return s1.slice(0, n) + s2 + s1.slice(n);
}

//замена s2 на s3
function replaceStr(s1, s2, s3) {
	if(s2 == "") s2 = " ";
	s = "";
	while(true) {
		i = s1.indexOf(s2);
		if(i >= 0) {
			s += s1.substr(0, i) + s3;
			s1 = s1.substr(i + s2.length);
		}
		else break;
	}
	return s + s1;
}

//удаление пробелов слева
text = "  arduino ";
function ltrim(xstr) {
	if(!(xstr.indexOf(" ") == 0)) return xstr;
	var astr = xstr.split(" ");
	var i = 0;
	while(i < astr.length) {
		if(!(astr[i] == (""))) {
			break;
		}
		i++;
	}
	astr = astr.slice(i);
	return astr.join(" ");
}

function rtrim(xstr) {
	if(!(xstr.lastIndexOf(" ") == xstr.length - 1)) {
		return xstr;
	}
	var astr = xstr.split(" ");
	var i = astr.length - 1;
	while(i > 0) {
		if(!(astr[i] == (""))) {
			break;
		}
		i--;
	}
	astr = astr.slice(0, i + 1);
	return astr.join(" ");
}

text = "  arduino ";

ytrim = rtrim(ltrim(text));

function trim(xstr) {
	return rtrim(ltrim(xstr));
}

alert(trim(text).length);