b = Boolean(false);
n = Number(0);
s = String("");
s2 = String("string");
a = Array();
a2 = Array(1, "2", false, 5);
a3 = Array();
function fun() {
    window.document.write(b + ' ; ' + n + " ; " + s + " ; " + a);
}

function val() {
    window.document.write(b.valueOf() + "<br>");    //false
    window.document.write(n.valueOf() + "<br>");    //0
    window.document.write(s.valueOf() + "<br>");    //""
    window.document.write(a.valueOf() + "<br>");    //""
}

function toStr() {
    window.document.write(b + " : " + b.valueOf() + " : " + b.toString() + "<br>");
    window.document.write(n + " : " + n.valueOf() + " : " + n.toString() + "<br>");
    window.document.write(s + " : " + s.valueOf() + " : " + s.toString() + "<br>");
    window.document.write(s2 + " : " + s2.valueOf() + " : " + s2.toString() + "<br>");
    window.document.write(a + " : " + a.valueOf() + " : " + a.toString() + "<br>");
    window.document.write(a2 + " : " + a2.valueOf() + " : " + a2.toString() + "<br>");
    window.document.write(a3 + " : " + a3.valueOf() + " : " + a3.toString() + "<br>");
}

toStr();