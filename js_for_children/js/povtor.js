document.querySelector(".b-1").addEventListener('click', ()=> {
    
    /*
    let data = document.querySelector('.i-1').value;
    document.querySelector('.block-1').innerHTML += " " +data;
    */

    document.querySelector('.i-1').value = 'Hi world';
});

document.querySelector('.b-2').addEventListener('click', ()=> {
    let value_data = document.querySelector('.i-2').value; // '4'
    let number_data = +document.querySelector('.i-2').value; // 4
    document.querySelector('.block-2').innerHTML = typeof number_data;
});

document.querySelector('.b-3').onclick = ()=> {
    let color = document.querySelector('.i-3').value;
    document.querySelector('.block-3').innerHTML = color;
}