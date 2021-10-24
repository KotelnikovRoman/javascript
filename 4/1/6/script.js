var img1 = document.getElementById("img12");
img1.style.filter = "blur(2px) brightness(.1)";

var img2 = document.getElementById("img13");
img2.style.filter = "contrast(150%) invert(80%)";

var trans = document.getElementById("trans");

function transform() {
    trans.style.visibility = "hidden";
    trans.filters("revealtrans").apply();
    trans.style.visibility = "visible";
    trans.filters("revealtrans").Transition = 12;
    trans.filters("revealtrans").play(3);
}