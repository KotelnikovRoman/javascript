//prompt
function win_prompt() {
    var name = prompt("You name");
    if(name) {
        return name;
    }
    else {
        return "None name";
    }
}

//confirm
function win_confirm() {
    var cat = confirm("Cat good?");
    if(cat) {
        return "кошки это круто";
    }
    else {
        return "надеюсь ты не тащишься от змей";
    }
}

function win_alert(text) {
    return alert(text);
}