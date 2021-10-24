function applyForVisa(documents) {
    console.log('Обработка заявления на визу');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject('В визе отказано')}, 2000);
    });
    return promise;
}

//регистрация в отеле
function bookHotel() {
    console.log("Бронируем номер");
}

//покупка билета
function buyTickets() {
    console.log("Покупаем билет");
}

applyForVisa({})
    .then(visa => console.info('Виза получена'))
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));