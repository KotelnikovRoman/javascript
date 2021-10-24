function d3(text, x, y, tcolor, fsize, fweight, ffamily, zind) {
    if(!text) return null;
    if(!ffamily) ffamily = 'Arial';
    if(!fweight) fweight = 800;
    if(!fsize) fsize = 36;
    if(!tcolor) tcolor = '#00aaff';
    if(!x) x = 0;
    if(!y) y = 0;

    var sd = 5, hd = 2;
    var xzind = "";

    if(zind) xzind = "; z-Index: " + zind;

    var xstyle = 'font-family: ' + ffamily + '; font-size: ' + fsize + '; font-weight: ' + fweight + ';';

    var xstr = '<div style="position: absolute; top: ' + (y + sd) + 'px; left: ' + (x + sd) + xzind +'px">';

    xstr += '<p style="' + xstyle + 'color: darkred">' + text + '</p></div>';

    xstr += '<div style="position: absolute; top:"' + y + ';left:' + x + xzind + 'px">';

    xstr += '<p style="' + xstyle + 'color: silver">' + text + '</p></div>';

    xstr += '<div style="position:absolute;top:' + (y + hd) + 'px; left:' + (x + hd) + xzind + 'px">';

    xstr += '<p style="' + xstyle + 'color:' + tcolor +'">' + text + '</p></div>';

    document.write(xstr);
}
d3("Привет", 50, 15, "red", 40, 800, 'sans-serif');
d3("Это не графика", 1, 50, "blue", 72, 800, "time");
d3("Это простой стиль текста", 10, 80, '00ff00', 92, 900, 'Arial', -7);