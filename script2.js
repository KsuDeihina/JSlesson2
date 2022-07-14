var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');

if(a > b && a < c){
    alert(a + ' среднее число');
} else if(b > a && b < c) {
    alert(b + ' среднее число');
} else if(c > a && c < b) {
    alert(c + ' среднее число');
} else {
    alert('Вы ввели неверные данные')
}