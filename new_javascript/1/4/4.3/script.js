var score = 'Global';
var myScore = 'Global';

function checkscore() {
    var score = 'local';
    document.write(score + "<br>"); //local
    myScore = 'глобальная'; //
    function nested() {
        var score = "Vlogenie";
        document.write(score + "<br>"); //Vlogenie
    }
    nested();
}

checkscore();
document.write(myScore);