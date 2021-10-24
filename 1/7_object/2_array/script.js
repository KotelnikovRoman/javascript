earth = new Array();
earth[0] = "Земля";
earth[1] = 24;
earth[2] = 6378;
earth[3] = 365.25;

earth_len = earth.length;

cars = new Array(
	"Волга",
	"Жигули",
	"Москвич",
	"Лада",
	"Запорожец");

cars_len = cars.length;

work = new Array();
//можно сравнить со словарём в python
work.employee = "Роман";
work.profession = "программист";	//work[1] error
work.duties = "создание сайтов и редактирование";
work.salary = 0;

profession = work['profession'];

transport = new Array();
transport.ground = new Array();
transport.ground[0] = 'мотоциклы';
transport.ground[1] = 'вездеходы';
transport.ground[2] = 'тракторы';
transport.ground[3] = 'автомобили';
transport.ground[4] = 'грузовик';
transport.water = new Array();
transport.water[0] = 'плот';
transport.water[1] = 'лодка';
transport.water[2] = 'катер';
transport.water[3] = 'яхта';
transport.water[4] = 'теплоход';
transport.aerial = new Array();
transport.aerial[0] = 'аэроплан';
transport.aerial[1] = 'верталёт';
transport.aerial[2] = 'воздушный шар';
transport.aerial[3] = 'самолёт';
transport.aerial[4] = 'дережабель';

a = new Array(51, 2, 3, 4, 5);

b = new Array();

/*чтоб копировать массив используют цикл*/

for(var i = 0; i < a.length; i++){
	b[i] = a[i];
}

a[2] = 10;

//свойства

a_len = a.length;

//добавление нового элемента
a[a.length] = 100;

Array.prototype.author = 'Roman';

transport.author = 'Любитель транспорта';
a.author = 'Математик';

//добавление метода как свойства
function aSum(x){
	var s = 0;
	for(var i = 0; i <= x.length-1; i++) {
		s = s + x[i];
	}
	return s;
}

function my_aSum(x) {
	var s = 0;
	for(var i = 0; i <= x.length-1; i++) {
		if(typeof(x[i]) == "number") {
			s += x[i];
		}
	}
	return s;
}

Array.prototype.Sum = aSum;
Array.prototype.my_Sum = my_aSum;

arr = new Array(1, 3, 5, 7);
summa = arr.Sum(arr);

arr_1 = new Array(1, 3, 'b', 4, 'c', 'e');
arr_2 = new Array(17, 'f', 9, 5, 'a');

summa_2 = my_aSum(arr_2);