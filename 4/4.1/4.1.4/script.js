var my_link = document.getElementById("my_link");

arr_Link = new Array();

arr_Link[0] = 'yellow';
arr_Link[1] = '#80ff80';
arr_Link[2] = '#ffff80';
arr_Link[3] = '#408000';

arr_Vlink = new Array();

arr_Vlink[0] = 'blue';
arr_Vlink[1] = 'purple';
arr_Vlink[2] = 'black';
arr_Vlink[3] = 'red';

function colorChange() {
    link = Math.round((arr_Link.length + 0.1) * Math.random());
    vlink = Math.round((arr_Vlink.length + 0.1));
    my_link.style.color = arr_Link[link];
    my_link.style.color = arr_Vlink[vlink];
}

setInterval("colorChange()", 500);
